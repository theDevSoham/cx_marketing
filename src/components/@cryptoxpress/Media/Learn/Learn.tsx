import { Card, Carousel, Col, Flex, Row, Spin, Tag } from "antd";
import LayoutStyles from "@styles/Layout.module.css";
import LinkWithArrow from "@components/@cryptoxpress/Custom/LinkWithArrow";
import React from "react";
const { Meta } = Card;

function truncateString(str, minLen = 10) {
	if (typeof str !== "string") return str;
	if (str.length > minLen) {
		return str.slice(0, minLen) + "...";
	} else {
		return str;
	}
}

export default function Learn() {
	const [news, setNews] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const getNewsList = async () => {
		const resp = await (
			await fetch(
				"https://cryptonews-api.com/api/v1/category?section=general&items=7&page=1&token=jenkblftud4ceyamhv7imsovxffsctjjjak9yniq"
			)
		).json();

		return resp.data;
	};

	React.useEffect(() => {
		getNewsList()
			.then((res) => {
				console.log("News: ", res[0]);
				setNews(res);
				setLoading(false);
			})
			.catch((e) => {
				// alert("Error fetching news" + e);
				console.log("Error fetching news: ", e);
				setLoading(false);
			});
	}, []);
	return (
		<>
			<div className={LayoutStyles.container}>
				<div className="media_header" style={{ margin: "30px 0" }}>
					<div
						style={{
							fontWeight: "700",
							fontSize: 32,
							color: "#1D1D1F",
							marginBottom: "10px"
						}}
					>
						Learn About Cryptocurrency
					</div>
					<div>
						<h2 style={{ fontWeight: "400", color: "#595D62", fontSize: 18 }}>
							Learn all about cryptocurrency to start investing{" "}
						</h2>
					</div>
				</div>
				<Row justify={"space-evenly"} gutter={24}>
					{loading && news.length === 0 ? <Spin size="large" /> : null}

					{news.length > 0 && (
						<Col
							xs={0}
							sm={0}
							md={0}
							lg={0}
							xl={12}
							style={{ textAlign: "left" }}
						>
							<Flex
								justify="center"
								align="center"
								style={{ width: "100%", height: "100%" }}
							>
								<div
									style={{
										position: "relative",
										backgroundImage: `url(${news[0]?.image_url})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
										width: "100%",
										height: 390,
										cursor: "pointer",
										overflow: "hidden",
										borderRadius: "10px",
										alignSelf: "center"
									}}
									className="custom_card"
									onClick={() => window.open(news[0]?.news_url)}
								>
									<div
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											backgroundColor: "rgba(0,0,0,0.5)",
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-end",
											alignItems: "flex-start",
											paddingBottom: "20px",
											borderRadius: "10px"
										}}
									>
										<p
											style={{
												fontSize: "36px",
												fontWeight: "700",
												color: "#fff",
												padding: "0 20px"
											}}
										>
											{news[0]?.title}
										</p>
										<p style={{ marginTop: "30px", padding: "0 20px" }}>
											<Tag color="rgba(255, 255, 255, 0.3)">
												{news[0]?.source_name}
											</Tag>
										</p>
									</div>
								</div>
							</Flex>
						</Col>
					)}

					{news.length > 0 && (
						<Col
							xs={24}
							sm={24}
							md={24}
							lg={12}
							xl={0}
							style={{ textAlign: "left" }}
						>
							<Card
								hoverable
								style={{ margin: "20px 0", height: 390 }}
								cover={
									<img
										alt="example"
										src={news[0]?.image_url}
										style={{
											height: 195
										}}
									/>
								}
								onClick={() => window.open(news[0]?.news_url)}
							>
								<Meta
									title={
										<div style={{ display: "block" }}>
											<p style={{ marginBottom: "5px" }}>
												<Tag color="green">{news[0]?.source_name}</Tag>
											</p>
											<p>{news[0]?.title}</p>
										</div>
									}
									description={truncateString(news[0]?.text, 150)}
								/>
							</Card>
						</Col>
					)}

					{news.slice(1).map((article, index) => (
						<Col
							key={index}
							xs={0}
							sm={0}
							md={12}
							lg={12}
							xl={6}
							style={{ textAlign: "left" }}
						>
							<Card
								hoverable
								style={{ margin: "20px 0", height: 390 }}
								cover={
									<img
										alt="example"
										src={article?.image_url}
										style={{
											height: 195
										}}
									/>
								}
								onClick={() => window.open(article?.news_url)}
							>
								<Meta
									title={
										<div style={{ display: "block" }}>
											<p style={{ marginBottom: "5px" }}>
												<Tag color="green">{article?.source_name}</Tag>
											</p>
											<p>{article?.title}</p>
										</div>
									}
									description={truncateString(article?.text, 150)}
								/>
							</Card>
						</Col>
					))}

					<Col
						xs={24}
						sm={24}
						md={0}
						lg={0}
						xl={0}
						style={{ textAlign: "left" }}
					>
						<Row
							justify="space-between"
							gutter={[12, 12]}
							style={{
								flexWrap: "nowrap",
								overflowX: "auto",
								gap: 10,
							}}
						>
							{news.slice(1).map((article, index) => (
								<Card
									key={index}
									hoverable
									style={{
										height: 152,
										maxWidth: "50%"
									}}
									cover={
										<img
											alt="example"
											src={article?.image_url}
											style={{
												height: 96
											}}
										/>
									}
									onClick={() => window.open(article?.news_url)}
								>
									<Meta title={article?.title} description="" />
								</Card>
							))}
						</Row>
					</Col>
				</Row>
				<Flex
					justify="center"
					align="center"
					style={{ height: "100%", padding: "10px 0 30px 0" }}
				>
					<LinkWithArrow text={"See all Articles"} href={"#"} />
				</Flex>{" "}
			</div>
		</>
	);
}
