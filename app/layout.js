import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "rooks-and-knights",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='h-screen bg-gray-900'>{children}</body>
		</html>
	);
}
