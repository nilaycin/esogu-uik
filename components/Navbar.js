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
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80">
      {/* max-w-7xl ve px-4 sm:px-8 ile ekranı daha geniş kullanıyoruz */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Sol Alan: Logo ve Üniversite/Kulüp İsmi */}
        <Link href="/" className="flex items-center gap-1 shrink-0 group">
          <img
            src="/logo.png"
            alt="ESOGÜ UİK Logo"
            className="w-26 h-26 object-contain group-hover:scale-105 transition-transform shrink-0"
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

        {/* Orta/Sağ Alan: Sayfa Linkleri (Büyük ekranda geniş aralıklı, mobilde gizli) */}
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
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpMycj63sG9tCjibFdUjaSStAGh7vYcy-uywwYRpW9laHQ6g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0c2340] hover:bg-blue-900 text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
          >
            Bize Katıl →
          </a>
        </div>

      </div>
    </header>
  );
}