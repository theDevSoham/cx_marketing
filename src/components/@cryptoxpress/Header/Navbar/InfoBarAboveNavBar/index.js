import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import HeaderText from "@components/archive/general/HeaderText";
import {Grid } from "antd";

const { useBreakpoint } = Grid;
const InfoBarAboveNavBar = () => {
	const { md } = useBreakpoint();

	return (
		<div className={styles.nav_top_right}>
				<div
					style={{
						display: "flex",
						gap: "2rem",
						marginBottom: md ? "0.1rem" : "1rem"
					}}
				>
					<Link href="/latest-andaman-travel-advisories">
						<HeaderText color="#297c84" fontSize={16}>
							Travel Advisories
						</HeaderText>
					</Link>
					<HeaderText fontSize={16} color="#444">
						+919933-268-880
					</HeaderText>
				</div>
			</div>
	);
};

export default InfoBarAboveNavBar;
