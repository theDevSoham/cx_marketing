"use client";
import { Row, Col, Skeleton } from "antd";
import { useState, useEffect } from "react";

const CMC_XPRESS_ID = 13251;

const PriceStats = () => {
	const [loading, setLoading] = useState(true);
	const [xpressData, setXpressData] = useState({});
	const [priceToday, setPriceToday] = useState([
		{
			key: "Percentage Change (24h)",
			value: "- 2.33%"
		},
		{
			key: "Trading Volume (24h)",
			value: "$24,264"
		},
		{
			key: "Market Rank (CMC)",
			value: "#3413"
		},
		{
			key: "Fully Diluted Market Cap",
			value: "$300,424"
		}
	]);

	const [priceSupply, setPriceSupply] = useState([
		{ key: "Circulating Supply", value: "--" },
		{ key: "Total Supply", value: "10,000,000" },
		{ key: "Max Supply", value: "10,000,000" }
	]);

	const [xpressPrice, setXpressPrice] = useState(0);

	useEffect(() => {
		fetchXpressData();
	}, []);

	useEffect(() => {
		if (Object.keys(xpressData).length === 0) return;
		const usdQuotes = xpressData?.quote?.USD;
		setLoading(false);
		setXpressPrice(usdQuotes?.price?.toFixed(4));
		setPriceToday([
			{
				key: "Percentage Change (24h)",
				value: `${usdQuotes?.percent_change_24h?.toFixed(2)}%`
			},
			{
				key: "Trading Volume (24h)",
				value: `$${usdQuotes?.volume_24h?.toFixed(2)}`
			},
			{
				key: "Market Rank (CMC)",
				value: `#${xpressData?.cmc_rank}`
			},
			{
				key: "Fully Diluted Market Cap",
				value: `$${usdQuotes?.fully_diluted_market_cap?.toFixed(2)}`
			}
		]);
		setPriceSupply([
			{ key: "Circulating Supply", value: "--" },
			{ key: "Total Supply", value: `${xpressData?.total_supply} XPRESS` },
			{ key: "Max Supply", value: `${xpressData?.max_supply} XPRESS` }
		]);
	}, [xpressData]);

	const fetchXpressData = async () => {
		const res = await fetch("https://com-cx-cmcproxy.s1.cryptoxpress.com", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
			// mode: 'no-cors',
		});
		const data = await res.json();
		setXpressData(data.data[CMC_XPRESS_ID]);
	};

	return (
		<div
			style={{
				padding: "20px 30px",
				backgroundColor: "#fff",
				minHeight: "100%"
			}}
		>
			<div>
				{loading ? (
					<Skeleton.Input active={true} loading={true} />
				) : (
					<div style={{ fontWeight: "700", fontSize: "36px" }}>
						${xpressPrice} USDT
					</div>
				)}

				<div style={{ color: "#595D62", fontSize: "16px", padding: "15px 0" }}>
					Buy Tokens via the following exchanges:
				</div>
				<div>
					<img
						src="/assets/images/tokenPage/Frame.png"
						style={{ width: "100%", paddingBottom: "8px" }}
						alt=""
					/>
				</div>
			</div>
			<hr style={{ color: "#E2E2E2" }} />
			<div style={{ fontWeight: "700", fontSize: "32px", padding: "8px 0" }}>
				Xpress Price Stats
			</div>
			<div>
				<div
					style={{
						fontWeight: "600",
						fontSize: "16px",
						color: "#F29557",
						padding: "6px 0",
						marginTop: "4px"
					}}
				>
					CryptoXpress price today
				</div>
				{priceToday.map((item, index) => (
					<Row
						justify="space-between"
						style={{ margin: "20px 0", fontWeight: "500", color: "#2C2D32" }}
						key={index}
					>
						<Col>{item.key}</Col>
						<Col style={{ textAlign: "right" }}>
							{loading ? (
								<Skeleton.Input active={true} loading={true} size="small" />
							) : (
								item.value
							)}
						</Col>
					</Row>
				))}
			</div>
			<hr style={{ margin: "20px 0", color: "#E2E2E2" }} />
			<div>
				<div
					style={{
						fontWeight: "600",
						fontSize: "16px",
						color: "#F29557",
						marginTop: "4px"
					}}
				>
					CryptoXpress Supply
				</div>
				{priceSupply.map((item, index) => (
					<div key={index}>
						<Row
							justify="space-between"
							style={{ margin: "20px 0", fontWeight: "500", color: "#2C2D32" }}
							key={index}
						>
							<Col>{item.key}</Col>
							<Col style={{ textAlign: "right" }}>
								{loading ? (
									<Skeleton.Input active={true} loading={true} size="small" />
								) : (
									item.value
								)}
							</Col>
						</Row>
					</div>
				))}
			</div>
			{/* <hr style={{ margin: "20px 0", color: "#E2E2E2" }} /> */}
			{/* <div>
				<div style={{ fontWeight: "700", fontSize: "36px" }}>Staking Pools</div>
				<div
					style={{
						color: "#595D62",
						fontSize: "20px",
						fontWeight: "450",
						margin: "10px 0"
					}}
				>
					Earn an initial APY up to 2000%
				</div>
				<button
					style={{
						marginTop: "10px",
						padding: "15px",
						backgroundColor: "#18448D",
						color: "white",
						borderRadius: "4px",
						border: "0px"
					}}
				>
					<span style={{ fontWeight: "700", fontSize: "16px" }}>
						Stake Xpress
					</span>
				</button>
			</div> */}
		</div>
	);
};

export default PriceStats;
