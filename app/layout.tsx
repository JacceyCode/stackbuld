import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "E-commerce product listing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>E-commerce Store</title>
        <meta
          name="description"
          content="Buy various products at the best price from the comfort of your home."
        />
        <meta
          name="keywords"
          content="ecommerce, store, online, shopping, buy, products, men's clothing, women's clothing, jewelery, electronics"
        />
      </Head>
      <body
        className={cn(
          "bg-background antialiased max-w-screen-2xl mx-auto",
          montserrat.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
