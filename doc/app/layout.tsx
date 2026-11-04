import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: 'nuitral',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/* 'demo-app' is the rootId the theming hook applies the theme to */}
			<body id="demo-app" suppressHydrationWarning>
				{children}
			</body>
		</html>
	)
}
