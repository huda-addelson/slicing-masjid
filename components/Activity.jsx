import Image from "next/image";
import React from "react";

const Activity = () => {
  const items = [
    {
      title: "Kajian Fiqih, Kajian Ibadah 4 Madzhab dan Belajar Ngaji",
      desc: "Di setiap harinya, masjid akan melaksanakan banyak kegiatan keislaman, terbuka untuk masyarakat sekitar dan untuk umum.",
      img: "kegiatan-one.png",
    },
    {
      title: "Sembako Gratis dan Santunan Terhadap Dhuafa",
      desc: "Tersedia paket sembako gratis dan juga rutin melaksanakan kegiatan santunan terhadap dhuafa.",
      img: "kegiatan-two.png",
    },
    {
      title: "Pendidikan dan Pelatihan Kewirausahaan",
      desc: "Masjid rutin membina jama’ah di segala usia agar memiliki keterampilan dan minat belajar yang tinggi demi masa depan yang cerah.",
      img: "kegiatan-three.png",
    },
  ];

  return (
    <section
      id="kegiatan"
      className="mt-[145px] flex flex-col items-center bg-primary w-full lg:max-w-screen-xl mx-auto rounded-none lg:rounded-xl py-16 px-3 lg:px-28"
    >
      <div className="section-title text-white">Kegiatan</div>
      <h2 className="text-white max-w-2xl text-center">
        Berbagai Kegiatan Menarik Yang Tersedia di Masjid
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 lg:mt-10 gap-4 lg:gap-7">
        {items.map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-[10px]">
            <h3 className="text-[26px] font-extrabold leading-7 w-4/5">
              {item.title}
            </h3>
            <p className="text-sm font-normal mb-7 mt-3">{item.desc}</p>
            <div className="w-full">
              <Image
                src={`/images/${item.img}`}
                alt={item.title}
                layout="responsive"
                width={0}
                height={0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
