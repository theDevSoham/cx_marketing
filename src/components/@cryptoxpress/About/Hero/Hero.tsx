import React from "react";
import LayoutStyles from "../../../../styles/Layout.module.css";
import { Col, Row } from "antd";
import Navbar from "@components/@cryptoxpress/Header/Navbar";

const Hero = () => {
	return (
		<div
			style={{
				// padding: "20px 0",
				background: "url('/assets/images/hero/gifs/about-hero.gif')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
				backgroundSize: "cover"
			}}
		>
			<Navbar bg="transparent" />
			<div
				className={LayoutStyles.container}
				style={{
					padding: "20px 0"
				}}
			>
				<div style={{ margin: "80px 0" }}>
					<Row>
						<p
							style={{
								width: "100%",
								textTransform: "uppercase",
								fontWeight: "900",
								color: "#86FAF3",
								fontSize: 28,
								textAlign: "center"
							}}
						>
							About Us
						</p>
					</Row>
					<Row>
						<img
							src="/assets/images/logos/cryptoxpress/2x/logo.png"
							alt="logo"
							style={{
								width: "100%",
								margin: "auto",
								display: "block"
							}}
						/>
					</Row>
				</div>
				<div style={{ margin: "80px 0" }}>
				<Row gutter={[12, 12]} justify="center" style={{
					margin: "0 auto"
				}}>
								<Col lg={8} md={20} xs={20}>
									<p
										style={{
											fontWeight: 900,
											fontSize: 60,
											color: "#fff",
											textAlign: "center"
										}}
									>
										900+
									</p>
									<p
										style={{
											fontWeight: 700,
											fontSize: 20,
											color: "#fff",
											textAlign: "center"
										}}
									>
										CRYPTO PAIRS
									</p>
								</Col>
								<Col lg={8} md={20} xs={20}>
									<p
										style={{
											fontWeight: 900,
											fontSize: 60,
											color: "#fff",
											textAlign: "center"
										}}
									>
										27+
									</p>
									<p
										style={{
											fontWeight: 700,
											fontSize: 20,
											color: "#fff",
											textAlign: "center"
										}}
									>
										TEAM MEMBERS
									</p>
								</Col>
								<Col lg={8} md={20} xs={20}>
									<p
										style={{
											fontWeight: 900,
											fontSize: 60,
											color: "#fff",
											textAlign: "center"
										}}
									>
										$1.85M
									</p>
									<p
										style={{
											fontWeight: 700,
											fontSize: 20,
											color: "#fff",
											textAlign: "center"
										}}
									>
										USD CAPITAL RAISED
									</p>
								</Col>
							</Row>
				</div>
			</div>
		</div>
	);
};

export default Hero;
