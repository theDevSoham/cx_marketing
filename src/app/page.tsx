"use client";
import Hero from "@components/@cryptoxpress/Header/Hero";
import React from "react";
import "@styles/globals.css";
import FooterLinks from "@components/@cryptoxpress/Footer/Links/Links";
import FooterSocialBar from "@components/@cryptoxpress/Footer/SocialBar/SocialBar";
import styles from "@styles/Home.module.css";
import Navbar from "@components/@cryptoxpress/Header/Navbar";
import Featured from "@components/@cryptoxpress/Media/Featured";
import BookHolidays from "@components/@cryptoxpress/Media/BookHolidays/BookHolidays";
import PlanYourPerfectTrip from "@components/@cryptoxpress/Media/PlanYourPerfectTrip/PlanYourPerfectTrip";
import GiftCards from "@components/@cryptoxpress/Media/GiftCards/GiftCards";
import Portfolio from "@components/@cryptoxpress/Media/Portfolio/Portfolio";
import Learn from "@components/@cryptoxpress/Media/Learn/Learn";
import NewsletterSubscribe from "@components/@cryptoxpress/Media/NewsletterSubscribe/NewsletterSubscribe";

export default function Home() {
	return (
		<>
			<Navbar bg="linear-gradient(355.59deg, #18448D -10.97%, #1A3658 72.69%)" />
			<div className={styles.container}>
				<main className={styles.main}>
					<Hero>
						<div>asdf</div>
					</Hero>
					<Featured />
					<BookHolidays />
					<PlanYourPerfectTrip />
					<GiftCards />
					<Portfolio />
					<Learn />
					<NewsletterSubscribe />
				</main>
				<FooterLinks />
				<FooterSocialBar />
			</div>
		</>
	);
}
