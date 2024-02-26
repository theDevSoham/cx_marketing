"use client";

import LayoutStyles from "@styles/Layout.module.css";
import Graph from "./Graph";
import { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
const Description = () => {
	const chartParent = useRef(null);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (!chartParent.current) return;
		const { offsetWidth, offsetHeight } = chartParent.current;
		setWidth(offsetWidth);
		setHeight(offsetHeight);
	}, []);
	return (
		<div>
			<div className={LayoutStyles.container} style={{ marginBottom: "20px" }}>
				<div
					style={{
						fontWeight: "900",
						fontSize: "36px",
						padding: "10px 0"
					}}
				>
					$XPRESS TOKEN
				</div>
				<div style={{ fontWeight: "700", fontSize: "22px", padding: "5px 0" }}>
					Description
				</div>
				<div style={{ color: "#595D62", padding: "10px 0" }}>
					The XPRESS token is a utility token for the CryptoXpress platform
					which will be used to provide discounts, rewards, and bonus
					functionality to investors. Transactions paid for using XPRESS tokens
					will be significantly discounted with the token also being a central
					component of the CryptoXpress retail partnership initiative which will
					promote retail payments through XPRESS tokens in exchange for various
					customer benefits.
				</div>
			</div>
		</div>
	);
};
export default Description;
