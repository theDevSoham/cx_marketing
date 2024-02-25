"use client";
import { Card, Col, Row } from "antd";
import Navbar from "@components/@cryptoxpress/Header/Navbar";

export default function Confirmation() {
	return (
		<>
			<Navbar />
			<Row justify="center" align="middle" style={{ height: "80vh" }}>
				<Card
						style={{
							padding: "50px 0",
							maxWidth: "min(400px, 100%)",
							overflow: "hidden"
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignContent: "center",
								justifyContent: "center",
								gap: 20,
							}}
						>
							<img src="\assets\images\password_reset\tick.svg" height={64} style={{ padding: "0 50px" }} />
							<div
								style={{
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									padding: "0 50px"
								}}
							>
								<div style={{ fontSize: 20}}>
									Password changed!
								</div>
								<div style={{ color: "#595D62" }}>
									Your password has been reset
									<br /> successfully
								</div>
							</div>
							<button
								style={{
									marginTop: 30,
									padding: 10,
									backgroundColor: "#18448D",
									color: "white",
									borderRadius: 4,
									border: "0px",
									width: "100%",
									cursor: "pointer"
								}}
								onClick={() => {
									window.location.href = "/";
								}}
							>
								<div style={{ fontWeight: 600, fontSize: 16 }}>Continue</div>
							</button>
						</div>
					</Card>
			</Row>
		</>
	);
}
