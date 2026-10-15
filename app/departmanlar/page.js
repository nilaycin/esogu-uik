const departments = [
  {
    title: "Eğitim ve Sosyal Sorumluluk Departmanı",
    desc: "Akademik gelişimi destekleyen eğitim faaliyetleri ve toplumsal fayda sağlayan sosyal sorumluluk projeleri.",
    head: "Hayal Aktaş",
    // 1. İkon: Mezuniyet Kepi
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-[#0c2340]"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Mali İşler ve Sponsorluk Departmanı",
    desc: "Kulübün mali süreçleri ve sponsorluk ilişkilerini yürütür.",
    head: "Sıla Kaya",
    // 2. İkon: Kurumsal İş / Sponsorluk Çantası (Briefcase)
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-[#0c2340]"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M2 12h20" />
        <path d="M10 12v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
      </svg>
    ),
  },
  {
    title: "Sosyal Medya ve Tanıtım Departmanı",
    desc: "Kulübün dijital iletişimi, sosyal medya hesapları ve tanıtım çalışmalarını yönetir.",
    head: "Irmak Paköz",
    // 3. İkon: Fotoğraf Makinesi / Kamera
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-[#0c2340]"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "İdari İşler ve İnsan Kaynakları Departmanı",
    desc: "Kulüp içi koordinasyonu, üye yönetimini ve idari süreçleri yürütür.",
    head: "Beyza Bakar",
    // 4. İkon: 3'lü Topluluk / Ekip
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7 text-[#0c2340]"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function DepartmanlarPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      {/* Başlık ve Slogan */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] mt-3 tracking-tight">
          Departmanlarımız
        </h1>
        <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug max-w-2xl mx-auto">
          Fikir üret, geliş, birlikte etki oluştur.
        </p>
      </div>

      {/* Departman Kartları Izgarası */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 mb-5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-200 group-hover:bg-blue-50/40 transition-all duration-200">
                {dept.icon}
              </div>

              <h2 className="text-xl font-extrabold text-[#0c2340] mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {dept.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {dept.desc}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Departman Başkanı
                </span>
                <span className="text-base font-bold text-[#0c2340]">
                  {dept.head}
                </span>
              </div>

              <div className="w-9 h-9 rounded-full bg-slate-100 text-[#0c2340] flex items-center justify-center font-bold text-xs">
                {dept.head
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}