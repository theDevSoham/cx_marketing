/** @type {import('next').NextConfig} */
import NextMdx from "@next/mdx";
// const withMDX = require("@next/mdx")();

const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true
	}
	// Optionally, add any other Next.js config below
};

const withMDX = NextMdx({
	extension: /\.mdx?$/
});

export default withMDX(nextConfig);
