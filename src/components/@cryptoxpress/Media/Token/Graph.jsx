"use client";
import { Col, Row, Grid } from "antd";
import * as d3 from "d3";
import moment from "moment";
import { useEffect, useRef, useState, useCallback } from "react";

const XPRESS_INFO = {
	coin: "XPRESS",
	name: "XPRESS",
	contract: "0xaA9826732f3A4973FF8B384B3f4e3c70c2984651",
	isLegalMoney: false,
	isDexCoin: true
};

const coin = {
	symbol: XPRESS_INFO.coin,
	name: XPRESS_INFO.name
};

const intervals = ["1d", "1w", "1M", "6M", "1Y"];
const timeFormatStrings = {
	"1d": "%I %M %p",
	"1w": "%e %b",
	"1M": "%e %b",
	"6M": "%b %Y",
	"1Y": "%b %Y"
};

const Graph = ({ chartWidth, chartHeight }) => {
	const ref = useRef();
	const { xs, sm, md, lg } = Grid.useBreakpoint();

	const [loadingKline, setLoadingKline] = useState(false);
	const [klineData, setKlineData] = useState({});
	const [interval, setInterval] = useState("1M");

	const fetchKlineData = async (_quoteAsset = "USDT") => {
		if (loadingKline || coin?.symbol === _quoteAsset) return;
		setLoadingKline(true);
		// if (klineData[interval] && klineData[interval].length > 0) {
		//   return setLoadingKline(false)
		// }
		try {
			const symbol = `${coin?.symbol?.toUpperCase()}`;
			const res = await fetchDexHistoricalCharts({
				symbol,
				...selectIntervalToFetch()
			});
			if (res?.[symbol]) {
				setKlineData((_data) => {
					return {
						..._data,
						[interval]: res[symbol]
					};
				});
			}
		} catch (err) {
			console.log("Kline error: ", err);
		} finally {
			setLoadingKline(false);
		}
	};

	const fetchDexHistoricalCharts = async ({
		symbol,
		startTime,
		endTime,
		samples
	}) => {
		const url = `https://coincodex.com/api/coincodex/get_coin_history/${symbol}/${startTime}/${endTime}/${samples}`;
		const res = await (await fetch(url)).json();
		if (res) return res;
		return null;
	};

	const selectIntervalToFetch = () => {
		let params = {};
		switch (interval) {
			case "1d":
				params = {
					startTime: moment().subtract(1, "d").format("YYYY-MM-DD"), // fetch from 10 min ago
					samples: 96
				};
				break;
			case "1w":
				params = {
					// interval: KLINE_INTERVALS.ONE_HOUR, // fetch 1 minute intervals
					startTime: moment().subtract(1, "w").format("YYYY-MM-DD"), // fetch from 10 min ago
					samples: 84
				};
				break;
			case "1M":
				params = {
					// interval: KLINE_INTERVALS.EIGHT_HOURS, // fetch 1 minute intervals
					startTime: moment().subtract(1, "M").format("YYYY-MM-DD"), // fetch from 10 min ago
					samples: 120
				};
				break;
			case "6M":
				params = {
					// interval: KLINE_INTERVALS.THREE_DAYS, // fetch 1 minute intervals
					startTime: moment().subtract(6, "M").format("YYYY-MM-DD"), // fetch from 10 min ago
					samples: 150
				};
				break;
			case "1Y":
				params = {
					// interval: KLINE_INTERVALS.ONE_WEEK, // fetch 1 minute intervals
					startTime: moment().subtract(1, "Y").format("YYYY-MM-DD"), // fetch from 10 min ago
					samples: 150
				};
				break;
		}
		return { ...params, endTime: moment().format("YYYY-MM-DD") };
	};

	const formatKlineData = useCallback(() => {
		const _labels = [];
		const _data = [];
		// console.log(klineData[interval], "interval data")
		if (klineData[interval] && klineData[interval].length > 0) {
			klineData[interval].forEach((obj, idx) => {
				try {
					_data.push(parseFloat(Number(obj[1]).toFixed(8)));
					_labels.push(obj[0]);
				} catch (err) {
					console.log(err);
				}
			});
		}
		return {
			dates: _labels,
			prices: _data
		};
	}, [klineData, interval]);

	useEffect(() => {
		fetchKlineData("USDT");
	}, [interval]);

	useEffect(() => {
		// set the dimensions and margins of the graph
		const chartData = formatKlineData();
		const dataset = [];
		for (
			let i = 0;
			i < (chartData.dates.length || chartData.prices.length);
			i++
		) {
			dataset.push({
				date: d3.utcParse("%s")(chartData.dates[i]),
				value: chartData.prices[i]
			});
		}

		const graphPadding = md || lg ? 110 : 30;
		const margin = { top: 0, right: 20, bottom: 30, left: 50 },
			width = chartWidth - margin.left - margin.right - graphPadding,
			height = 400 - margin.top - margin.bottom;
		// set x and y scales
		const x = d3.scaleUtc().range([0, width]);
		const y = d3.scaleLinear().range([height, 0]);

		// append the svg object to the body of the page
		d3.select(ref.current).selectAll("*").remove();
		const svg = d3
			.select(ref.current)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		const tooltip = svg.append("div").attr("class", "tooltip");

		// define x and y domain
		x.domain(d3.extent(dataset, (d) => d.date));
		y.domain([0, d3.max(dataset, (d) => d.value)]);

		// add the x-axis
		svg
			.append("g")
			.attr("transform", `translate(0, ${height})`)
			.call(
				d3
					.axisBottom(x)
					.ticks(Math.max(width / 50, 2))
					.tickFormat(d3.timeFormat(timeFormatStrings[interval]))
			);

		// add the y-axis
		svg.append("g").call(d3.axisLeft(y));

		// create the line generator

		const area = d3
			.area()
			.x((d) => x(d.date))
			.y0(height)
			.y1((d) => y(d.value));

		svg
			.append("path")
			.datum(dataset)
			.attr("class", "area")
			.attr("d", area)
			.on("mouseover", function (event) {
				const [xCoord] = d3.pointer(event, this);
				const bisectDate = d3.bisector((d) => d.date).left;
				const x0 = x.invert(xCoord);
				const i = bisectDate(dataset, x0, 1);
				const d0 = dataset[i - 1];
				const d1 = dataset[i];
				const dataPoint = x0 - d0.date > d1.date - x0 ? d1 : d0;
				const xPos = x(dataPoint.date);
				const yPos = y(dataPoint.value);
				// console.log("Area data: ", dataPoint?.date?.toLocaleDateString());

				circle.attr("cx", xPos).attr("cy", yPos);
				circle.transition().duration(50).attr("r", 5);

				tooltip
					.style("display", "block")
					.style("left", `${xPos + 100}px`)
					.style("top", `${yPos + 50}px`)
					.html(
						`<strong>Date:</strong> ${dataPoint.date}<br><strong>Price:</strong> ${dataPoint.date}`
					);
			})
			.on("mousemove", function (event, d) {
				const [xCoord] = d3.pointer(event, this);
				const bisectDate = d3.bisector((d) => d.date).left;
				const x0 = x.invert(xCoord);
				const i = bisectDate(dataset, x0, 1);
				const d0 = dataset[i - 1];
				const d1 = dataset[i];
				const dataPoint = x0 - d0.date > d1.date - x0 ? d1 : d0;
				const xPos = x(dataPoint.date);
				const yPos = y(dataPoint.value);
				// console.log("Area data: ", dataPoint?.date?.toLocaleDateString());

				circle.attr("cx", xPos).attr("cy", yPos);
				circle.transition().duration(50).attr("r", 5);

				tooltip
					.style("display", "block")
					.style("left", `${xPos + 100}px`)
					.style("top", `${yPos + 50}px`)
					.html(
						`<strong>Date:</strong> ${dataPoint.date}<br><strong>Price:</strong> ${dataPoint.date}`
					);
			})
			.on("mouseout", function (d) {
				circle.transition().duration(50).attr("r", 0);

				tooltip.style("display", "none");
			});

		const line = d3
			.line()
			.x((d) => x(d.date))
			.y((d) => y(d.value));
		// add the line path to the svg element

		svg.append("path").datum(dataset).attr("class", "line").attr("d", line);

		const circle = svg
			.append("circle")
			.attr("r", 0)
			.attr("fill", "#41c3a9")
			.style("stroke", "white")
			.attr("opacity", "0.7")
			.style("pointer-events", "none");

		svg.append("path").datum(dataset).attr("class", "line").attr("d", line);
	}, [klineData]);
	return (
		<div
			style={{
				backgroundColor: "white",
				borderRadius: md ? "20px" : "0",
				padding: "15px"
			}}
		>
			<Row>
				<Col lg={12} md={12} sm={12} xs={24}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: xs ? "center" : "left",
							alignItems: "center",
							margin: "20px 30px",
							gap: "10px"
						}}
					>
						<img
							src="https://img.cryptoxpress.com/a/rs:auto:128:128:0/g:sm/plain/https://raw.githubusercontent.com/cryptoxpress/crypto-icons/main/iconspng/xpress.png"
							height="36px"
							width="36px"
							alt=""
						/>
						<div
							style={{ fontSize: lg ? "24px" : "18px", fontWeight: "semibold" }}
						>
							XPRESS <span style={{ color: "#C9C9C9" }}>USDT</span>
						</div>
					</div>
				</Col>
				<Col xs={24} sm={12}
					md={12} lg={12}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "end"
						// width: "100%"
					}}
				>
					<div
						style={{
							display: "flex",
							margin: "10px",
							padding: "10px",
							justifyContent: "space-evenly",
							background: "#f4f5f9",
							fontWeight: "bold",
							borderRadius: "5px",
							width: xs ? "100%" : "75%"
						}}
					>
						{intervals.map((i, index) => (
							<button
								key={index}
								style={{
									margin: lg ? "0 5px" : "0 2px",
									background: interval === i ? "white" : "#00000000",
									border: "none",
									borderRadius: "4px",
									padding: lg ? "4px 10px" : "4px 5px",
									fontWeight: "600"
								}}
								onClick={() => setInterval(i)}
							>
								{i}
							</button>
						))}
					</div>
				</Col>
			</Row>
			<svg height={200} width="100%" ref={ref} />
		</div>
	);
};

export default Graph;
