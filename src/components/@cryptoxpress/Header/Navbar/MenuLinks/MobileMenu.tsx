"use client";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "@styles/Navbar.module.css";
import MenuComponent from "./MenuGenerator";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		{ label: "Travel", key: "", href: "/travels/coming_soon" },
		{ label: "Gift Cards", key: "hotel", href: "/gift_cards/coming_soon" },
		{ label: "NFTs", key: "nfts", href: "https://nft.cryptoxpress.com" },
		{ label: "Trade", key: "trade", href: "#" },
		{ label: "XPRESS Token", key: "xpress", href: "/xpress" },
		{ label: "About", key: "about", href: "/about" },
		{ label: "Contact", key: "contact", href: "/contact-us" }
	];

	return (
		<div className={styles.ham_menu}>
			<Button
				className="barsMenu"
				type="ghost"
				onClick={() => setIsOpen(!isOpen)}
				style={{
					color: "#fff"
				}}
			>
				<MenuOutlined />
			</Button>
			<Drawer
				placement="left"
				closable={false}
				onClose={() => setIsOpen(false)}
				open={isOpen}
				width="300px"
			>
				<MenuComponent navOptions={items} mode="vertical" />
			</Drawer>
		</div>
	);
};

export default Navbar;
