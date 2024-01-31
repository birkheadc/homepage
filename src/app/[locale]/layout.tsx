import type { Metadata, Viewport } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Frame from "../../components/frame/Frame";
import Providers from "@/contexts/providers/Providers";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import Testc from "../../components/testc/Testc";
import Logo from "@/components/frame/logo/Logo";

export const metadata: Metadata = {
  title: "Colby Birkhead",
  description: "Colby Birkhead's personal site",
};

export const viewport: Viewport = {
  
}

const vt323 = VT323({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  return (
    <html lang={locale} data-theme='a'>
      <body className={vt323.className}>
        {/* <NextIntlClientProvider></NextIntlClientProvider> */}
        <Providers>
          <Frame logo={<Logo />}>
            {children}
          </Frame>
        </Providers>
      </body>
    </html>
  );
}
