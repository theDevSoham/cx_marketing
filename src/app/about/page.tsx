import React from "react";
import "@styles/globals.css";
import FooterLinks from "@components/@cryptoxpress/Footer/Links/Links";
import FooterSocialBar from "@components/@cryptoxpress/Footer/SocialBar/SocialBar";
import AboutHero from "@components/@cryptoxpress/About/Hero/Hero";
import AboutContent from "@components/@cryptoxpress/About/Content/Content";
import StakingContainer from "@components/@cryptoxpress/About/Staking/StakingSection";

const About = () => {
	return (
		<>
			<AboutHero />
			<AboutContent />
			{/* <StakingContainer /> */}
			<FooterLinks />
			<FooterSocialBar />
		</>
	);
};

export default About;
