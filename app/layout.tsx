import "./styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Deepanshu Prajapati | 3D Portfolio",
  description: "Web3 Full-Stack Engineer with 6+ years of experience"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
