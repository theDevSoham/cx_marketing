import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Row, Tag } from "antd";
import { Sparklines, SparklinesCurve, SparklinesSpots } from "react-sparklines";

const BitcoinLogo = ({ source }) => (
	<img
		src={source || "/assets/images/logos/btc.png"}
		alt="Logo"
		style={{ width: 30, height: 30 }}
	/>
);
export default function SummaryCard({
	coin,
	percentage = null,
	price = null,
	quote = "USDT",
	statsComponent = <></>
}) {
	// const price = "50,000";
	// const priceChangePercent = "1.04%";
	return (
		<Card>
			<Row>
				<Col xs={4} md={4} lg={4}>
					<BitcoinLogo
						source={`https://cdn.jsdelivr.net/gh/cryptoxpress/crypto-icons/iconspng/${coin?.coin?.toLowerCase()}.png`}
					/>
				</Col>
				<Col xs={16} md={16} lg={16} style={{ paddingTop: "2px" }}>
					<span
						style={{
							paddingRight: "10px",
							fontWeight: "600",
							fontSize: "18px"
						}}
					>
						{coin?.coin}
					</span>
					<Tag style={{ background: "rgba(198, 198, 198, 0.40)" }}>
						{coin?.name}
					</Tag>
				</Col>
				<Col xs={4} md={4} lg={4}>
					{/* <div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							viewBox="0 0 48 48"
							fill="none"
						>
							<rect
								opacity="0.05"
								x="7"
								y="7"
								width="34"
								height="34"
								rx="17"
								fill="white"
							/>
							<path
								d="M21.5459 16.0839L30.7383 16.7911M30.7383 16.7911L31.4454 25.9834M30.7383 16.7911L17.2617 30.2677"
								stroke="#B6B6B6"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div> */}
					{percentage && percentage < 0 && <FallOutlined />}
					{percentage && percentage > 0 && <RiseOutlined />}
				</Col>
			</Row>
			<Divider style={{ margin: "5px" }} />
			<Row justify="start">
				<Col span={14}>
					<div style={{ fontSize: "18px", fontWeight: "400" }}>
						{" "}
						{price ? `${price} ${quote}` : "N/A"}{" "}
					</div>
					<div style={{ color: "#808080", fontSize: "14px" }}>
						{" "}
						{percentage ? `${percentage}%` : "N/A"}
					</div>
				</Col>
				<Col span={10}>
					<div style={{ padding: "10px 0" }}>{statsComponent}</div>
				</Col>
			</Row>
		</Card>
	);
}
