import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });

export const metadata = {
  title: "Keerthi's Portfolio",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.variable}>{children}</body>
    </html>
  );
}
