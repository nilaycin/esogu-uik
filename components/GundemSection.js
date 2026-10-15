import { magazines } from "@/data/magazines";

export default function GundemSection() {
  const [latestIssue, ...pastIssues] = magazines;

  return (
    <section className="w-full py-8 sm:py-16">
      {/* ÜST BAŞLIK ALANI */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
       
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight">
          Gündemden Hikâyeler
        </h2>
        <p className="mt-2 text-slate-600 text-xs sm:text-base leading-relaxed">
          Uluslararası ilişkiler, diplomasi ve gençlik vizyonuna dair iki haftada bir yayımlanan editoryal bültenimiz.
        </p>
      </div>

      {/* 1. VİTRİN: EN SON SAYI */}
      {latestIssue && (
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg sm:shadow-xl shadow-slate-200/60 mb-10 transition-all">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            
            {/* Kapak Görseli (Mobilde derli toplu ve ortalı) */}
            <div className="w-full md:w-5/12 flex justify-center shrink-0">
              <div className="relative w-48 sm:w-60 md:w-full max-w-[260px] rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100 group">
                <img
                  src={latestIssue.coverImage}
                  alt={latestIssue.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-medium">
                  {latestIssue.issue}
                </div>
              </div>
            </div>

            {/* İçerik & Butonlar */}
            <div className="w-full md:w-7/12 flex flex-col items-start text-left">
              {/* Etiketler */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
                <span className="text-[11px] sm:text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Son Sayı • {latestIssue.date}
                </span>
                {latestIssue.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] sm:text-xs text-slate-500 bg-slate-100/90 px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Başlık */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0c2340] leading-snug mb-2.5 sm:mb-3">
                {latestIssue.title}
              </h3>

              {/* Açıklama */}
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-5">
                {latestIssue.subtitle}
              </p>

              {/* Yazar Bilgisi */}
              <div className="flex items-center gap-3 mb-6 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100/80 w-full sm:w-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0c2340] text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  {latestIssue.author?.charAt(0) || "U"}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {latestIssue.author}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-tight mt-0.5">
                    {latestIssue.role}
                  </p>
                </div>
              </div>

              {/* Butonlar (Mobilde tam genişlik, rahat basılabilir) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full">
                <a
                  href={latestIssue.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#0c2340] hover:bg-blue-900 active:scale-95 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-slate-900/10 text-center"
                >
                  <span>Bülteni Oku</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>

                <a
                  href={latestIssue.pdfUrl}
                  download
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-semibold text-xs sm:text-sm transition-all text-center"
                >
                  <span>PDF İndir</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. ARŞİV: GEÇMİŞ SAYILAR */}
      {pastIssues.length > 0 && (
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
            <h4 className="text-base sm:text-lg font-bold text-[#0c2340]">Geçmiş Sayılar</h4>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
              {pastIssues.length} Sayı Arşivde
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {pastIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="rounded-lg sm:rounded-xl overflow-hidden aspect-[3/4] bg-slate-100 mb-2.5">
                  <img src={issue.coverImage} alt={issue.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 block">
                    {issue.issue} • {issue.date}
                  </span>
                  <h5 className="font-semibold text-xs sm:text-sm text-[#0c2340] line-clamp-2 mt-0.5">
                    {issue.title}
                  </h5>
                </div>
                <a
                  href={issue.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 block text-center py-1.5 sm:py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-[#0c2340] hover:text-white text-slate-700 transition-colors"
                >
                  İncele
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}