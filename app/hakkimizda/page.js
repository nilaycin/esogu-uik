export default function HakkimizdaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      {/* Üst Başlık ve Slogan */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] mt-3 tracking-tight">
          Hakkımızda
        </h1>
        <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug max-w-2xl mx-auto">
          Farklı bakış açıları, daha geniş ufuklar,
          daha güçlü yarınlar.
        </p>
      </div>

      {/* 1. ÜSTTEKİ DİKDÖRTGEN KUTU: BİZ KİMİZ? */}
      <div className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 mb-8 overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
           
           {/* İkon Kutusu: İkon rengi sabit lacivert, sadece dış çerçeve hover anında mavi olur */}
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/90 group-hover:border-blue-400 group-hover:bg-blue-50/40 transition-colors duration-300 flex items-center justify-center shrink-0">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-[#0c2340]"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
</div>
            <div>
              <h2 className="text-4xl font-black text-[#0c2340]">
                Biz Kimiz?
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
            Eskişehir Osmangazi Üniversitesi Uluslararası İlişkiler Kulübü; küresel
            siyaset, diplomasi, uluslararası hukuk ve güncel dünya meselelerine ilgi
            duyan öğrencileri bir araya getiren bağımsız bir öğrenci topluluğudur.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Amacımız; yalnızca teorik bilgiyle sınırlı kalmayıp öğrencilerin analiz
            yapma, tartışma kültürü edinme ve liderlik vasıflarını geliştirme
            süreçlerine katkı sağlamaktır.
          </p>
        </div>
      </div>

      {/* 2. ALTTTAKİ İKİ KUTU: VİZYONUMUZ & MİSYONUMUZ (Yan Yana & Animasyonlu) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vizyonumuz */}
        <div className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            {/* İkon Kutusu */}
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/90 group-hover:border-blue-400 group-hover:bg-blue-50/40 transition-colors duration-300 flex items-center justify-center mb-5 shrink-0">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-[#0c2340]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
</div>

        
            <h3 className="text-xl font-extrabold text-[#0c2340] mb-3 group-hover:text-blue-600 transition-colors">
              Vizyonumuz
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Uluslararası ilişkiler alanında düşünen, sorgulayan, araştıran ve dünyayı yakından takip eden öğrencilerin bir araya geldiği; ulusal ve uluslararası düzeyde etkili, yenilikçi ve sürdürülebilir projeler üreten öncü bir öğrenci kulübü olmak.
            </p>
          </div>
        </div>

        {/* Misyonumuz */}
        <div className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            {/* İkon Kutusu */}
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/90 group-hover:border-blue-400 group-hover:bg-blue-50/40 transition-colors duration-300 flex items-center justify-center mb-5 shrink-0">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-[#0c2340]"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
</div>

            
            <h3 className="text-xl font-extrabold text-[#0c2340] mb-3 group-hover:text-blue-600 transition-colors">
              Misyonumuz
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Üyelerimizin akademik ve sosyal gelişimlerini desteklemek; dünya gündemini, uluslararası ilişkileri ve küresel meseleleri farklı bakış açılarıyla ele alan etkinlikler, eğitimler ve projeler düzenlemek. Öğrenciler arasında iletişim ve dayanışmayı güçlendirerek aktif, bilinçli ve dünyaya duyarlı bireylerin yetişmesine katkı sağlamak.

            </p>
          </div>
        </div>

      </div>
    </div>
  );
}