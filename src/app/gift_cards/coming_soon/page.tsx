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
			<ComingSoonHeader
				topSection={{
					tagText: "EXPLORE BRANDS",
					tagSubText:
						"CryptoXpress is taking off to new heights by providing top brand gift cards to users. Simply connect your centralised or decentralised wallet and you’re good to go.",
					heroImg: "/assets/images/coming_soon/gift_coming_soon.png"
				}}
				bottomSection={{
					bgColor:
						"linear-gradient(101.23deg, #1A375B 0%, #1A468E 51.34%, #295D9C 100%)",
					title: "BUY GIFT CARD WITH CRYPTO",
					screenImage:
						"/assets/images/coming_soon/coming_soon_subcontent_gift.png"
				}}
			/>
			<NewsletterSubscribe />
			<FooterLinks />
			<FooterSocialBar />
		</>
	);
};

export default TravelComingSoon;
