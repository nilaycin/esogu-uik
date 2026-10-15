const galleryItems = [
  {
    src: "/galeri/tanismatoplantisi-1.JPG",
    title: "Tanışma Toplantımızdan Fotoğraflar",
    category: "Söyleşi",
    date: "Ekim 2026",
  },
  {
    src: "/galeri/tanismatoplantisi-2.JPG",
    title: "Tanışma Toplantımızdan Fotoğraflar",
    
    date: "Ekim 2026",
  },
  {
    src: "/galeri/tanismatoplantisi-3.JPG",
    title: "Tanışma Toplantımızdan Fotoğraflar",
    category: "Sosyal",
    date: "Ekim 2026",
  },
  {
    src: "/galeri/galeri2.JPG",
    title: "Stantlarımızdan Fotoğraflar",
    category: "Sosyal",
    date: "Ekim 2026",
  },
  {
    src: "/galeri/galeri5.JPG",
    title: "Stantlarımızdan Fotoğraflar",
    category: "Sosyal",
    date: "Ekim 2026",
  },
  {
    src: "/galeri/galeri6.JPG",
    title: "Stantlarımızdan Fotoğraflar",
    category: "Sosyal",
    date: "Ekim 2026",
  },
];

export default function GaleriPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
      {/* Başlık ve Slogan */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] mt-3 tracking-tight">
          Galeri
        </h1>
        <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug max-w-2xl mx-auto">
          Birlikte ürettiğimiz, tartıştığımız ve
          paylaştığımız anlar.
        </p>
      </div>

      {/* Galeri Izgarası */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Fotoğraf Alanı */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bilgi Kartı */}
            <div className="p-5 flex flex-col justify-between grow">
              <div>
                
                <h3 className="font-extrabold text-[#0c2340] text-base group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium mt-4 block">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}