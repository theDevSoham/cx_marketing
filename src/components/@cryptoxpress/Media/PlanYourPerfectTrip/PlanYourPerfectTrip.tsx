import {
	Button,
	Card,
	Col,
	ConfigProvider,
	Flex,
	Row,
	Space,
	Grid
} from "antd";
import LayoutStyles from "@styles/Layout.module.css";
import React, { useEffect, useRef } from "react";
import { EditOutlined, RightOutlined } from "@ant-design/icons"; // Use an actual icon from Ant Design
import AnimatedHorizontalScroll from "./AnimatedHorizontalScroll";
import Link from "next/link";
import LinkWithArrow from "@components/@cryptoxpress/Custom/LinkWithArrow";
const cardDataRowOne = [
	{
		id: 1,
		iconUrl: "/assets/images/city/istanbul.png",
		text: "London, UK",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 2,
		iconUrl: "/assets/images/city/baku.png",
		text: "Baku, Azerbaijan",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 3,
		iconUrl: "/assets/images/city/paris.png",
		text: "Paris, France",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 4,
		iconUrl: "/assets/images/city/dubai.png",
		text: "Dubai, UAE",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 5,
		iconUrl: "/assets/images/city/maldives.png",
		text: "Male, Maldives",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	}
];
const cardDataRowTwo = [
	{
		id: 1,
		iconUrl: "/assets/images/city/london.png",
		text: "London, UK",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 2,
		iconUrl: "/assets/images/city/sydney.png",
		text: "Sydney, Australia",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 3,
		iconUrl: "/assets/images/city/newyork.png",
		text: "New York, USA",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	},
	{
		id: 4,
		iconUrl: "/assets/images/city/milan.png",
		text: "Milan, Italy",
		flightUrl: "/travels/coming_soon",
		hotelUrl: "/travels/coming_soon"
	}
	// { id: 5, iconUrl: "/assets/images/city/london.png", text: 'Card 5 Text' },
];

export default function PlanYourPerfectTrip() {
	const scrollContainerRef = useRef(null);
	const { useBreakpoint } = Grid;
	const { sm, xs, lg, md } = useBreakpoint();

	// useEffect(() => {
	//     const scrollContainer = scrollContainerRef.current;
	//     let speed = 1; // Adjust speed as necessary

	//     const scroll = () => {
	//         if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
	//             // Reset scroll position to start when reaching the half of the scroll width
	//             scrollContainer.scrollLeft = 0;
	//         } else {
	//             scrollContainer.scrollLeft += speed;
	//         }
	//     };

	//     const interval = setInterval(scroll, 20); // Adjust interval time for smoother or faster animation

	//     return () => clearInterval(interval);
	// }, []);
	return (
		<>
			<div className={LayoutStyles.container}>
				<div style={{ padding: "30px 0" }}>
					<Row gutter={[10, 10]}>
						<Col
							xs={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							style={{ textAlign: "left" }}
						>
							<h1 style={{ marginBottom: "10px", fontSize: lg ? "32px" : sm ? "16px" : "16px" }}> Plan Your Perfect Trip </h1>
						</Col>
						<Col
							xs={12}
							sm={12}
							md={12}
							lg={12}
							xl={12}
							style={{ textAlign: "right" }}
						>
							<Flex justify="end" align="center" style={{ height: "100%" }}>
								<LinkWithArrow
									text={`Explore ${lg || md ? "destination" : ""}`}
									href={"/travels/coming_soon"}
								/>
							</Flex>
						</Col>
                        <Col
                            xs={24}
							sm={24}
							md={12}
							lg={12}
							xl={12}
							style={{ textAlign: lg || md ? "left" : "center", fontSize: lg ? "20px" : sm ? "16px" : "16px" }}
                        >
                            <p style={{ fontWeight: lg ? "200" : sm ? "300" : "400", color: "#595D62" }}>
								Search flights & accommodation to the worlds most popular
								destinations.
							</p>
                        </Col>
					</Row>
				</div>
			</div>
			<div>
				<AnimatedHorizontalScroll cardData={cardDataRowOne} />
				<div style={{ margin: "10px" }}></div>
				<AnimatedHorizontalScroll
					cardData={cardDataRowTwo}
					scrollDirection="leftToRight"
				/>
			</div>
		</>
	);
}
