import Link from "next/link";
import styles from "./../styles/Navbar.module.css";
import MenuDropdown from "./MenuDropdown";

const DesktopMenu = () => {
	return (
		<div className={styles.menu}>
			{/* <Link href="/">Home</Link> */}

			<MenuDropdown />
			<Link href="#">Trade</Link>
			<Link href="/xpress">XPRESS Token</Link>
			<Link href="/about">About</Link>
			<Link href="/contact-us">Contact us</Link>
		</div>
	);
};

export default DesktopMenu;
