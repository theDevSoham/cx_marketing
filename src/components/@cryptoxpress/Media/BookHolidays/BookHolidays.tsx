import { Col, Row } from "antd";
import LayoutStyles from "@styles/Layout.module.css";
import BookNowCard from "./BookNowCard"

export default function BookHolidays() {
	return (
		<>
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
						use crypto to
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
							Book holidays
						</h2>
					</div>
					<div style={{ textAlign: "center" }}>
						<p>
							Crypto ecosystem access, banking features, retail, travel and
							more, at your fingertips on your phone.
						</p>
					</div>
				</div>
				<Row justify={"space-between"} gutter={[12, 12]}>
					<Col
						xs={24}
						sm={24}
						md={12}
						lg={12}
						xl={12}
						style={{ textAlign: "left" }}
					>
						<BookNowCard 
                            bgImgWeb="/assets/images/promo/flights/home-book-holidays-flights-web.png"
                            bgImgMobile="/assets/images/promo/flights/home-book-holidays-flights-mobile.png"
                            title="Flights" 
                            text="Search flights across the globe."
                            buttonText="Book Flights"
                            buttonClick={() => window.location.href = "/travels/coming_soon"}
                        />
					</Col>
					<Col
						xs={24}
						sm={24}
						md={12}
						lg={12}
						xl={12}
						style={{ textAlign: "right" }}
					>
						<BookNowCard 
                            bgImgWeb="/assets/images/promo/hotels/home-book-holidays-hotels-web.png"
                            bgImgMobile="/assets/images/promo/hotels/home-book-holidays-hotels-mobile.png"
                            title="Hotels" 
                            text="Search popular hotels & accommodation."
                            buttonText="Book Hotels"
                            buttonClick={() => window.location.href = "/travels/coming_soon"}
                        />
					</Col>
				</Row>
			</div>
		</>
	);
}
