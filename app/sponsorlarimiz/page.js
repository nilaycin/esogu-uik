import Link from "next/link";

const sponsors = Array.from({ length: 20 }, (_, i) => i + 1)
  .filter((id) => id !== 8 && id !== 11)
  .map((id) => ({
    id,
    logo: `/sponsorlar/sponsor-${id}.png`,
  }));

export const metadata = {
  title: "Sponsorlarımız | ESOGÜ Uluslararası İlişkiler Kulübü",
  description: "Kulübümüzün etkinlik ve projelerine değer katan destekçilerimiz ve sponsorlarımız.",
};

export default function SponsorsPage() {
  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. ARKA PLAN ZENGİNLEŞTİRME */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-100/60 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-80 right-0 w-[400px] h-[400px] bg-slate-200/50 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* ÜST BAŞLIK ALANI */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-black text-[#0c2340] tracking-tight">
            Sponsorlarımız & İşbirliklerimiz
          </h1>
          <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug max-w-2xl mx-auto">
            Etkinliklerimizi sürdürülebilir ve eğlenceli bir hale getirdikleri için değerli sponsorlarımıza teşekkür ederiz.
          </p>
        </div>




        {/* 3. LOGO VİTRİNİ (BENTO KARE KARTLAR) */}
        <div className="bg-white/60 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-5">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="group relative aspect-square bg-white rounded-2xl border border-white p-4 sm:p-5 flex items-center justify-center shadow-2xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={`Sponsor ${sponsor.id}`}
                  className="w-full h-full object-contain rounded-xl transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 4. SADE & BEYAZ İLETİŞİM ALANI */}
        <div className="mt-14 sm:mt-20 bg-white border border-slate-200/90 rounded-2xl px-8 py-6 text-center shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-[#0c2340] mb-1.5">
            Birlikte Neler Yapabiliriz?
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mb-4">
            Etkinliklerimizde yer almak veya kulübümüze sponsor olmak için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c2340] hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
          >
            <span>İletişime Geç</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}