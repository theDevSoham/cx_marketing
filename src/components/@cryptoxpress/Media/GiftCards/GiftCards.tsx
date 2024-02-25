import { Card, Col, ConfigProvider, Row, Grid } from "antd";
import LayoutStyles from "@styles/Layout.module.css";
import LinkWithArrow from "@components/@cryptoxpress/Custom/LinkWithArrow";

export default function BookHolidays() {
	const screens = Grid.useBreakpoint();
	const cardInfo = [
		{
			title: "Ikea",
			imageUrl: "/assets/images/gift-cards/ikea.png",
			description: "$50 - $500",
			onCardClick: () => {
				window.location.href = "/gift_cards/coming_soon";
			}
		},
		{
			title: "The Iconic",
			imageUrl: "/assets/images/gift-cards/the-iconic.png",
			description: "$50 - $500",
			onCardClick: () => {
				window.location.href = "/gift_cards/coming_soon";
			}
		},
		{
			title: "Amazon",
			imageUrl: "/assets/images/gift-cards/amazon.png",
			description: "$50 - $500",
			onCardClick: () => {
				window.location.href = "/gift_cards/coming_soon";
			}
		},
		{
			title: "JB Hifi",
			imageUrl: "/assets/images/gift-cards/jb_hifi.png",
			description: "$50 - $500",
			onCardClick: () => {
				window.location.href = "/gift_cards/coming_soon";
			}
		},
		{
			title: "Airbnb",
			imageUrl: "/assets/images/gift-cards/airbnb.png",
			description: "$50 - $500",
			onCardClick: () => {
				window.location.href = "/gift_cards/coming_soon";
			}
		}
	];
	return (
		<>
			<div
				style={{
					background: "white",
					margin: "40px 0",
					padding: "10px 0 40px 0"
				}}
			>
				<div className={LayoutStyles.container}>
					<div className="media_header" style={{ margin: "50px 0" }}>
						<div
							style={{
								textAlign: "center",
								textTransform: "uppercase",
								color: "#F29557",
								fontWeight: "600",
								lineHeight: "1"
							}}
						>
							convert crypto into
						</div>
						<div style={{ textAlign: "center" }}>
							<h2
								style={{
									textTransform: "uppercase",
									fontWeight: "900",
									fontSize: "50px",
									lineHeight: "1.5"
								}}
							>
								Gift Cards
							</h2>
						</div>
						<div style={{ textAlign: "center" }}>
							<p>
								Crypto ecosystem access, banking features, retail, travel and
								more, at your fingertips on your phone.
							</p>
						</div>
					</div>
					<Row
						gutter={[8, 8]}
						justify={"space-between"}
						style={{
							display: "flex",
							flexWrap: "nowrap",
							overflowX: "auto",
						}}
					>
						{cardInfo.map(
							({ title, imageUrl, description, onCardClick }, index) => (
								<Col key={index} xs={12} sm={12} md={8} lg={4}>
									<Card
										hoverable
										cover={
											<img
												alt={title}
												src={imageUrl}
												style={{ objectFit: "contain" }}
											/>
										}
										onClick={onCardClick}
										//   style={{ width: '100%' }}
									>
										<Card.Meta title={title} description={description} />
									</Card>
								</Col>
							)
						)}
					</Row>
					<div
						style={{
							textAlign: "center",
							fontWeight: "600",
							lineHeight: "1",
							marginTop: "50px",
							marginBottom: screens.lg && "30px"
						}}
					>
						<LinkWithArrow
							text={"Explore more brands"}
							href={"/gift_cards/coming_soon"}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
