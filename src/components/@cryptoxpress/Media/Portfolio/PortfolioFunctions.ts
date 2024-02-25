const XPRESS_INFO = {
	coin: "XPRESS",
	name: "XPRESS",
	contract: "0xaA9826732f3A4973FF8B384B3f4e3c70c2984651",
	isLegalMoney: false,
	isDexCoin: true
};

// custom tokens to add to markets/trade screen
export const DEX_COINS = [XPRESS_INFO];

const CX_BINANCE_BASE_URL = "https://bwsp.s1.cryptoxpress.com";

const HIGHLIGHT_COINS = [
	"XPRESS",
	"BTC",
	"ETH",
	"BNB",
	"USDT",
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

const TREND_COINS = ["BTC", "ETH", "BNB", "USDT"];

let fiatCoins = {};
let _coinInfoSanitized = [];
let blockedCoins = {};
let homeDisplayCoins = [];
let marketTrendCoins = [];

const isCoinBlocked = (coin) => {
	return coin in blockedCoins;
};

const isFiatTradeable = async (fiat) => {
	if (!(fiat in fiatCoins)) return false;
	return fiatCoins[fiat]?.is_enabled;
};

const isCoinFiat = (coin) => {
	return coin in fiatCoins;
};

const fetchFiatsAndBlockedCoins = async () => {
	const blockedCoinUrl =
		"https://s1.backend.cryptoxpress.com/blocked-coins?_limit=-1";
	const _blocked = await (
		await fetch(blockedCoinUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTY4MCwiaWF0IjoxNzA2MTY0OTA2LCJleHAiOjE3MDg3NTY5MDZ9.xu5e836JJ-koOTxwCgeKTRIsUvwAk0ODM4XZOmTXmYU"
			}
		})
	).json();
	if (_blocked && _blocked.length > 0) {
		const _hashedBlockedCoins = {};
		for (const coin of _blocked) {
			_hashedBlockedCoins[coin.symbol] = coin;
		}
		blockedCoins = _hashedBlockedCoins;
	}

	const fiatCoinUrl =
		"https://s1.backend.cryptoxpress.com/fiat-coins?_limit=-1";
	const _fiats = await (
		await fetch(fiatCoinUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTY4MCwiaWF0IjoxNzA2MTY0OTA2LCJleHAiOjE3MDg3NTY5MDZ9.xu5e836JJ-koOTxwCgeKTRIsUvwAk0ODM4XZOmTXmYU"
			}
		})
	).json();
	if (_fiats && _fiats.length > 0) {
		const _hashedFiatCoins = {};
		for (const coin of _fiats) {
			_hashedFiatCoins[coin.symbol] = coin;
		}
		fiatCoins = _hashedFiatCoins;
	}
};

const fetchPancakeSwapPrice = async () => {
	let dexTokenPrices = {};
	// fetch XPRESS Price from PancakeSwap
	for (const coin of DEX_COINS) {
		try {
			const url = `https://deep-index.moralis.io/api/v2/erc20/${coin?.contract}/price?chain=bsc&exchange=pancakeswapv2`;
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
				dexTokenPrices[coin?.name?.toUpperCase()] = {
					price: res.usdPrice,
					price_BNB:
						res.nativePrice?.value / 10 ** (res.nativePrice?.decimals ?? 0)
				};
				console.log("pancake swap: ", dexTokenPrices);
			}
		} catch (err) {
			console.log("pancake swap error: ", err, coin?.contract);
		}
	}
};

const fetchandSanitizeCapitalConfigs = async () => {
	const capitalConfigsUrl =
		"https://s1.backend.cryptoxpress.com/binance-exchange/capital-configs";
	try {
		const _coinInfo = await (
			await fetch(capitalConfigsUrl, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTY4MCwiaWF0IjoxNzA2MTY0OTA2LCJleHAiOjE3MDg3NTY5MDZ9.xu5e836JJ-koOTxwCgeKTRIsUvwAk0ODM4XZOmTXmYU"
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

		// Sort alphabetically
		_coinInfoSanitized = _coinInfoSanitized.sort(function (a, b) {
			const nameA = a?.coin?.toUpperCase();
			const nameB = b?.coin?.toUpperCase();
			return nameA?.localeCompare(nameB);
		});

		homeDisplayCoins = HIGHLIGHT_COINS.map((item) => {
			return _coinInfoSanitized.find((coin) => coin.coin === item);
		}).filter((item, ind) => typeof item !== "undefined" && ind <= 7);

		marketTrendCoins = TREND_COINS.map((item) => {
			return _coinInfoSanitized.find((coin) => coin.coin === item);
		}).filter((item) => typeof item !== "undefined");
		// console.log("Home coin info: ", homeDisplayCoins);
	} catch (e) {
		console.log("Capital Configs Error", e);
		alert("Capital Configs Error");
	}
};

export const fetch24HrTickerRest = async () => {
	let _priceTickers = {};
	try {
		// const tickerURL = 'https://api.binance.com/api/v3/ticker/24hr'
		const tickerURL = `${CX_BINANCE_BASE_URL}/spot/api/v3/ticker/24hr`;
		const tickers = await (await fetch(tickerURL)).json();

		if (tickers) {
			for (const data of tickers) {
				if (data) {
					// format data
					const _ticker = {
						symbol: data.symbol,
						high: Number(data.highPrice) * 1.002,
						low: Number(data.lowPrice) * 1.002,
						bid: Number(data.bidPrice),
						ask: Number(data.askPrice),
						open: Number(data.openPrice) * 1.002,
						close: parseFloat((Number(data.lastPrice) * 1.002).toFixed(8)),
						last: parseFloat((Number(data.lastPrice) * 1.002).toFixed(8)),
						change: Number(data.priceChange),
						percentage: Number(data.priceChangePercent),
						volume: Number(data.volume)
					};
					_priceTickers[_ticker?.symbol?.toLowerCase()] = _ticker;
				}
			}

			// console.log("Price Ticker from Rest: ", _priceTickers);
		}
	} catch (e) {
		console.log("24hr Ticker Error", e);
		// alert("24hr Rest Ticker Error" + e);
	}
};

export const RateLimit = (limit, interval) => {
	let now = 0;
	const last = Symbol("last");
	const count = Symbol("count");
	setInterval(() => ++now, interval);
	return (_ws) => {
		if (!_ws) return null;
		if (_ws[last] !== now) {
			_ws[last] = now;
			_ws[count] = 1;
		} else {
			return ++_ws[count] > limit;
		}
	};
};

export const fetchInitialCoins = () => {
	fetchFiatsAndBlockedCoins().then(() => {
		fetchPancakeSwapPrice().then(() => {
			fetchandSanitizeCapitalConfigs().then(() => {
				console.log(
					"Fetching initial coins: ",
					homeDisplayCoins,
					marketTrendCoins
				);

				return { homeDisplayCoins, marketTrendCoins };
			});
		});
	});
};
