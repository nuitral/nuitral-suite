/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static site in out/, deployable on GitHub Pages
	output: 'export',
	trailingSlash: true,
	images: { unoptimized: true },
}

export default nextConfig
