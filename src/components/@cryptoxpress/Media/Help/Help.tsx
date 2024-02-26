"use client";
import Faq from "./Faq";
import Hero from "./Hero";
import LayoutStyles from "@styles/Layout.module.css";

export default function Help() {
	return (
		<div className={LayoutStyles.container}>
			<Hero />
			<Faq />
		</div>
	);
}
