import {
	Card,
	Col,
	Row,
	Table,
	Button,
	Spin,
	Grid,
	Flex,
	Tag,
	Input
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LayoutStyles from "@styles/Layout.module.css";
import AssetSummaryCard from "@components/@cryptoxpress/Trading/Asset/SummaryCard";
import LinkWithArrow from "@components/@cryptoxpress/Custom/LinkWithArrow";
import {
	RateLimit,
	fetch24HrTickerRest,
	DEX_COINS
} from "./PortfolioFunctions";
import React from "react";
import { Sparklines, SparklinesCurve, SparklinesSpots } from "react-sparklines";
import moment from "moment";
const { CheckableTag } = Tag;

const CX_BINANCE_BASE_URL = "https://bwsp.s1.cryptoxpress.com";

const HIGHLIGHT_COINS = [
	"XPRESS",
	"BTC",
	"ETH",
	"BNB",
	"USDC",
	"XRP",
	"ADA",
	"BUSD",
	"MATIC",
	"DOGE",
	"SOL",
	"DOT",
	"SHIB",
	"LTC",
	"AVAX",
	"TRX",
	"UNI",
	// "DAI",
	// "WBTC",
	"ATOM",
	"LINK",
	"ETC",
	"OKB",
	"LEO",
	"FIL"
];

const DEX_PAIRS = [
	{
		coin: "USDT",
		name: "Tether (BSC-USD)",
		contract: "0x55d398326f99059ff775485246999027b3197955",
		isLegalMoney: false
	},
	{
		coin: "BNB",
		name: "Binance Coin",
		contract: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
		isLegalMoney: false
	}
];

const TREND_COINS = ["BTC", "ETH", "BNB", "USDT"];

const CMC_XPRESS_ID = 13251;

const BEARER_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTY4MCwiaWF0IjoxNzA4ODQ1ODc1LCJleHAiOjE3MTE0Mzc4NzV9.OPPZtE5e2FmS6PDYBA_eLOGxGSxh8ODe4MzX08LSf3c";

export default function BookHolidays() {
	const [priceTickers, setPriceTickers] = React.useState({});
	const [fiatCoins, setFiatCoins] = React.useState({});
	const [blockedCoins, setBlockedCoins] = React.useState({});
	const [homeDisplayCoins, setHomeDisplayCoins] = React.useState([]);
	const [marketTrendCoins, setMarketTrendCoins] = React.useState([]);
	const [dexTableData, setDexTableData] = React.useState([]);
	const [dexPriceTableData, setDexPriceTableData] = React.useState([]);
	const [dexPairsPrices, setDexPairsPrices] = React.useState({});
	const [xpressData, setXpressData] = React.useState({});
	const [dexCharts, setDexCharts] = React.useState({});
	const [tableData, setTableData] = React.useState([]);
	const [cardData, setCardData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [tagsData, setTagsData] = React.useState([
		{
			title: "Popular",
			onTagClick: () => { },
			checked: true
		},
		{
			title: "Metaverse",
			onTagClick: () => { },
			checked: false
		},
		{
			title: "Entertainment",
			onTagClick: () => { },
			checked: false
		},
		{
			title: "Energy",
			onTagClick: () => { },
			checked: false
		},
		{
			title: "Gaming",
			onTagClick: () => { },
			checked: false
		},
		{
			title: "Music",
			onTagClick: () => { },
			checked: false
		},
		{
			title: "See All 12+",
			onTagClick: () => { },
			checked: false
		}
	]);

	const { useBreakpoint } = Grid;
	const { lg, md, sm, xs } = useBreakpoint();

	const columns = [
		{
			title: "NO",
			dataIndex: "no",
			key: "no",
			responsive: ["lg"]
		},
		{
			title: "Symbol",
			dataIndex: "symbol",
			key: "symbol"
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "Last Price",
			dataIndex: "price",
			key: "price",
			align: "right"
		},
		{
			title: "Change",
			dataIndex: "change",
			key: "change",
			responsive: ["lg"],
			align: "right"
		},
		{
			title: "Market Stats",
			dataIndex: "stats",
			key: "stats",
			responsive: ["lg"],
			align: "right"
		},
		{
			title: "Trade",
			key: "trade",
			responsive: ["lg"],
			align: "center",
			render: () => (
				<Button style={{ background: "#0FAE96", color: "#fff" }}>Trade</Button>
			)
		}
	];

	const open24HrTickerWs = (interval = 5000) => {
		let fetchingRest = false;
		let wsConnectionRetries = 0;
		fetch24HrTickerRest();
		const wsURL = `wss://bwsp.s1.cryptoxpress.com/ws/!ticker@arr`;
		let ws = new WebSocket(wsURL);

		const rateLimit = RateLimit(1, interval);

		ws.onerror = (err) => {
			console.error("24hr Ticker Error", err);
		};

		ws.onclose = function (this: WebSocket, ev: CloseEvent) {
			const { code, reason } = ev;
			console.log(`24hr Ticker WS connection CLOSED`, code, reason);

			if ((!code || (code && code !== 420)) && wsConnectionRetries <= 20) {
				console.log(`RETRYING 24hr Ticker Websocket`);
				wsConnectionRetries += 1;
				ws = null;
				open24HrTickerWs(interval);
			}
		};

		ws.onopen = () => {
			console.log(`24hr Ticker Websocket connection OPENED`);
			wsConnectionRetries = 0;
		};

		ws.onmessage = (msg) => {
			if (rateLimit(ws) || fetchingRest) {
				return;
			} else {
				if (!msg?.data) return;
				const parsedData = JSON.parse(msg.data);

				for (const data of parsedData) {
					// format data
					const _ticker = {
						symbol: data.s,
						high: Number(data.h),
						low: Number(data.l),
						bid: Number(data.b),
						ask: Number(data.a),
						open: Number(data.o),
						close: parseFloat((Number(data.c) * 1.002).toFixed(8)),
						last: parseFloat((Number(data.c) * 1.002).toFixed(8)),
						change: Number(data.p),
						percentage: Number(data.P),
						volume: Number(data.v)
					};
					setPriceTickers((prev) => ({
						...prev,
						[_ticker?.symbol?.toLowerCase()]: _ticker
					}));
				}

				// console.log("Price Ticker from WS: ", priceTickers);
				// return priceTickers;
			}
		};
	};

	const fetchFiatsAndBlockedCoins = async () => {
		const blockedCoinUrl =
			"https://s1.backend.cryptoxpress.com/blocked-coins?_limit=-1";
		const _blocked = await (
			await fetch(blockedCoinUrl, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${BEARER_TOKEN}`
				}
			})
		).json();
		if (_blocked && _blocked.length > 0) {
			const _hashedBlockedCoins = {};
			for (const coin of _blocked) {
				_hashedBlockedCoins[coin.symbol] = coin;
			}
			setBlockedCoins(_hashedBlockedCoins);
		}

		const fiatCoinUrl =
			"https://s1.backend.cryptoxpress.com/fiat-coins?_limit=-1";
		const _fiats = await (
			await fetch(fiatCoinUrl, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${BEARER_TOKEN}`
				}
			})
		).json();
		if (_fiats && _fiats.length > 0) {
			const _hashedFiatCoins = {};
			for (const coin of _fiats) {
				_hashedFiatCoins[coin.symbol] = coin;
			}
			setFiatCoins(_hashedFiatCoins);
		}
	};

	const fetchDexPairPriceInUSD = async (coinName = "") => {
		if (!coinName.trim()) return null;
		const dexPairContract = DEX_PAIRS.find(
			(d) => d.coin.toLowerCase() === coinName.toLowerCase()
		)?.contract;
		try {
			const url = `https://deep-index.moralis.io/api/v2/erc20/${dexPairContract}/price?chain=bsc&exchange=pancakeswapv2`;
			const res = await (
				await fetch(url, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"X-API-Key":
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImRkMzk2Y2RhLTUyYzktNGRmMi1iZTM1LTlhOGI0MzNlNDY2OCIsIm9yZ0lkIjoiMzQ3ODg2IiwidXNlcklkIjoiMzU3NTkzIiwidHlwZUlkIjoiNzYxOTNmYjgtYjg1YS00MWNkLTk1NjUtZTg0NGY4MTUxNzZiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODkxNTU3ODMsImV4cCI6NDg0NDkxNTc4M30.a-LTMXOVgYOhZsrrfUzcFKsR37KbLdbe9tg_gCalxdY"
					}
				})
			).json();
			if (res) {
				setDexPairsPrices((prev) => {
					return {
						...prev,
						[coinName.toUpperCase()]: {
							price: res?.usdPrice,
							price_BNB:
								res?.nativePrice?.value /
								10 ** (res?.nativePrice?.decimals ?? 0)
						}
					};
				});
			}
		} catch (err) {
			console.log("dex price fetch error: ", err);
			return null;
		}
	};

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

	const isFiatTradeable = React.useCallback(
		async (fiat) => {
			if (!(fiat in fiatCoins)) return false;
			return fiatCoins[fiat]?.is_enabled;
		},
		[fiatCoins]
	);

	const isCoinBlocked = React.useCallback(
		(coin) => {
			return coin in blockedCoins;
		},
		[blockedCoins]
	);

	const isCoinFiat = React.useCallback(
		(coin) => {
			return coin in fiatCoins;
		},
		[fiatCoins]
	);

	const fetchandSanitizeCapitalConfigs = async () => {
		let _coinInfoSanitized = [];
		const capitalConfigsUrl =
			"https://s1.backend.cryptoxpress.com/binance-exchange/capital-configs";
		try {
			const _coinInfo = await (
				await fetch(capitalConfigsUrl, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${BEARER_TOKEN}`
					}
				})
			).json();

			let exchangeInfo = await (
				await fetch(`${CX_BINANCE_BASE_URL}/spot/api/v3/exchangeInfo`)
			).json();

			for (let i = 0; i < _coinInfo.length; i++) {
				const coin = _coinInfo[i];
				if (!coin?.coin) continue;
				// don't show non-trading coins
				if (!coin.trading) continue;
				// check whether to enable fiat trading if coin is fiat
				if (coin.isLegalMoney && isFiatTradeable(coin.coin)) {
					coin.isFiatTradingEnabled = true;
				}
				// check if coin is blocked from trading in CX
				coin.isTradingBlocked = isCoinBlocked(coin.coin);
				try {
					// Get all valid trading pairs (symbols) for a coin from exchange info and merge it to the coin info list
					coin.pairs = exchangeInfo?.symbols?.filter((symbol) => {
						if (
							symbol?.baseAsset === coin.coin &&
							symbol?.status.match(/^(TRADING|HALT)$/)
						) {
							if (isCoinFiat(symbol?.quoteAsset))
								return isFiatTradeable(symbol?.quoteAsset);
							return !isCoinBlocked(symbol?.quoteAsset);
						}
						return false;
					});
				} catch (err) {
					console.error(err, "Error Sanitizing Coin Info");
				}
				_coinInfoSanitized.push(coin);
			}

			if (_coinInfoSanitized.length > 0) setLoading(false);

			// Sort alphabetically
			_coinInfoSanitized = _coinInfoSanitized.sort(function (a, b) {
				const nameA = a?.coin?.toUpperCase();
				const nameB = b?.coin?.toUpperCase();
				return nameA?.localeCompare(nameB);
			});

			setHomeDisplayCoins(
				HIGHLIGHT_COINS.map((item) => {
					return _coinInfoSanitized.find((coin) => coin.coin === item);
				}).filter((item, ind) => typeof item !== "undefined" && ind <= 7)
			);

			setMarketTrendCoins(
				TREND_COINS.map((item) => {
					return _coinInfoSanitized.find((coin) => coin.coin === item);
				}).filter((item) => typeof item !== "undefined")
			);
			// console.log("Home coin info: ", homeDisplayCoins);
		} catch (e) {
			console.log("Capital Configs Error", e);
			// alert("Capital Configs Error");
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

	React.useEffect(() => {
		setLoading(true);
		open24HrTickerWs();
		fetchFiatsAndBlockedCoins();
		fetchXpressData();
		fetchDexPairPriceInUSD("USDT");
	}, []);

	React.useEffect(() => {
		HIGHLIGHT_COINS.filter(
			(item, ind) => typeof item !== "undefined" && ind <= 7
		).forEach((coin) => {
			fetchDexHistoricalCharts({
				symbol: coin?.toLowerCase(),
				startTime: moment().subtract(1, "days").format("YYYY-MM-DD"),
				endTime: moment().format("YYYY-MM-DD"),
				samples: 30
			})
				.then((res) => {
					if (res[coin.toUpperCase()]) {
						setDexCharts((prev) => ({
							...prev,
							[coin.toLowerCase()]: res?.[coin.toUpperCase()]?.map(
								(item) => item[1]
							)
						}));
					}
				})
				.catch((e) => console.log("Dex Chart Error: ", e));
		});
	}, []);

	React.useEffect(() => {
		console.log("Dex charts Data: ", dexCharts);
	}, [dexCharts]);

	React.useEffect(() => {
		fetchandSanitizeCapitalConfigs();
	}, [fiatCoins, blockedCoins]);

	React.useEffect(() => {
		if (xpressData) {
			setDexTableData([
				{
					key: String(1),
					no: 1,
					symbol: (
						<img
							src={`https://cdn.jsdelivr.net/gh/cryptoxpress/crypto-icons/iconspng/xpress.png`}
							alt=""
							style={{
								maxWidth: 44,
								maxHeight: 44
							}}
						></img>
					),
					name: "XPRESS",
					price: `${xpressData?.quote?.USD?.price?.toFixed(6)} USD`,
					change: `${xpressData?.quote?.USD?.percent_change_24h?.toFixed(2)}% (Last 24hr)`,
					stats: (
						<Sparklines height={50} data={dexCharts["xpress"]?.slice(0, 7)}>
							<SparklinesCurve
								color="#22B49E"
								stroke="#559500"
								fill="#8fc638"
							/>
							<SparklinesSpots style={{ fill: "#56b45d", size: "4" }} />
						</Sparklines>
					)
				}
			]);
		}

		if (Object.keys(dexPairsPrices).length > 0) {
			setDexPriceTableData(
				DEX_PAIRS.map((coin, index) => {
					const dexPriceData = dexPairsPrices[coin?.coin?.toUpperCase()];

					if (dexPriceData) {
						return {
							key: String(index + 1 + DEX_COINS.length),
							no: index + 1 + DEX_COINS.length,
							symbol: (
								<img
									src={`https://cdn.jsdelivr.net/gh/cryptoxpress/crypto-icons/iconspng/${coin?.coin?.toLowerCase()}.png`}
									alt=""
									style={{
										maxWidth: 44,
										maxHeight: 44
									}}
								></img>
							),
							name: coin?.name,
							price: `${dexPriceData?.price?.toFixed(6)} USD`,
							change: "N/A",
							stats: "N/A"
						};
					}
				}).filter(
					(item) => item?.key !== null && typeof item?.key !== "undefined"
				)
			);
		}

		if (homeDisplayCoins.length > 0) {
			setTableData(
				homeDisplayCoins.map((coin, index) => {
					const priceTickerObject =
						coin?.coin?.toLowerCase() === "USDT"
							? priceTickers[`usdtidrt`]
							: priceTickers[`${coin?.coin?.toLowerCase()}usdt`];
					if (priceTickerObject) {
						return {
							key: String(
								index +
								1 +
								DEX_COINS.length +
								Object.keys(dexPairsPrices).length
							),
							no:
								index +
								1 +
								DEX_COINS.length +
								Object.keys(dexPairsPrices).length,
							symbol: (
								<img
									src={`https://cdn.jsdelivr.net/gh/cryptoxpress/crypto-icons/iconspng/${coin?.coin?.toLowerCase()}.png`}
									alt=""
									style={{
										maxWidth: 44,
										maxHeight: 44
									}}
								></img>
							),
							name: coin?.name,
							price: `${priceTickerObject?.last?.toFixed(2)} ${coin?.coin?.toLowerCase() === "USDT" ? "IDRT" : "USDT"}`,
							change: `${priceTickerObject?.percentage}%`,
							stats: (
								<Sparklines
									height={50}
									data={dexCharts[coin?.coin?.toLowerCase()]?.slice(0, 7)}
								>
									<SparklinesCurve
										color="#22B49E"
										stroke="#559500"
										fill="#8fc638"
									/>
									<SparklinesSpots style={{ fill: "#56b45d", size: "4" }} />
								</Sparklines>
							)
						};
					}

					return {
						key: String(
							index + 1 + DEX_COINS.length + Object.keys(dexPairsPrices).length
						),
						no:
							index + 1 + DEX_COINS.length + Object.keys(dexPairsPrices).length,
						symbol: (
							<img
								src={`https://cdn.jsdelivr.net/gh/cryptoxpress/crypto-icons/iconspng/${coin?.coin?.toLowerCase()}.png`}
								alt=""
								style={{
									maxWidth: 44,
									maxHeight: 44
								}}
							></img>
						),
						name: coin?.name,
						price: "N/A",
						change: "N/A",
						stats: "N/A"
					};
				})
			);
		}

		if (marketTrendCoins.length > 0) {
			setCardData(
				marketTrendCoins.map((coin) => {
					const priceTickerObject =
						priceTickers[`${coin?.coin?.toLowerCase()}usdt`];

					if (coin?.coin?.toLowerCase() === "usdt") {
						return {
							coin: coin,
							percentage: null,
							price:
								dexPairsPrices[coin?.coin?.toUpperCase()]?.price?.toFixed(2) ??
								null,
							stats: (
								<Sparklines
									height={50}
									data={dexCharts[coin?.coin?.toLowerCase()]?.slice(0, 7)}
								>
									<SparklinesCurve
										color="#22B49E"
										stroke="#559500"
										fill="#8fc638"
									/>
									<SparklinesSpots style={{ fill: "#56b45d", size: "4" }} />
								</Sparklines>
							),
							quoteAsset: "USD"
						};
					}

					if (priceTickerObject) {
						return {
							coin: coin,
							percentage: priceTickerObject?.percentage,
							price: priceTickerObject?.last?.toFixed(2),
							stats: (
								<Sparklines
									height={50}
									data={dexCharts[coin?.coin?.toLowerCase()]?.slice(0, 7)}
								>
									<SparklinesCurve
										color="#22B49E"
										stroke="#559500"
										fill="#8fc638"
									/>
									<SparklinesSpots style={{ fill: "#56b45d", size: "4" }} />
								</Sparklines>
							),
							quoteAsset: "USDT"
						};
					}

					return {
						coin: coin,
						percentage: null,
						price: null,
						stats: (
							<Sparklines
								height={50}
								data={dexCharts[coin?.coin?.toLowerCase()]?.slice(0, 7)}
							>
								<SparklinesCurve
									color="#22B49E"
									stroke="#559500"
									fill="#8fc638"
								/>
								<SparklinesSpots style={{ fill: "#56b45d", size: "4" }} />
							</Sparklines>
						),
						quoteAsset: "USDT"
					};
				})
			);
		}
	}, [priceTickers, xpressData, dexPairsPrices, dexCharts]);

	return (
		<>
			<div className={LayoutStyles.container}>
				<div className="media_header" style={{ margin: "50px 0 20px 0" }}>
					<div
						style={{
							textAlign: "center",
							textTransform: "uppercase",
							color: "#F29557",
							fontWeight: "600",
							lineHeight: "1"
						}}
					>
						TRADE CRYPTO AND
					</div>
					<div style={{ textAlign: "center" }}>
						<h2
							style={{
								textTransform: "uppercase",
								fontWeight: "900",
								fontSize: "50px",
								lineHeight: "1.5"
							}}
						>
							GROW YOUR PORTFOLIO
						</h2>
					</div>
					<div style={{ textAlign: "center" }}>
						<p>
							Crypto ecosystem access, banking features, retail, travel and
							more, at your fingertips on your phone.
						</p>
					</div>
				</div>
				{loading ? (
					<Row justify="center" align="middle">
						<Spin size="large" />
					</Row>
				) : (
					<>
						<Row justify="space-between">
							<h2 style={{ padding: "20px 0px" }}>Market Trend</h2>
							<Col xs={12} md={0} lg={0}>
								<Flex
									justify="end"
									align="center"
									style={{ width: "100%", height: "100%" }}
								>
									<LinkWithArrow text={"See all coins"} href={"#"} />
								</Flex>
							</Col>
							<Col xs={0} md={10} lg={10}></Col>
						</Row>
						<Row
							gutter={[12, 12]}
							justify={"space-between"}
							style={{
								flexWrap: "nowrap",
								overflowX: "auto"
							}}
						>
							{cardData.map((item, index) => (
								<Col key={index} xs={24} sm={12} lg={6}>
									<AssetSummaryCard
										coin={item?.coin}
										percentage={item?.percentage}
										price={item?.price}
										quote={item?.quoteAsset}
										statsComponent={item?.stats}
									/>
								</Col>
							))}
						</Row>
						<div style={{ paddingBottom: "10px" }}></div>
						<h2 style={{ padding: "20px 0px" }}>Market Movers</h2>

						<div
							style={{
								marginBottom: "30px"
							}}
						>
							<Row justify="space-between" gutter={[12, 12]}>
								<Col
									xs={24}
									md={18}
									style={{ display: "flex", overflowX: "auto" }}
								>
									{tagsData.map((tag, index) => (
										<CheckableTag
											key={index}
											checked={tagsData[index].checked}
											onChange={(checked) =>
												setTagsData((prev) => {
													const _prev = [...prev];
													_prev[index].checked = checked;
													return _prev;
												})
											}
											style={{
												padding: "10px 12px",
												backgroundColor: tag.checked ? "#F29557" : "#FFFFFF"
											}}
										>
											{tag.title}
										</CheckableTag>
									))}
								</Col>
								<Col xs={24} md={6}>
									<Input
										size="large"
										placeholder="Search Coins"
										prefix={<SearchOutlined />}
									/>
								</Col>
							</Row>
						</div>

						<Table
							columns={columns}
							dataSource={[...dexTableData, ...dexPriceTableData, ...tableData]}
							pagination={false}
							showHeader={lg}
						/>
						<div
							style={{
								textAlign: "center",
								padding: "30px 0 10px 0",
								fontWeight: "600",
								lineHeight: "2",
								display: lg || md ? "block" : "none"
							}}
						>
							<LinkWithArrow text={"See all coins"} href={"#"} />
						</div>
					</>
				)}
			</div>
		</>
	);
}
