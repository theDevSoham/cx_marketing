"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@components/@cryptoxpress/Header/Navbar";

const HelpId = () => {
	const { id } = useParams();
	return (
		<>
			<Navbar />
			<div>
				<p>Help id: {id}</p>
			</div>
		</>
	);
};

export default HelpId;
