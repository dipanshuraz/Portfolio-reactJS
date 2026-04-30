import "./styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Deepanshu Prajapati | 3D Portfolio",
  description:
    "Senior Full Stack & Web3 Engineer — smart contracts, blockchain, and institutional DeFi, with design systems and scalable architecture. Next.js, TypeScript, Node.js."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
