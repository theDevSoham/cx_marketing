import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@styles/globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
  })
const RootLayout = ({ children }: React.PropsWithChildren) => (
	<html lang="en" className={inter.className}>
		<body style={{background: "#F5F5F7"}} >
			<AntdRegistry>{children}</AntdRegistry>
		</body>
	</html>
);

export default RootLayout;
