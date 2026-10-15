import Link from "next/link";

const baskanlar = [
  {
    name: "Havva Kandak",
    
    department: "Genel Başkan",
    email: "havvakandak@hotmail.com",
    image: "/yonetim/havvakandak.png",
    initials: "HK",
  },
  {
    name: "Aleyna Okumuş",
    department:"Başkan Yardımcısı",
    email: "aleynaokumus000@gmail.com",
    image: "/yonetim/aleynaokumus.png",
    initials: "AO",
  },
];

const departmanBaskanlari = [
  {
    name: "Hayal Aktaş",
    department: "Eğitim ve Sosyal Sorumluluk Departmanı Başkanı",
    email: "hayalyaktas@gmail.com",
    image: "/yonetim/hayalaktas.png",
    initials: "HA",
  },
  {
    name: "Sıla Kaya",
    department: "Mali İşler ve Sponsorluk Departmanı Başkanı",
    email: "sila.kaya0354@gmail.com",
    image: "/yonetim/silakaya.png",
    initials: "SK",
  },
  {
    name: "Irmak Paköz",
    department: "Sosyal Medya ve Tanıtım Departmanı Başkanı",
    email: "vpakoz.6516@gmail.com",
    image: "/yonetim/irmakpakoz.png",
    initials: "IP",
  },
  {
    name: "Beyza Bakar", 
    department: "İdari İşler ve İnsan Kaynakları Departmanı Başkanı",
    email: "beyzabakar34@gmail.com",
    image: "/yonetim/beyzabakar.png",
    initials: "BB",
  },
];

const denetimBaskani = {
  name: "Azra Özçelik", 
  desc: "Denetim Kurulu Başkanı",
  email: "ozcelikazra192@gmail.com",
  initials: "AÖ",
};

export const metadata = {
  title: "Yönetim Kurulu | ESOGÜ Uluslararası İlişkiler Kulübü",
  description: "ESOGÜ Uluslararası İlişkiler Kulübü Yönetim Kurulu ve Departman Liderleri.",
};

function MemberCard({ member }) {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/85 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex flex-col items-center justify-center gap-1.5">
            <span className="text-2xl font-extrabold text-[#0c2340]/40 tracking-wider">
              {member.initials}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Fotoğraf Yakında</span>
          </div>
        )}

        
      </div>

      <div className="p-3.5 flex flex-col justify-between grow">
        <div>
          <h3 className="font-extrabold text-[#0c2340] transition-colors duration-200 group-hover:text-blue-600 text-lg sm:text-xl leading-snug">
            {member.name}
          </h3>
          {member.department && (
            <p className="text-[14px] text-slate-500 font-medium mt-0.5 leading-tight">
              {member.department}
            </p>
          )}
        </div>

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-blue-600 transition-colors pt-2 border-t border-slate-100 truncate"
          >
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span className="truncate">{member.email}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function YonetimPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* ÜST BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          <h1 className="text-3xl sm:text-5xl font-black text-[#0c2340] tracking-tight">
            Yönetim Kurulu
          </h1>
          <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug max-w-2xl mx-auto">
            Kulübümüzün vizyonunu hayata geçiren, etkinlik ve projelerimizi koordine eden yönetim kadromuz.
          </p>
        </div>

        {/* 1. BÖLÜM: BAŞKANLAR */}
        <div className="mb-14 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-xl mx-auto">
            {baskanlar.map((baskan, idx) => (
              <MemberCard key={idx} member={baskan} />
            ))}
          </div>
        </div>

        {/* 2. BÖLÜM: DEPARTMAN LİDERLERİ (Klasik Yan Yana 4'lü Düzen) */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
           
            <h2 className="text-xl sm:text-3xl font-black text-[#0c2340] inline-block tracking-tight">
              Departman Başkanları
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {departmanBaskanlari.map((dep, idx) => (
              <MemberCard key={idx} member={dep} />
            ))}
          </div>
        </div>

{/* 3. BÖLÜM: DENETİM KURULU */}
        <div className="pt-4 sm:pt-8">
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-[#0c2340]">
              Denetim Organı
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Eski Tarz: Düz Lacivert Zemin Üzerine Beyaz "AÖ" Harfi */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0c2340] text-white flex items-center justify-center font-extrabold text-xl sm:text-2xl tracking-wider shadow-xs shrink-0">
              {denetimBaskani.initials}
            </div>

            {/* Bilgiler */}
            <div className="min-w-0 flex-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-1.5">
                {denetimBaskani.role}
              </span>
              <h3 className="font-extrabold text-base sm:text-lg text-[#0c2340] leading-tight">
                {denetimBaskani.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {denetimBaskani.desc}
              </p>


              {/* Mail: Normalde gri, hover olunca mavi */}
              {denetimBaskani.email && (
                <a
                  href={`mailto:${denetimBaskani.email}`}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>{denetimBaskani.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}