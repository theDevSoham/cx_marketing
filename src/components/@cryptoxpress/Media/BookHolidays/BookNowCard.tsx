import React from "react";
import { Button, Row, Grid, Flex } from "antd";
import styles from "./styles/BookingHolidays.module.css";

const BookNowCard = ({
	bgImgWeb = "",
	bgImgMobile = "",
	title = "",
	text = "",
	buttonText = "",
	buttonClick = () => {}
}) => {
	return (
		<div
			style={{
				position: "relative",
				borderRadius: 20,
				overflow: "hidden",
			}}
			className={styles.book_now_card}
		>
			<img
				src={bgImgWeb}
				alt=""
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: "-2"
				}}
			/>
			<div style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				zIndex: "-1"
			}} />
			<Flex
				vertical
				justify="flex-end"
				align="center"
				style={{
					width: "100%",
					height: "100%",
					paddingBottom: 20
				}}
				gap={10}
			>
				<p
					style={{
						fontWeight: "700",
						textAlign: "center",
						color: "#FFFFFF"
					}}
					className={styles.header}
					
				>
					{title}
				</p>
				<p
					style={{
						fontWeight: "400",
						textAlign: "center",
						color: "#FFFFFF"
					}}
					className={styles.subHeader}
				>
					{text}
				</p>
				<Row justify="center" align="middle">
					<Button
						type="primary"
						style={{
							backgroundColor: "#F29557",
							textTransform: "capitalize",
							fontWeight: "700",
						}}
						className={styles.button}
						onClick={buttonClick}
					>
						{buttonText}
					</Button>
				</Row>
			</Flex>
		</div>
	);
};

export default BookNowCard;
