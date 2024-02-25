"use client";
import { Input, Button, Space, Row, Col, Grid, Flex } from "antd";
import LayoutStyles from "@styles/Layout.module.css";

export default function Bep20Token() {
	const { useBreakpoint } = Grid;
	const { sm, xs } = useBreakpoint();
	return (
		<div style={{ background: "#18448D" }}>
			<div className={LayoutStyles.container}>
				<Row align={"middle"}>
					<Col
						xs={24}
						sm={24}
						md={18}
						lg={18}
						xl={18}
						style={{
							marginBottom: 0,
							padding: "30px 40px 55px 40px"
						}}
					>
						<div>
							<h1
								style={{
									fontWeight: "900",
									fontSize: "40px",
									color: "#86FAF3",
									padding: "10px 0"
								}}
							>
								BEP-20 Token
							</h1>
							<div
								style={{ color: "#fff", fontSize: "16px", fontWeight: "300" }}
							>
								XPRESS runs on the BEP-20 network and is compiled with the
								latest version of Solidity, in order to avoid compiler bugs,
								along with a community audited contract. XPRESS can be stored on
								and transferred to and from most major cryptocurrency wallets
								including Meta Mask wallet.
							</div>
						</div>
					</Col>
					<Col
						xs={0}
						sm={0}
						md={6}
						lg={6}
						xl={6}
					>
						<Flex>
							<img
								src="/assets/images/tokenPage/cx-universe-app.png"
								alt=""
								style={{
									height: "100%"
								}}
							/>
						</Flex>
					</Col>
				</Row>
			</div>
		</div>
	);
}
