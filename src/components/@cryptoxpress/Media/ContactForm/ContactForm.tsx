"use client";
import { Col, Form, Input, Row, Grid } from "antd";
import React from "react";
import BreadCrumbs from "@components/@cryptoxpress/Header/Navbar/Breadcrumbs";

const ContactForm = () => {
	const { xs, sm, md, lg } = Grid.useBreakpoint();
	const validateMessages = {
		required: "${label} is required!",
		types: {
			email: "${label} is not a valid email!",
			number: "${label} is not a valid number!"
		},
		number: {
			range: "${label} must be between ${min} and ${max}"
		}
	};

	const onFinish = (values: any) => {
		const xhr = new XMLHttpRequest();

		xhr.open("POST", "https://formspree.io/f/xwkaepwg");
		xhr.setRequestHeader("Content-Type", "application/json"); // Specify content type for JSON data

		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log("Form submitted successfully!", xhr.responseText);
			} else {
				console.error("Error submitting form:", xhr.statusText);
			}
		};

		xhr.onerror = () => {
			console.error("Network error:", xhr.statusText);
		};

		xhr.send(JSON.stringify(values)); // Send the form data as JSON
	};
	return (
		<>
			<Row>
				<Col lg={15} md={15} sm={24} xs={24}>
					<Row>
						<Col>
							<BreadCrumbs pageName="Contact Us" />
						</Col>
					</Row>
					<Row>
						<Col
							lg={24}
							md={24}
							sm={24}
							xs={24}
							style={{
								padding: xs ? "20px" : "0 100px"
								// margin: "0 auto"
								// textAlign: xs || sm ? "center" : "left"
							}}
						>
							<h1
								style={{
									color: "#1D1D1F",
									fontWeight: "900",
									fontSize: lg ? 48 : 40,
									textTransform: "uppercase",
									padding: "10px 0"
								}}
							>
								Contact Us
							</h1>

							<Form
								name="nest-messages"
								onFinish={onFinish}
								validateMessages={validateMessages}
								layout="vertical"
								style={{ gap: "6px" }} // Added gap style to reduce distance between fields
							>
								<Form.Item name="name" rules={[{ type: "string" }]}>
									<Input
										style={{ height: "40px", width: xs ? "100%" : "70%" }}
										placeholder="Name"
									/>
								</Form.Item>
								<Form.Item name="_replyto" rules={[{ type: "email" }]}>
									<Input
										style={{ height: "40px", width: xs ? "100%" : "90%" }}
										placeholder="Email"
									/>
								</Form.Item>
								<Form.Item name="phone" rules={[{ type: "string" }]}>
									<Input
										style={{ height: "40px", width: xs ? "100%" : "60%" }}
										placeholder="Phone"
									/>
								</Form.Item>
								<Form.Item name="message">
									<Input.TextArea rows={4} placeholder="Your Message" />
								</Form.Item>
								<Form.Item>
									<button
										type="submit"
										style={{
											padding: "15px",
											backgroundColor: "#18448D",
											color: "white",
											width: xs && "100%",
											fontWeight: "600",
											borderRadius: "4px",
											border: "0px"
										}}
									>
										Submit
									</button>
								</Form.Item>
							</Form>
						</Col>
					</Row>
				</Col>
				<Col
					lg={9}
					md={9}
					xs={0}
					style={{ padding: lg ? "50px" : 0, height: "100%" }}
				>
					<div>
						<img
							style={{
								objectFit: "cover",
								width: "100%",
								borderRadius: lg ? "16px" : 0,
								maxHeight: 600
							}}
							src="/assets/images/contact/about-hero.webp"
							alt=""
						/>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default ContactForm;
