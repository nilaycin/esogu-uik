import Link from "next/link";
import Image from "next/image";

const focusAreas = [
  {
    title: "Eğitim",
    desc: "Seminerler, paneller, workshoplar ve daha fazlası.",
    tag: "Akademik",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#0c2340]"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Sosyal Sorumluluk",
    desc: "Topluma fayda sağlayan projeler ve farkındalık çalışmaları.",
    tag: "Toplum",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#0c2340]"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Kültür & Sanat",
    desc: "Geziler, atölyeler ve kültürel etkileşim etkinlikleri.",
    tag: "Kültür",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#0c2340]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Kariyer & Ağ",
    desc: "Sektör buluşmaları, mezun söyleşileri ve staj imkanları.",
    tag: "Kariyer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[#0c2340]"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. ARKA PLAN GÖRSELİ */}
      <div className="absolute top-0 left-0 right-0 w-full h-[680px] sm:h-full -z-20 overflow-hidden">
        <Image
          src="/arkaplan.png"
          alt="Arka Plan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
      </div>

      {/* 2. SAYFA İÇERİĞİ */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-14 pb-20 relative z-10 box-border">
        
        {/* HERO ALANI */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          
          {/* Kulüp Logosu */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-20 h-20 sm:w-28 sm:h-28 relative rounded-full p-1 bg-white/95 shadow-sm border border-slate-200/80 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="ESOGÜ Uluslararası İlişkiler Kulübü Logosu"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Üniversite İsmi */}
          <p className="text-[11px] sm:text-sm font-bold text-slate-600 uppercase tracking-widest mb-2 drop-shadow-2xs">
            Eskişehir Osmangazi Üniversitesi
          </p>

          {/* Kulüp İsmi */}
          <h1 className="text-2xl sm:text-5xl font-black text-[#0c2340] tracking-tight leading-tight mb-4 sm:mb-5">
            Uluslararası İlişkiler Kulübü
          </h1>

          {/* Slogan */}
          <p className="text-lg sm:text-3xl font-extrabold text-[#0c2340] tracking-tight leading-snug px-2">
            “Dünya gündemini konuşuyoruz, <br />
            <span className="text-blue-600">bugün gündem sensin.</span>”
          </p>

          {/* Butonlar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link
              href="/hakkimizda"
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#0c2340] hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
            >
              <span>Kulübü Keşfet</span>
              <span>→</span>
            </Link>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpMycj63sG9tCjibFdUjaSStAGh7vYcy-uywwYRpW9laHQ6g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/90 backdrop-blur-xs border border-slate-300 hover:border-slate-800 text-slate-700 font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-2xs"
            >
              <span>Bize Katıl</span>
              <span className="text-slate-400">→</span>
            </a>
          </div>
        </div>

        {/* 4 ODAK KARTI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {focusAreas.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-slate-150 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-center"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[#0c2340] mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}