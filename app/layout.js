import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ESOGÜ Uluslararası İlişkiler Kulübü",
  description: "Eskişehir Osmangazi Üniversitesi Uluslararası İlişkiler Kulübü Resmi Web Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-[#f8fafc] text-slate-800 antialiased">
        {/* Navbar tüm sayfalarda en üstte sabit */}
        <Navbar />

        {/* Geçiş efektiyle sayfayı saran ana etiket */}
        <main className="page-transition min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
