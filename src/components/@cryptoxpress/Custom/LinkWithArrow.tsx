import { RightOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import Link from "next/link";

export default function LinkWithArrow({ text, href }) {
    return (
       
            <div>
            <Link href={href} style={{ fontWeight: 600, color:"#18448D"}}>
                {text} <RightOutlined />
            </Link>
            </div>
    )
}