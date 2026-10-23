"use client";

import { useState } from "react";

const eventGroups = [
  {
    id: "sinema-gecesi",
    title: "Sinema Gecesi : No Man's Land",
    date: "Ekim 2026",
    photos: [
      "/galeri/sinema-gecesi-1.jpg",
      "/galeri/sinema-gecesi-2.jpg",
    ],
  },
  {
    id: "esogu-fest",
    title: "EsogüFest'26",
    date: "Ekim 2026",
    photos: [
      "/galeri/esogu-fest-1.jpg",
      "/galeri/esogu-fest-2.jpg",
    ],
  },
  {
    id: "tanisma",
    title: "Tanışma Toplantımızdan Fotoğraflar",
    date: "Ekim 2026",
    photos: [
      "/galeri/tanismatoplantisi-1.JPG",
      "/galeri/tanismatoplantisi-2.JPG",
      "/galeri/tanismatoplantisi-3.JPG",
    ],
  },
  {
    id: "stantlar",
    title: "Stantlarımızdan Fotoğraflar",
    date: "Ekim 2026",
    photos: [
      "/galeri/galeri2.JPG",
      "/galeri/galeri5.JPG",
      "/galeri/galeri6.JPG",
    ],
  },
];

export default function GaleriPage() {
  const [openGroup, setOpenGroup] = useState(null);
  // Her grup için seçili fotoğrafın indexini tut
  const [selectedPhoto, setSelectedPhoto] = useState({});

  function getActiveSrc(group) {
    const idx = selectedPhoto[group.id] ?? 0;
    return group.photos[idx];
  }

  function getBackPhotos(group) {
    const activeIdx = selectedPhoto[group.id] ?? 0;
    return group.photos.filter((_, i) => i !== activeIdx);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
      {/* Başlık */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-black text-[#0c2340] mt-3 tracking-tight">
          Galeri
        </h1>
        <p className="text-base sm:text-xl font-semibold text-slate-600 mt-4 leading-snug">
          Birlikte ürettiğimiz, tartıştığımız ve paylaştığımız anlar.
        </p>
      </div>

      {/* Grup Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
        {eventGroups.map((group) => {
          const isOpen = openGroup === group.id;
          const activeSrc = getActiveSrc(group);
          const backPhotos = getBackPhotos(group);

          return (
            <div key={group.id} className="flex flex-col gap-4">

              {/* Yığın Kart */}
              <button
                onClick={() => setOpenGroup(isOpen ? null : group.id)}
                className="relative w-full text-left group"
                style={{ paddingBottom: "12px", paddingRight: "12px" }}
              >
                {/* 3. Kart (en arkada) */}
                {backPhotos[1] && (
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                    style={{ transform: "rotate(4deg) translate(10px, 8px)" }}
                  >
                    <img src={backPhotos[1]} alt="" className="w-full h-full object-cover opacity-70" />
                  </div>
                )}

                {/* 2. Kart (ortada) */}
                {backPhotos[0] && (
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                    style={{ transform: "rotate(2deg) translate(5px, 4px)" }}
                  >
                    <img src={backPhotos[0]} alt="" className="w-full h-full object-cover opacity-85" />
                  </div>
                )}

                {/* 1. Kart (öne) — aktif fotoğraf */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3 group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={activeSrc}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Karartma + Bilgi */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-4 sm:p-5">
                    <h2 className="text-white font-extrabold text-base sm:text-lg leading-snug drop-shadow">
                      {group.title}
                    </h2>
                    <p className="text-white/70 text-xs font-medium mt-1">{group.date}</p>
                  </div>

                  {/* Aç/Kapat ikonu */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Açılan Küçük Fotoğraflar */}
              {isOpen && (
                <div className="grid grid-cols-3 gap-2 animate-in slide-in-from-top-2 duration-200">
                  {group.photos.map((src, idx) => {
                    const isActive = (selectedPhoto[group.id] ?? 0) === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelectedPhoto((prev) => ({ ...prev, [group.id]: idx }))
                        }
                        className={`rounded-xl overflow-hidden aspect-square bg-slate-100 transition-all duration-200 ${
                          isActive
                            ? "ring-2 ring-[#0c2340] ring-offset-2 scale-95"
                            : "opacity-70 hover:opacity-100 hover:scale-95"
                        }`}
                      >
                        <img
                          src={src}
                          alt={`${group.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
