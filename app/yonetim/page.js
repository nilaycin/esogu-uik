// 1. Departman Başkanları Verisi
const departmentHeads = [
  {
    name: "Hayal Aktaş",
    role: "Eğitim ve Sosyal Sorumluluk Departmanı",
    email: "hayalyaktas@gmail.com",
    avatarBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Sıla Kaya",
    role: "Mali İşler ve Sponsorluk Departmanı",
    email: "sila.kaya0354@gmail.com",
    avatarBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "Irmak Paköz",
    role: "Sosyal Medya ve Tanıtım Departmanı",
    email: "vpakoz.6516@gmail.com",
    avatarBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    name: "Beyza Bakar",
    role: "İdari İşler ve İnsan Kaynakları Departmanı",
    email: "beyzabakar33@gmail.com",
    avatarBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

export default function YonetimPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      {/* Başlık ve Slogan */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          ESOGÜ UİK
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] mt-3 tracking-tight">
          Yönetim Kurulu
        </h1>
        <p className="text-slate-500 mt-3 text-base sm:text-lg">
          Kulübümüzü yöneten ekip ile tanışın.
        </p>
      </div>

      {/* 1. SEVİYE: Genel Başkan & Başkan Yardımcısı */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Genel Başkan */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0c2340] to-blue-700 text-white font-extrabold text-xl flex items-center justify-center shadow-xs">
                HK
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                  Genel Başkan
                </span>
                <h3 className="text-2xl font-extrabold text-[#0c2340] mt-1">
                  Havva Kandak
                </h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="mailto:havvakandak@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <span>✉️</span>
              <span>havvakandak@hotmail.com</span>
            </a>
          </div>
        </div>

        {/* Başkan Yardımcısı */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0c2340] to-blue-600 text-white font-extrabold text-xl flex items-center justify-center shadow-xs">
                AO
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                  Başkan Yardımcısı
                </span>
                <h3 className="text-2xl font-extrabold text-[#0c2340] mt-1">
                  Aleyna Okumuş
                </h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="mailto:aleynaokumus@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <span>✉️</span>
              <span>aleynaokumus000@gmail.com
</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. SEVİYE: Departman Başkanları */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0c2340] mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          Departman Başkanları
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentHeads.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-150 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm mb-4 border ${item.avatarBg}`}
                >
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-extrabold text-lg text-[#0c2340] mb-1.5 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-snug mb-5">
                  {item.role}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`mailto:${item.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors truncate max-w-full"
                >
                  <span>✉️</span>
                  <span className="truncate">{item.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SEVİYE: Denetim Kurulu */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0c2340] mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          Denetim Kurulu
        </h2>

        <div className="max-w-md bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 font-bold flex items-center justify-center border border-slate-200">
                AÖ
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Denetim Kurulu Başkanı
                </span>
                <h3 className="text-lg font-extrabold text-[#0c2340] mt-0.5">
                  Azra Özçelik
                </h3>
              </div>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a
              href="mailto:azraozcelik@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <span>✉️</span>
              <span>ozcelikazra192@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}