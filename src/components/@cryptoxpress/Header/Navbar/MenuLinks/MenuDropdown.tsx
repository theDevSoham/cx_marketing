'use client'
import Link from "next/link";

import { CaretDownFilled } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import styles from "@styles/Navbar.module.css";

const items = [
	{
		key: "1",
		label: (
			<Link
				href="/travels/coming_soon"
				style={{
					// textTransform: "uppercase",
					fontSize: "14px",
					fontWeight: "400"
				}}
			>
				Travel
			</Link>
		)
	},
	{
		key: "2",
		label: (
			<Link
				href="/gift_cards/coming_soon"
				style={{
					// textTransform: "uppercase",
					fontSize: "14px",
					fontWeight: "400"
				}}
			>
				Gift Cards
			</Link>
		)
	},
	{
		key: "3",
		label: (
			<Link
				href="https://nft.cryptoxpress.com"
				style={{
					// textTransform: "uppercase",
					fontSize: "14px",
					fontWeight: "400"
				}}
			>
				NFTs
			</Link>
		)
	}
];

function MenuDropdown() {
	return (
		<Dropdown
			menu={{
				items
			}}
			overlayStyle={{
				width: 150,
				borderRadius: 0
			}}
		>
			<a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer" }}>
				<Space>
					<span
						style={{
							// textTransform: "uppercase",
							fontSize: "14px",
							fontWeight: "400"
						}}
						className={styles.hover_primary}
					>
						Shop
					</span>
					<CaretDownFilled />
				</Space>
			</a>
		</Dropdown>
	);
}
export default MenuDropdown;
