import {
	RiseOutlined,
	ShoppingOutlined,
	WalletOutlined
} from "@ant-design/icons";
import { Col, Row, Grid } from "antd";
import React from "react";
import { Bai_Jamjuree } from "next/font/google";
const baiJamjuree = Bai_Jamjuree({
	weight: "700",
	style: "normal",
	subsets: ["latin"]
});

const ContentRow = () => {
	const { xs, sm, md, lg } = Grid.useBreakpoint();
	return (
		<>
			<div style={{ margin: "60px 0" }}>
				<Row gutter={[24, 24]} style={{ padding: lg ? 0 : "0 30px" }}>
					<Col
						lg={9}
						md={24}
						xs={24}
						style={{
							// paddingLeft: xs || sm || md ? "0" : "20px",
							textAlign: lg ? "left" : "center",
							paddingBottom: lg ? "0" : "40px"
						}}
					>
						<p
							style={{
								fontWeight: "700",
								fontSize: md ? 40 : 32,
								color: "#18448D",
							}}
							className={baiJamjuree.className}
						>
							IT’S NOT {lg && <br />}ROCKET SCIENCE
						</p>
						<p
							style={{
								fontWeight: "400",
								fontSize: 18,
								color: "#5F5F64",
								paddingRight: lg ? "150px" : "0"
							}}
						>
							We are the bridge between your crypto world and everyday life;
							NFTs, cryptocurrencies, payments, transfers, and more. All in one
							best-in-class digital experience.
						</p>
					</Col>
					<Col
						lg={5}
						md={8}
						sm={0}
						xs={0}
						style={{ textAlign: "left" }}
					>
						<p
							style={{
								fontSize: 55,
								color: "#F29557"
							}}
						>
							<RiseOutlined />
						</p>
						<p
							style={{
								fontWeight: "700",
								fontSize: 26,
								color: "#17181A"
							}}
						>
							TRADE
						</p>
						<p
							style={{
								fontWeight: "400",
								fontSize: 18,
								color: "#5F5F64",
								margin: "16px 0",
								paddingRight: xs ? "0" : "40px"
							}}
						>
							Buy and sell over 300 cryptocurrencies with 900+ trading pairs
							using only 3 clicks, without paying any commissions.
						</p>
					</Col>
					<Col
						lg={0}
						md={0}
						sm={8}
						xs={24}
						style={{ textAlign: "center" }}
					>
						<p
							style={{
								fontSize: 55,
								color: "#F29557"
							}}
						>
							<RiseOutlined />
						</p>
						<p
							style={{
								fontWeight: "700",
								fontSize: 26,
								color: "#17181A"
							}}
						>
							TRADE
						</p>
						<p
							style={{
								fontWeight: "400",
								fontSize: 18,
								color: "#5F5F64",
								margin: "16px 0",
								paddingRight: xs ? "0" : "40px"
							}}
						>
							Buy and sell over 300 cryptocurrencies with 900+ trading pairs
							using only 3 clicks, without paying any commissions.
						</p>
					</Col>
					<Col
						lg={5}
						md={8}
						sm={8}
						xs={24}
						style={{ textAlign: xs ? "center" : "left" }}
					>
						<p
							style={{
								fontSize: 55,
								color: "#F29557"
							}}
						>
							<ShoppingOutlined />
						</p>
						<p
							style={{
								fontWeight: "700",
								fontSize: 26,
								color: "#17181A"
							}}
						>
							SHOP
						</p>
						<p
							style={{
								fontWeight: "400",
								fontSize: 18,
								color: "#5F5F64",
								margin: "16px 0",
								paddingRight: xs ? "0" : "40px"
							}}
						>
							Book flights, accommodation, tours, rental cars and much more
							directly from CryptoXpress.
						</p>
					</Col>
					<Col
						lg={5}
						md={8}
						sm={8}
						xs={24}
						style={{ textAlign: xs ? "center" : "left" }}
					>
						<p
							style={{
								fontSize: 55,
								color: "#F29557"
							}}
						>
							<WalletOutlined />
						</p>
						<p
							style={{
								fontWeight: "700",
								fontSize: 26,
								color: "#17181A"
							}}
						>
							PAY
						</p>
						<p
							style={{
								fontWeight: "400",
								fontSize: 18,
								color: "#5F5F64",
								margin: "16px 0",
								paddingRight: xs ? "0" : "40px"
							}}
						>
							Make payments for services or pay bills and easily maintain
							cryptocurrency holdings in your digital wallet.
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default ContentRow;
