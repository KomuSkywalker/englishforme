import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress";
import { MobileTabBar, MobileTopBar, Sidebar } from "@/components/Nav";
import { Toasts } from "@/components/Toasts";

const baloo = Baloo_2({ subsets: ["latin", "latin-ext"], variable: "--font-baloo" });
const nunito = Nunito({ subsets: ["latin", "latin-ext"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "EnglishForMe: MÜYYES Kampı",
  description:
    "Oyun gibi MÜYYES hazırlığı: kelime kartları, gramer görevleri, okuma, dinleme, deneme sınavları ve bol XP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${baloo.variable} ${nunito.variable} antialiased`}>
        <ProgressProvider>
          <Sidebar />
          <MobileTopBar />
          <div className="lg:pl-64">
            <main className="mx-auto max-w-4xl px-4 py-6 pb-28 lg:pb-12">{children}</main>
          </div>
          <MobileTabBar />
          <Toasts />
        </ProgressProvider>
      </body>
    </html>
  );
}
