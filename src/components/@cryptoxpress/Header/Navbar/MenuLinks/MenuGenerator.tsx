import Link from "next/link";
import { Menu} from "antd";

const MenuComponent = ({ mode, navOptions }) => {
	return (
		<Menu
			mode={mode}
			items={navOptions.map(
				(
					item: {
						label: string;
						key: string;
					},
					index: number
				) => ({
					label: (
						<Link href={item.href} key={item.key}>
							{item.label}
						</Link>
					)
				})
			)}
		/>
	);
};


export default MenuComponent;
