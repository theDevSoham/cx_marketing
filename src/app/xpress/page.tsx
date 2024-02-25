import { Col, Row, Image } from "antd";

import Navbar from "@components/@cryptoxpress/Header/Navbar";

import FooterLinks from "@components/@cryptoxpress/Footer/Links/Links";
import FooterSocialBar from "@components/@cryptoxpress/Footer/SocialBar/SocialBar";
import LayoutStyles from "@styles/Layout.module.css";
import styles from "@styles/Home.module.css";

import Token from "@components/@cryptoxpress/Media/Token/Token";
import BreadCrumbs from "@components/@cryptoxpress/Header/Navbar/Breadcrumbs";
import Bep20Token from "@components/@cryptoxpress/Media/Token/Bep20Token/Bep20Token";

const TokenPage = () => {
	return (
		<div>
			<Navbar />
			<div>
				{/* <BreadCrumbs pageName="About" /> */}
				<Token />
			</div>
			<Bep20Token />

			<FooterLinks />
			<FooterSocialBar />
		</div>
	);
};

export default TokenPage;
