import Image from "next/image";
import React from "react";

const Feature = () => {
  const feature = [
    {
      name: "fitur-one.svg",
      desc: "Imam Hafidz Qur’an dan Menguasai Berbagai Nagham",
    },
    {
      name: "fitur-two.svg",
      desc: "Masjid Dilengkapi AC, Memastikan Ruangan Sejuk",
    },
    {
      name: "fitur-three.svg",
      desc: "Masjid Terbuka 24 Jam dengan Jaminan Keamanan",
    },
    {
      name: "fitur-four.svg",
      desc: "Menggunakan Karpet Terbaik yang Lembut Dipakai Sujud",
    },
  ];
  return (
    <section
      id="fitur"
      className="mt-[145px] flex flex-col items-center px-3 lg:px-0"
    >
      <div className="section-title text-primary">fitur</div>
      <h2 className="max-w-xl text-center">
        Semua Kenyamanan dalam Satu Masjid
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 gap-7">
        {feature.map((item, index) => (
          <div key={index} className="flex items-center flex-col">
            <Image
              src={`/images/${item.name}`}
              width={130}
              height={130}
              alt={item.name}
            />
            <p className="w-full lg:max-w-[220px] text-center mt-[22px] font-medium text-sm lg:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
