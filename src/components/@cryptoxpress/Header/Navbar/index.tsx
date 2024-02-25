import styles from "./styles/Navbar.module.css";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import React from "react";

const Navbar = ({ bg = "" }) => {

	return (
		<div className={`${styles.cx_blue_bg}`} style={{ background: bg }}>
			<div className={`${styles.nav_container_broad} ${styles.white_text}`}>
				{/* <InfoBarAboveNavBar /> */}
				<div id="nav" className={styles.nav_bar_container}>
					<Logo />
					<MenuLinks />
					<div className={styles.for_formatting}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
