const contactChannels = [
  {
    title: "e-mail",
    value: "esogu.uik@gmail.com",
    href: "mailto:esogu.uik@gmail.com",
    desc: "Soruların, önerilerin ve resmi iş birlikleri için",
    action: "E-posta Gönder →",
    // 1. İkon: Mektup / Zarf Vektörü
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0c2340]"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    value: "@esoguuluslararasiiliskiler",
    href: "https://www.instagram.com/esoguuluslararasiiliskiler?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    desc: "Etkinlik duyuruları, anlık paylaşımlar ve kulüp hayatı",
    action: "Profili Gör →",
    // 2. İkon: Instagram Vektörü
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0c2340]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    title: "Konum / Yerleşke",
    value: "Eskişehir Osmangazi Üniversitesi",
    href: "https://maps.google.com",
    desc: "Meşelik Kampüsü, İİBF / Uluslararası İlişkiler Bölümü",
    action: "Haritada Aç →",
    // 3. İkon: Konum Pini Vektörü
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#0c2340]"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function IletisimPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      {/* Üst Başlık ve Slogan */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] tracking-tight">
          İletişim
        </h1>
        <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug max-w-2xl mx-auto">
          Soruların, fikirlerin veya iş birliklerin için bize ulaş.
        </p>
      </div>

      {/* İletişim Kartları Izgarası (3 Kolonlu / Dengeli Dizilim) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactChannels.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center mb-5 group-hover:bg-blue-50/50 group-hover:border-blue-200 transition-colors">
                {item.icon}
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  {item.title}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0c2340] group-hover:text-blue-600 transition-colors break-words">
                  {item.value}
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3 mb-6">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c2340] group-hover:text-blue-600 transition-colors">
              <span>{item.action}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}