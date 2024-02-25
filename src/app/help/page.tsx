"use client";
import { Col, Row, Image } from "antd";
import Navbar from "@components/@cryptoxpress/Header/Navbar";
import FooterLinks from "@components/@cryptoxpress/Footer/Links/Links";
import FooterSocialBar from "@components/@cryptoxpress/Footer/SocialBar/SocialBar";
import BreadCrumbs from "@components/@cryptoxpress/Header/Navbar/Breadcrumbs";
import Help from "@components/@cryptoxpress/Media/Help/Help";
import NewsletterSubscribe from "@components/@cryptoxpress/Media/NewsletterSubscribe/NewsletterSubscribe";

const TokenPage = () => {
	return (
		<div>
			<Navbar />
			<div>
				<BreadCrumbs pageName="Help Center" />
				<Help />
			</div>
			<NewsletterSubscribe />
			<FooterLinks />
			<FooterSocialBar />
		</div>
	);
};

export default TokenPage;
