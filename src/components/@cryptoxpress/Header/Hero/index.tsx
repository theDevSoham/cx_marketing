import styles from "./styles/Hero.module.css";
import LayeredBackground from "./Layouts/LayeredBackground";
import { Col, Row, Grid, Flex } from "antd";
import Image from "next/image";

export default function Hero({ children }) {
	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();
	return (
		<LayeredBackground>
			<h1 className={styles.fade_in}>
				<img
					className={styles.logo}
					src="/assets/images/logos/cryptoxpress/2x/logo.png"
					alt=""
				/>
			</h1>
			<h2
				style={{
					color: "#86FAF3",
					fontWeight: "900"
				}}
				className={`${styles.fade_in} ${styles.text}`}
			>
				CRYPTO MADE EASY
			</h2>
			<img
				style={{
					maxWidth: "1050px",
					width: "100vw"
				}}
				className={styles.fade_in_rotate}
				src="/assets/images/hero/2x/cryptoxpress-on-iphone-horizontal-perspective.png"
				alt=""
			/>
			<p
				style={{
					// margin: "0 auto",
					maxWidth: "100%",
					// marginTop: "-50px",
					fontWeight: "350",
					textAlign: "center",
				}}
				className={`${styles.fade_in} ${styles.sub_text}`}
			>
				We are the bridge between your crypto world and everyday life; NFTs,
				cryptocurrencies, payments, transfers, and
			</p>
			<p
				style={{
					// margin: "0 auto",
					maxWidth: "100%",
					// marginTop: "-50px",
					fontWeight: "350",
					textAlign: "center",
				}}
				className={`${styles.fade_in} ${styles.sub_text}`}
			>
				more. All in one best-in-class digital experience.
			</p>
			<Flex
				justify="center"
				align="center"
				style={{ marginTop: "50px", marginBottom: "60px" }}
				className={styles.fade_in}
				gap="middle"
			>
				<img
					style={{
						objectFit: "contain",
						width: "100%",
						float: "right",
						cursor: "pointer"
					}}
					className={styles.button_img}
					src="/assets/images/badge/2x/download-on-apple-app-store.png"
					alt="Download CryptoXpress mobile app on Apple App Store"
					onClick={() =>
						window.open(
							"https://apps.apple.com/us/app/cryptoxpress/id1591792414"
						)
					}
				/>
				<img
					style={{
						objectFit: "contain",
						width: "100%",
						float: "left",
						cursor: "pointer"
					}}
					className={styles.button_img}
					src="/assets/images/badge/2x/get-it-on-google-play-store.png"
					alt="Download CryptoXpress mobile app on Google Play Store"
					onClick={() =>
						window.open(
							"https://play.google.com/store/apps/details?id=com.cryptoxpressmobile"
						)
					}
				/>
			</Flex>
		</LayeredBackground>
	);
}
