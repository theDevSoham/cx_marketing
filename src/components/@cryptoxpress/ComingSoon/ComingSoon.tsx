import React from "react";
import LayoutStyles from "@styles/Layout.module.css";
import { Col, Row, Grid, Flex } from "antd";

const ComingSoon = ({ topSection, bottomSection }) => {
	const { useBreakpoint } = Grid;
	const { xl, lg, md, sm, xs } = useBreakpoint();
	return (
		<>
			<div className={LayoutStyles.container}>
				<div style={{ margin: "80px 0" }}>
					<Row justify="center" align="middle">
						<p
							style={{
								fontWeight: 700,
								fontSize: lg ? 20 : sm ? 18 : 15,
								color: "#F29557",
								textAlign: "center"
							}}
						>
							{topSection.tagText}
						</p>
					</Row>
					<Row justify="center" align="middle">
						<p
							style={{
								fontWeight: 900,
								fontSize: lg ? 60 : sm ? 54 : 45,
								color: "#1D1D1F",
								textAlign: "center"
							}}
						>
							WEBSITE COMING SOON
						</p>
					</Row>
					<Row justify="center" align="middle">
						<p
							style={{
								fontWeight: 500,
								fontSize: lg ? 20 : sm ? 18 : 15,
								color: "#6E6E73",
								textAlign: "center"
							}}
						>
							{topSection.tagSubText}
						</p>
					</Row>
					<Row justify="center" align="middle" style={{ marginTop: 80 }}>
						<img
							src={topSection.heroImg}
							alt="rocket"
							style={{
								width: "100%",
								margin: "auto",
								display: "block"
							}}
						/>
					</Row>
				</div>
			</div>
			<div
				style={{
					background: bottomSection.bgColor
				}}
			>
				<div className={LayoutStyles.container}>
					<Row
						style={{
							paddingTop: xl ? "100px" : sm ? "50px" : "20px"
						}}
					>
						<Col
							lg={12}
							md={24}
							sm={24}
							xs={24}
							style={{
								padding: xl ? "100px 0" : sm ? "50px 0" : "30px 0"
							}}
						>
							<Row justify={xl ? "start" : sm ? "center" : "center"}>
								<img
									src="/assets/images/logos/cryptoxpress/2x/logo.png"
									alt="CryptoXpress Logo"
									style={{
										maxWidth: lg ? 250 : sm ? 160 : 150
									}}
								/>
							</Row>
							<p
								style={{
									fontWeight: 600,
									fontSize: xl ? 29 : sm ? 27 : 25,
									color: "#FFFFFF",
									textAlign: xl ? "left" : sm ? "center" : "center"
								}}
							>
								WEBSITE UNDER CONSTRUCTION
							</p>
							<p
								style={{
									fontWeight: 900,
									fontSize: xl ? 60 : sm ? 54 : 45,
									color: "#FFFFFF",
									textAlign: xl ? "left" : sm ? "center" : "center"
								}}
							>
								{bottomSection.title}
							</p>
							<p
								style={{
									fontWeight: 400,
									fontSize: xl ? 22 : sm ? 20 : 18,
									color: "#FFFFFF",
									textAlign: xl ? "left" : sm ? "center" : "center"
								}}
							>
								We are coming soon on web till then you can use our working app
								to buy gift cards for yourself and your loved one’s through your
								favourite cryptocurrency and Fiat.
							</p>

							<Flex
								justify={lg ? "start" : "center"}
								align="center"
								gap="middle"
								style={{
									marginTop: 20
								}}
							>
								<img
									style={{
										objectFit: "contain",
										width: "100%",
										maxWidth: lg ? "200px" : sm ? "150px" : "130px",
										float: "right",
										cursor: "pointer"
									}}
									src="/assets/images/badge/2x/download-on-apple-app-store.png"
									alt="Download CryptoXpress mobile app on Apple App Store"
									onClick={() =>
										window.open(
											"https://apps.apple.com/us/app/cryptoxpress/id1591792414"
										)
									}
								/>
								<img
									style={{
										objectFit: "contain",
										width: "100%",
										maxWidth: lg ? "200px" : sm ? "150px" : "130px",
										float: "left",
										cursor: "pointer"
									}}
									src="/assets/images/badge/2x/get-it-on-google-play-store.png"
									alt="Download CryptoXpress mobile app on Apple App Store"
									onClick={() =>
										window.open(
											"https://play.google.com/store/apps/details?id=com.cryptoxpressmobile"
										)
									}
								/>
							</Flex>
						</Col>
						<Col xl={12} lg={12} md={0} sm={0} xs={0}>
							<Flex justify="center" style={{ width: "100%", height: "100%" }}>
								<img
									src={bottomSection.screenImage}
									alt=""
									style={{
										maxHeight: 1015,
										height: "100%",
										width: lg ? 500 : sm ? 500 : 400
									}}
								/>
							</Flex>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default ComingSoon;
