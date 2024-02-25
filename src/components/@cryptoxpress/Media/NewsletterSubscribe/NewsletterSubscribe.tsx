import { Input, Button, Space, Row, Col } from "antd";
import LayoutStyles from "@styles/Layout.module.css";
const { Search } = Input;

export default function NewsletterSubscribe() {
	return (
		<div
			style={{
				padding: "80px 0",
				background:
					"linear-gradient(209.67deg, #84DCB6 -12.08%, #0EBFA8 7.56%, #008591 32.83%, #0C5E7C 73.7%)"
			}}
		>
			<Row justify="center" align="middle">
				<Col lg={12} md={16} sm={24} xs={24}>
					<div className={LayoutStyles.container}>
						<p
							style={{
								color: "#fff",
								textAlign: "center",
								fontSize: "24px",
								fontWeight: "300",
								marginBottom: "20px"
							}}
						>
							Join our mail newsletter to get notified about updates
						</p>
						<div style={{ margin: "0 auto" }}>
							<Search
								placeholder="Email@address.com"
								enterButton={
									<Button
										type="primary"
										style={{
											backgroundColor: "#F29557",
                                            textTransform: "uppercase",
											// padding: "15px 11px",
											// height: "auto"
										}}
									>
										Subscribe
									</Button>
								}
								size="large"
								onSearch={() => {}}
								// style={{
								// 	padding: "15px 11px"
								// }}
							/>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
