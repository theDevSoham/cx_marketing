"use client";
import { useEffect, useRef, useState } from "react";
import { Col, Row, Grid } from "antd";
import Description from "./Description";
import PriceStats from "./PriceStats";
import Graph from "./Graph";
import BreadCrumbs from "@components/@cryptoxpress/Header/Navbar/Breadcrumbs";

export default function Token() {
	const chartParent = useRef(null);

	const { xs, sm, md, lg } = Grid.useBreakpoint();
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (!chartParent.current) return;
		const { offsetWidth, offsetHeight } = chartParent.current;
		console.log("off", offsetHeight, offsetWidth);
		setWidth(offsetWidth);
		setHeight(offsetHeight);
	}, []);

	return (
		<>
			<Row>
				<Col xs={24} md={15} lg={17}>
					<div style={{ padding: lg ? "0 24px " : "0 5px " }}>
						<BreadCrumbs pageName="XPRESS" />
						<Description />
					</div>
					<div
						ref={chartParent}
						style={{
							marginBottom: md ? "60px" : "30px",
							marginLeft: md ? "40px" : "0",
							marginRight: md ? "40px" : "0"
						}}
					>
						<Graph chartWidth={width} chartHeight={height} />
					</div>
				</Col>
				<Col xs={24} md={9} lg={7}>
					<PriceStats />
				</Col>
			</Row>
		</>
	);
}
