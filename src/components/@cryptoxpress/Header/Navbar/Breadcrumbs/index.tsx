import React from "react";
import styles from "./styles/Breadcrumbs.module.css";
import { Col, Row } from "antd";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import NavStyles from "./../styles/Navbar.module.css";

const BreadCrumbs = ({ pageName }) => {
	return (
		<div className={NavStyles.nav_container_broad}>
			<span style={{ wordSpacing: "0.5rem" }}>
				<HomeOutlined /> Home <RightOutlined />{" "}
				<span style={{ color: "#F29557" }}>{pageName ?? ""}</span>
			</span>
		</div>
	);
};

export default BreadCrumbs;
