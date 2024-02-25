"use client";
import React from "react";
import { Row, Col, Button, Flex, Grid } from "antd";
import Image from "next/image";
import Link from "next/link";
import FooterStyles from "./../styles/Footer.module.css";

import LayoutStyles from "@styles/Layout.module.css";
import { ArrowUpOutlined } from "@ant-design/icons";
const FooterLinks = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();

	return (
		<div style={{ background: "#2C2D32", color: "#ADB7BC" }}>
			<div className={LayoutStyles.container}>
				<footer className={FooterStyles.footer} style={{ padding: "50px 0" }}>
					<Row justify="space-between" gutter={[16, 16]}>
						<Col
							xs={24}
							sm={15}
							md={10}
							className={FooterStyles.footer_details_section}
						>
							{/* <h2 className={FooterStyles.footerH1}><b>Company</b></h2> */}
							<Row justify={screens.lg || screens.md ? "start" : "center"}>
								<img
									style={{
										marginBottom: "20px",
										width: "100%",
										maxWidth: "350px"
									}}
									src="/assets/images/logos/cryptoxpress/2x/logo.png"
									alt="CryptoXpress Logo"
								/>
							</Row>
							<p
								style={{
									textAlign: screens.lg || screens.md ? "left" : "center"
								}}
							>
								© CryptoXpress Ltd.
							</p>
							<p
								style={{
									textAlign: screens.lg || screens.md ? "left" : "center"
								}}
							>
								2024 All Rights Reserved
							</p>
							<p
								style={{
									textAlign: screens.lg || screens.md ? "left" : "center"
								}}
							>
								UIC 207142997, Krasno Selo District, 2V Topli Dol Str., Ap.16,{" "}
							</p>
							<p
								style={{
									textAlign: screens.lg || screens.md ? "left" : "center"
								}}
							>
								Sofia, Republic of Bulgaria 1680
							</p>

							<Flex
								justify={screens.lg ? "start" : "center"}
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
										maxWidth: screens.lg
											? "200px"
											: screens.sm
												? "150px"
												: "130px",
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
										maxWidth: screens.lg
											? "200px"
											: screens.sm
												? "150px"
												: "130px",
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
						<Col
							xs={12}
							sm={3}
							md={5}
							className={FooterStyles.footer_details_section}
						>
							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									About Us
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									XPRESS Token
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Help Center
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Privacy Policy
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Terms & Conditions
								</a>
							</p>
						</Col>
						<Col
							xs={12}
							sm={3}
							md={5}
							className={FooterStyles.footer_details_section}
						>
							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Trade
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Earn
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Gift Cards
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Flights
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									Hotels
								</a>
							</p>

							<p style={{ textAlign: "left", marginBottom: "10px", marginLeft: "20%" }}>
								<a
									style={{
										color: "#929FA5",
										fontSize: 16
									}}
								>
									NFTs
								</a>
							</p>
						</Col>
						<Col
							xs={0}
							sm={0}
							md={0}
							lg={4}
							className={FooterStyles.footer_details_section}
						>
							<Button
								type="primary"
								shape="round"
								size="large"
								style={{
									float: "right",
									fontWeight: "600",
									backgroundColor: "#1765C0"
								}}
								onClick={scrollToTop}
							>
								BACK TO TOP
							</Button>
						</Col>
						<Col
							xs={24}
							sm={3}
							md={4}
							lg={0}
							className={FooterStyles.footer_details_section}
						>
							<Flex justify="center" align="center">
								<Button
									type="primary"
									shape="circle"
									icon={<ArrowUpOutlined />}
									size="large"
									style={{
										margin: "0 auto",
										fontWeight: "600",
										backgroundColor: "#1765C0"
									}}
									onClick={scrollToTop}
								/>
							</Flex>
						</Col>
					</Row>
				</footer>
			</div>
		</div>
	);
};

export default FooterLinks;
