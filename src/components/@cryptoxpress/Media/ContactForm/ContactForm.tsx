"use client";
import { Button, Col, Form, Input, Row, Image } from "antd";
import React from "react";
import BreadCrumbs from "@components/@cryptoxpress/Header/Navbar/Breadcrumbs";

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

const FormComponent = ({ screenSize }) => {
	return (
		<Form
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical"
			style={{ gap: "-5px" }}
		>
			<Form.Item name="name" rules={[{ type: "string" }]} style={{ marginBottom: "15px" }}>
				<Input
					style={{ height: "40px", width: screenSize === 'xs' ? "100%" : "70%", borderRadius: "8px" }}
					placeholder="Name"
				/>
			</Form.Item>
			<Form.Item name="_replyto" rules={[{ type: "email" }]} style={{ marginBottom: "15px" }}>
				<Input
					style={{ height: "40px", width: screenSize === 'xs' ? "100%" : "90%", borderRadius: "8px" }}
					placeholder="Email"
				/>
			</Form.Item>
			<Form.Item name="phone" rules={[{ type: "string" }]} style={{ marginBottom: "15px" }}>
				<Input
					style={{ height: "40px", width: screenSize === 'xs' ? "100%" : "60%", borderRadius: "8px" }}
					placeholder="Phone"
				/>
			</Form.Item>
			<Form.Item name="message" >
				<Input.TextArea rows={4} placeholder="Your Message" style={{ borderRadius: "8px" }} />
			</Form.Item>
			<Form.Item>
				<button
					htmlType="submit"
					style={{
						padding: "12px 16px",
						backgroundColor: "#18448D",
						color: "white",
						width: screenSize === 'xs' && "100%",
						fontSize: "14px",
						fontWeight: "700",
						borderRadius: "8px",
						border: "0px"
					}}
				>
					Submit
				</button>
			</Form.Item>
		</Form>
	)
}

const ContactForm = () => {

	return (
		<>
			<Row>
				<Col lg={15} md={15} sm={24} xs={24}>
					<Row justify="start">
						<Col>
							<BreadCrumbs pageName="Contact Us" />
						</Col>
					</Row>
					<Row>
						<Col
							xs={24}
							sm={0}
							md={0}
							lg={0}
							style={{
								padding: "20px"
							}}
						>
							<h1
								style={{
									color: "#1D1D1F",
									fontWeight: "900",
									fontSize: 40,
									textTransform: "uppercase",
									padding: "60px 0 20px 0"
								}}
							>
								Contact Us
							</h1>

							<FormComponent screenSize='xs' />
						</Col>
						<Col
							xs={0}
							sm={24}
							md={24}
							lg={24}
							style={{
								padding: "0 100px"
							}}
						>
							<h1
								style={{
									color: "#1D1D1F",
									fontWeight: "900",
									fontSize: 40,
									textTransform: "uppercase",
									padding: "60px 0 20px 0"
								}}
							>
								Contact Us
							</h1>

							<FormComponent screenSize={'lg'} />
						</Col>
					</Row>
				</Col>
				<Col
					xs={0}
					sm={0}
					md={9}
					lg={0}
					style={{ padding: 0, height: "100%" }}
				>
					<div>
						<img
							style={{
								objectFit: "cover",
								width: "100%",
								borderRadius: 0,
								maxHeight: 600
							}}
							src="/assets/images/contact/about-hero.webp"
							alt=""
						/>
					</div>
				</Col>
				<Col
					xs={0}
					sm={0}
					md={0}
					lg={9}
					style={{ padding: "50px", height: "100%" }}
				>
					<div>
						<img
							style={{
								objectFit: "cover",
								width: "100%",
								borderRadius: "16px",
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
