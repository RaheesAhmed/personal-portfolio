import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rahees Ahmed",
  description: "Rahees Ahmed's Portfolio. Rahees Ahmed is a Full Stack Developer and AI Specialist with over 6 years of experience. He specializes in turning complex ideas into user-friendly, efficient solutions that drive business growth.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className=''>
        {children}
      </body>
    </html>
  );
}
