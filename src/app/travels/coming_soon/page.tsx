"use client";
import React from "react";
import Navbar from "@components/@cryptoxpress/Header/Navbar";
import ComingSoonHeader from "@components/@cryptoxpress/ComingSoon/ComingSoon";
import NewsletterSubscribe from "@components/@cryptoxpress/Media/NewsletterSubscribe/NewsletterSubscribe";
import FooterLinks from "@components/@cryptoxpress/Footer/Links/Links";
import FooterSocialBar from "@components/@cryptoxpress/Footer/SocialBar/SocialBar";

const TravelComingSoon = () => {
	return (
		<>
			<Navbar />
			<ComingSoonHeader topSection={{
				tagText: "TRAVEL ANYWHERE",
				tagSubText: "Ready, set, fly. CryptoXpress is taking off to new heights by changing the way our users travel for the better. Simply connect your centralised or decentralised wallet and you’re good to go.",
				heroImg: "/assets/images/coming_soon/travel_coming_soon.png"
			}} bottomSection={{
				bgColor: "linear-gradient(104.51deg, #FF389D 0%, #FFB232 100%)",
				title: "BOOK FLIGHTS AND HOTELS",
				screenImage: "/assets/images/coming_soon/coming_soon_subcontent_travel.png"
			}} />
			<NewsletterSubscribe />
			<FooterLinks />
			<FooterSocialBar />
		</>
	);
};

export default TravelComingSoon;
