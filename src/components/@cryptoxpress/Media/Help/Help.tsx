"use client";
import Faq from "./Faq";
import Hero from "./Hero";
import { Row, Col, Grid } from "antd";
import LayoutStyles from "@styles/Layout.module.css";

export default function Help() {
	const { lg, md, sm, xs } = Grid.useBreakpoint();
	return (
		<div
			className={LayoutStyles.container}
		>
			<Hero />
			<Faq />
		</div>
	);
}
