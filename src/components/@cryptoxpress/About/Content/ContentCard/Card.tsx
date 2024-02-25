import React from "react";
import { Col, Row } from "antd";
import styles from "../styles/Content.module.css";

const Content = () => {
	return (
		<>
			<Row>
				<Col lg={24}>
					<div
						style={{
							backgroundColor: "#CCDEF3",
							borderRadius: 24
						}}
						className={styles.card_container}
					>
						<Row align="middle" justify="center" gutter={[16, 16]}>
							<Col lg={16} md={12} xs={24}>
								<img
									src="/assets/images/hero/gifs/about-content.png"
									alt=""
									style={{
										width: "100%",
										maxWidth: "650px"
										// transform: "scale(1.5)",
									}}
								/>
							</Col>
							<Col lg={6} md={12} xs={24}>
								<p
									style={{
										fontWeight: "700",
										fontSize: 20,
										color: "#F29557"
									}}
								>
									WE’RE ON A MISSION TO MAKE
								</p>
								<p className={styles.crypto_easy_text}>CRYPTO EASY</p>
								<p
									style={{
										fontWeight: "500",
										fontSize: 20,
										color: "#6E6E73"
									}}
								>
									The CX Universe brings let’s users leverage our platform to
									use crypto throughout your everyday life.{" "}
								</p>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Content;
