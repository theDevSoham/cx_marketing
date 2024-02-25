"use client";
import React from "react";
import { useParams } from "next/navigation";

const HelpId = () => {
	const { id } = useParams();
	return (
		<div>
			<p>Help id: {id}</p>
		</div>
	);
};

export default HelpId;
