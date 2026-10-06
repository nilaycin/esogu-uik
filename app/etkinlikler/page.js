const events = [
  {
    day: "7",
    month: "EKİM",
    year: "2026",
    title: "Tanışma Toplantısı",
    time: "18.00",
    location: "Walker's Coffee House Doktorlar Şubesi",
  },
  {
    day: "14-15",
    month: "EKİM",
    year: "2026",
    title: "ESOGÜ FEST",
    time: "10.00",
    location: "ESOGÜ",
  },
  {
    day: "16",
    month: "EKİM",
    year: "2026",
    title: "Sinema Gecesi",
    time: "Detaylar Yakında!",
    location: "Detaylar Yakında!",
    
  },
  {
    day: "26",
    month: "EKİM",
    year: "2026",
    title: "Sürpriz Workshop (Detaylar Yakında!)",
    time: "Detaylar yakında!",
    location: "Detaylar yakında!",
  },
];

export default function EtkinliklerPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      {/* Başlık ve Slogan */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] tracking-tight">
          Etkinlikler
        </h1>
        <p className="text-xl font-bold text-slate-700 mt-4 leading-snug">
          “Dünya gündemini <span className="text-blue-600">birlikte tartışıyoruz.</span>”
        </p>
      </div>

      {/* Bölüm Başlığı */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200/80">
        <h2 className="text-2xl font-extrabold text-[#0c2340] flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          Yaklaşan Etkinlikler
        </h2>
        <span className="text-xs font-semibold text-slate-400">
          Güz Dönemi
        </span>
      </div>

      {/* Etkinlik Kartları Listesi */}
      <div className="space-y-5">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
          >
            {/* Sol: Tarih Kutusu ve Etkinlik İsmi */}
            <div className="flex items-center gap-6">
              {/* Tarih Rozeti (PDF'teki Takvim Yaprağı Şeklinde) */}
              <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center shrink-0 text-center">
                <span className="text-2xl font-black text-[#0c2340] leading-none">
                  {event.day}
                </span>
                <span className="text-[11px] font-bold text-blue-600 tracking-wider mt-1">
                  {event.month}
                </span>
                <span className="text-[10px] font-medium text-slate-400">
                  {event.year}
                </span>
              </div>

              {/* Bilgiler */}
              <div>
                <h3 className="text-xl font-extrabold text-[#0c2340] group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium mt-2">
                  <span className="flex items-center gap-1">
                    <span>🕒</span> {event.time}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span>📍</span> {event.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}