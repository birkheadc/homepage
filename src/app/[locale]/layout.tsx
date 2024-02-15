import type { Metadata, Viewport } from "next";
import { DotGothic16, VT323 } from "next/font/google";
import "./globals.css";
import Providers from "@/contexts/providers/Providers";
import Logo from "@/components/frame/logo/Logo";
import SiteFrame from "../../components/frame/SiteFrame";
import utils from "../../utils";

export const metadata: Metadata = {
  title: "Colby Birkhead",
  description: "Colby Birkhead's personal site",
};

export const viewport: Viewport = {
  
}

const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--font-special' });
const dotGothic16 = DotGothic16({ subsets: ['latin-ext'], weight: '400', variable: '--font-normal'});

const fonts: { [key: string]: string } = {
  'special': vt323.className,
  'normal': dotGothic16.className
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  return (
    <html lang={locale} data-theme='a'>
      <body className={utils.cn(vt323.variable, dotGothic16.variable, fonts[locale], 'font-normal')}>
        <div id='root'>
          <Providers>
            <SiteFrame logo={<Logo />}>
              { children }
            </SiteFrame>
          </Providers>
        </div>
      </body>
    </html>
  );
}
