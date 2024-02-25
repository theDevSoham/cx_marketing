"use client";
// components/MyComponent.tsx

import React from "react";
import "@styles/globals.css";
import Navbar from "@components/@cryptoxpress/Header/Navbar";
import BreadCrumbs from "@components/@cryptoxpress/Header/Navbar/Breadcrumbs";
import ContactForm from "@components/@cryptoxpress/Media/ContactForm/ContactForm";
import LayoutStyles from "@styles/Layout.module.css";
import FooterLinks from "@components/@cryptoxpress/Footer/Links/Links";
import FooterSocialBar from "@components/@cryptoxpress/Footer/SocialBar/SocialBar";

interface MyComponentProps {
	message: string;
}

const ContactUs: React.FC<MyComponentProps> = ({ message }) => {
	return (
		<>
			<Navbar />
			{/* <BreadCrumbs pageName="Contact Us" /> */}
			{/* <div className={LayoutStyles.container}> */}
			{/* <div style={{ padding: "20px 0px" }}> */}
			<ContactForm />
			{/* </div> */}
			<FooterLinks />
			<FooterSocialBar />
		</>
	);
};

export default ContactUs;
