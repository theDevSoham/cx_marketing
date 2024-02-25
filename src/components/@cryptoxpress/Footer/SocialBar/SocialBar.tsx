import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import LayoutStyles from "@styles/Layout.module.css";
import FooterStyles from "./../styles/Footer.module.css";
const FooterSocialBar = () => {
	return (
		<div style={{ background: "#000", color: "#fff", padding: "25px 0px" }}>
			<div className={LayoutStyles.container}>
				<Row gutter={[12, 12]}>
					<Col xs={0} sm={0} md={12} lg={16} xl={16}>
						© CryptoXpress 2024 Rights Reserved
					</Col>

					<Col
						xs={24}
						sm={24}
						md={0}
						lg={0}
						xl={0}
						style={{ textAlign: "center" }}
					>
						© CryptoXpress 2024 Rights Reserved
					</Col>

					<Col xs={24} sm={24} md={12} lg={8} xl={8}>
						<div className={FooterStyles.menu}>
							<Link style={{ color: "#fff" }} href="/book/ferry">
								Facebook
							</Link>
							<Link style={{ color: "#fff" }} href="/book/boat">
								Twitter
							</Link>
							<Link
								style={{ color: "#fff" }}
								href="https://ferrybooking.in/cab/"
							>
								Instagram
							</Link>
							<Link
								style={{ color: "#fff" }}
								href="https://ferrybooking.in/activity/"
							>
								News
							</Link>
							<Link
								style={{ color: "#fff" }}
								href="https://ferrybooking.in/activity/"
							>
								Telegram
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default FooterSocialBar;
