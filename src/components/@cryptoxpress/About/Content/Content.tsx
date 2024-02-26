"use client"
import React from "react";
import ContentCard from "@components/@cryptoxpress/About/Content/ContentCard/Card";
import ContentRow from "./ContentRow/ContentRow";
import LayoutStyles from "../../../../styles/Layout.module.css";
import styles from "../styles/Content.module.css";

const Content = () => {
	return (
		<>
			<div>
				<div style={{ margin: "80px 40px" }}>
					<ContentCard />
					<ContentRow />
				</div>
			</div>
		</>
	);
};

export default Content;
