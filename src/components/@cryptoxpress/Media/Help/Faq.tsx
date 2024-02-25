import { Row, Col, Collapse, Button, Flex } from "antd";

export default function Faq() {
	const items = [
		{
			key: "1",
			label: (
				<p
					style={{
						fontWeight: "700",
						fontSize: 14,
						color: "#2C2D32"
					}}
				>
					Lorem Ipsum
				</p>
			),
			children: (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					commodi explicabo provident ullam architecto quo a exercitationem hic
					perferendis iure corporis doloremque aut et ipsa officiis facilis
					repellendus praesentium, ex nam pariatur dolores quas quod sit? Beatae
					consequatur dignissimos vitae deleniti fugit voluptatibus quos hic
					nisi necessitatibus nesciunt expedita, aliquam fuga eligendi. Labore
					fugiat itaque mollitia porro ea adipisci corrupti eligendi cupiditate
					corporis atque velit consequatur quae, consequuntur, excepturi nisi.
					Quaerat voluptates ipsam non nisi repellendus aut hic vel iste? Amet
					molestiae similique quod quas omnis quaerat eius facere suscipit,
					accusamus iure, porro facilis maiores placeat exercitationem
					perspiciatis aut sed.
				</p>
			),
			showArrow: true,
			style: {
				marginBottom: "10px",
				background: "#fff"
			}
		},
		{
			key: "2",
			label: (
				<p
					style={{
						fontWeight: "700",
						fontSize: 14,
						color: "#2C2D32"
					}}
				>
					Lorem Ipsum
				</p>
			),
			children: (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
					voluptas?
				</p>
			),
			showArrow: true,
			style: {
				marginBottom: "10px",
				background: "#fff"
			}
		},
		{
			key: "3",
			label: (
				<p
					style={{
						fontWeight: "700",
						fontSize: 14,
						color: "#2C2D32"
					}}
				>
					Lorem Ipsum
				</p>
			),
			children: (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
					voluptas?
				</p>
			),
			showArrow: true,
			style: {
				marginBottom: "10px",
				background: "#fff"
			}
		}
	];
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<div className="cx_collapse_container">
			<h1 style={{ padding: "20px 0", fontSize: "40px" }}>FAQs</h1>
			<Collapse
				items={items}
				onChange={onChange}
				expandIcon={({ isActive }) =>
					isActive ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M7.5 14.25L12 9.75L16.5 14.25"
								stroke="#2C2D32"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M16.5 9.75L12 14.25L7.5 9.75"
								stroke="#595D62"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					)
				}
				style={{
					border: "none",
					background: "transparent"
				}}
			/>

			<Flex justify="center" align="center">
				<Button
					type="default"
					shape="round"
					style={{
						border: "2px solid #18448D",
						color: "#18448D",
						margin: "20px 0"
					}}
				>
					View more
				</Button>
			</Flex>
		</div>
	);
}
