import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import SiteHeader from "@/src/components/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E2E Country",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <SiteHeader />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
