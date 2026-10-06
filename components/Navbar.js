"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Departmanlar", href: "/departmanlar" },
  { name: "Etkinlikler", href: "/etkinlikler" },
  { name: "Galeri", href: "/galeri" },
  { name: "Yönetim", href: "/yonetim" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4 box-border">
        
        {/* Sol Alan: Mobil Menü Butonu + Logo + Okul/Kulüp İsmi */}
        <div className="flex items-center gap-1 sm:gap-3 shrink-0">
          
          {/* Mobil Menü Butonu (Logonun hemen solunda, sadece mobilde çıkar) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 -ml-1 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Menüyü Aç"
          >
            {isOpen ? (
              // Açıkken Çarpı (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Kapalıyken 3 Çizgi
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo ve İsimler */}
          <Link href="/" className="flex items-center gap-1 group">
            <img
              src="/logo.png"
              alt="ESOGÜ UİK Logo"
              className="w-14 h-14 sm:w-24 sm:h-24 object-contain group-hover:scale-105 transition-transform shrink-0"
            />

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase leading-tight">
                Eskişehir Osmangazi Üniversitesi
              </span>
              <span className="text-xs sm:text-base font-extrabold text-[#0c2340] leading-tight">
                Uluslararası İlişkiler Kulübü
              </span>
            </div>
          </Link>
        </div>

        {/* Orta Alan: Masaüstü Sayfa Linkleri */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#0c2340] hover:bg-slate-100/70 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Sağ Uç: Bize Katıl Butonu */}
        <div className="flex items-center shrink-0">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpMycj63sG9tCjibFdUjaSStAGh7vYcy-uywwYRpW9laHQ6g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0c2340] hover:bg-blue-900 text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
          >
            Bize Katıl →
          </a>
        </div>

      </div>

      {/* Mobilde Tıklanınca Açılan Menü */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}