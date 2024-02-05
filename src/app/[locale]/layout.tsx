import type { Metadata, Viewport } from "next";
import { DotGothic16, VT323 } from "next/font/google";
import "./globals.css";
import Frame from "../../components/frame/Frame";
import Providers from "@/contexts/providers/Providers";
import Logo from "@/components/frame/logo/Logo";

export const metadata: Metadata = {
  title: "Colby Birkhead",
  description: "Colby Birkhead's personal site",
};

export const viewport: Viewport = {
  
}

const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--font-en' });
const dotGothic16 = DotGothic16({ subsets: ['latin-ext'], weight: '400', variable: '--font-jp'});

const fonts: { [key: string]: string } = {
  'en': vt323.className,
  'jp': dotGothic16.className
}

const fontSizes: { [key: string]: string } = {
  'en': '16px',
  'jp': '14px'
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  return (
    <html lang={locale} data-theme='a' style={{ fontSize: fontSizes[locale] }}>
      <body className={`${vt323.variable} ${dotGothic16.variable} ${fonts[locale]}`}>
        <div id='root'>
          <Providers>
            <Frame logo={<Logo />}>
              {children}
            </Frame>
          </Providers>
        </div>
      </body>
    </html>
  );
}
