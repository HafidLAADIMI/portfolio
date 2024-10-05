import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden bg-black " 
    //   style={{
    //     backgroundImage: "url(/assets/herobg.png)",
    //     backgroundAttachment: "fixed",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    
    // }}
    >
      <body>{children}</body>
    </html>
  );
}
