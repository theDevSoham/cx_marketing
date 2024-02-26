import { Grid, Row, Col, Input, Card, Button } from "antd";
import { SearchOutlined, RightCircleOutlined } from "@ant-design/icons";

import LayoutStyles from "@styles/Layout.module.css";

const HelpCard = ({ text, description }) => {
	const { Meta } = Card;
	return (
		<Card
			style={{
				width: "100%",
				backgroundColor: "#2C2D32"
			}}
		>
			<Row align="middle" style={{ width: "100%" }}>
				<Col span={22} style={{ textAlign: "left" }}>
					<span style={{ fontWeight: "600", color: "white" }}>{text}</span>{" "}
					<br />
					<span style={{ color: "white" }}>{description}</span>
				</Col>
				<Col span={2}>
					{" "}
					<RightCircleOutlined style={{ color: "#95F1D5" }} />
				</Col>
			</Row>
		</Card>
	);
};
export default function Hero() {
	return (
		<div>
			<h1 style={{ padding: "20px 0", fontSize: "60px", fontWeight: "900" }}>
				HELP CENTER
			</h1>
			<Row
				style={{
					backgroundColor: "white",
					padding: "20px 10px",
					borderRadius: "10px",
					width: "100%"
				}}
				align="middle"
				justify="space-around"
				gutter={16}
				className="search-bar" /* for overriding antd style */
			>
				<Col xs={0} sm={0} md={20} lg={20}>
					<Input
						prefix={<SearchOutlined />}
						placeholder="Search help center articles"
						style={{
							width: "100%",
							padding: "10px",
							borderRadius: "8px",
							backgroundColor: "#f4f5f9",
							border: "0"
						}}
					/>
				</Col>
				<Col xs={0} sm={0} md={4} lg={4}>
					{" "}
					<button
						style={{
							padding: "10px",
							backgroundColor: "#18448D",
							color: "white",
							borderRadius: "4px",
							border: "0px",
							width: "100%",
							display: "inline-block" // added to center the button text
						}}
					>
						{"Search"}
					</button>
				</Col>
				<Col xs={24} sm={24} md={0} lg={0}>
					<Input.Search
						enterButton={
							<Button
								type="primary"
								style={{
									backgroundColor: "#18448D"
								}}
								icon={<SearchOutlined />}
								shape="round"
							/>
						}
						placeholder="Search help center articles"
					/>
				</Col>
				{/* <Col xs={4} sm={4} md={0} lg={0}>
					<button
						style={{
							padding: "10px",
							backgroundColor: "#18448D",
							color: "white",
							borderRadius: "4px",
							border: "0px",
							width: "100%",
							display: "inline-block" // added to center the button text
						}}
					>
						<SearchOutlined />
					</button>
				</Col> */}
			</Row>
			<div style={{ margin: "50px 0" }}></div>

			<Row gutter={[16, 16]} style={{ marginLeft: 0, marginRight: 0 }}>
				<Col lg={8} md={12} sm={24} xs={24}>
					<HelpCard text="Introduction" description="lorem ipsum lorem ipsum" />
				</Col>
				<Col lg={8} md={12} sm={24} xs={24}>
					<HelpCard text="Introduction" description="lorem ipsum lorem ipsum" />
				</Col>
				<Col lg={8} md={12} sm={24} xs={24}>
					<HelpCard text="Introduction" description="lorem ipsum lorem ipsum" />
				</Col>
				<Col lg={8} md={12} sm={24} xs={24}>
					<HelpCard text="Introduction" description="lorem ipsum lorem ipsum" />
				</Col>
				<Col lg={8} md={12} sm={24} xs={24}>
					<HelpCard text="Introduction" description="lorem ipsum lorem ipsum" />
				</Col>
				<Col lg={8} md={12} sm={24} xs={24}>
					<HelpCard text="Introduction" description="lorem ipsum lorem ipsum" />
				</Col>
			</Row>
		</div>
	);
}
