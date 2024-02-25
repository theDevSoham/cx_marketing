import { Button, Col, Row } from "antd";
import React from "react";
import LayoutStyles from "../../../../styles/Layout.module.css";

const StakingSection = () => {
	return (
		<>
			<div
				style={{
					width: "100%",
					backgroundColor: "#F5F5F5",
					minHeight: 500
				}}
			>
				<Row>
					<Col lg={24}>
						<Row align="middle" justify="center">
							<Col lg={12} md={12} sm={12} xs={24}>
								<img
									src="/assets/images/footer/about-staking.png"
									alt=""
									style={{
										width: "120%",
										maxWidth: "812px",
										float: "right",
										textAlign: "right"
									}}
								/>
							</Col>
							<Col
								lg={12}
								md={12}
								sm={12}
								xs={24}
								style={{ paddingRight: "150px" }}
							>
								<p
									style={{
										fontWeight: "700",
										fontSize: 20,
										color: "#F29557"
									}}
								>
									TOKEN STAKING
								</p>
								<p
									style={{
										fontWeight: "900",
										fontSize: 50
									}}
								>
									EARN PASSIVE INCOME
								</p>
								<p
									style={{
										fontWeight: "500",
										fontSize: 20,
										color: "#6E6E73"
									}}
								>
									CryptoXpress offers $XPRESS Token staking pools with an
									initial APY up to 2000%, powered by AllianceBlock&apos;s
									staking solution, LMaaS.
								</p>
								<p
									style={{
										margin: "20px 0"
									}}
								>
									<Button
										type="primary"
										size="large"
										style={{
											float: "left",
											fontWeight: "600",
											backgroundColor: "#1765C0", 
											borderRadius: "5px"
										}}
									>
										Stake XPRESS
									</Button>
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default StakingSection;
