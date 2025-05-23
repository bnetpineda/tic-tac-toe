import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tic Tac Toe",
  description: "Tic Tac Toe game built with Next.js and Tailwind CSS",
  icons: {
    icon: '/tic-tac-toe-logo.png', // Explicitly define your favicon path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" shouldoverride="false">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
