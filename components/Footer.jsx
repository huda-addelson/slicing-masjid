import Image from "next/image";
import React from "react";

const Footer = () => {
  const data = [
    {
      section: "Halaman",
      content: ["Beranda", "Blog", "Kegiatan", "Tentang", "Kontak"],
    },
    {
      section: "Kegiatan",
      content: [
        "Kajian Faqih",
        "Kajian Ibadah 4 Madzhab",
        "Santunan Dhuafa",
        "Pelatihan Kewirausahaan",
        "Belajar Ngaji",
      ],
    },
    {
      section: "Kontak",
      content: [
        "081234567890 (WA)",
        "987F1D6L (PIN BBM)",
        "087634561234 (Telegram)",
      ],
    },
  ];
  return (
    <footer className="bg-primary flex items-center justify-center px-3 lg:px-0">
      <section className="max-w-screen-xl pt-[71px] pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-0">
          <div className="lg:col-span-3">
            <div className="max-w-[70%]">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/images/logo.svg"
                alt="logo"
              />
            </div>
            <p className="text-white mt-6 mb-4 text-sm font-normal max-w-[65%]">
              Masjid ini memiliki desain arsitektur indah dan fasilitas lengkap,
              menyediakan lingkungan yang nyaman untuk ibadah dan kegiatan
              komunitas.
            </p>
          </div>
          {data.map((item, index) => {
            function layoutGrid(section) {
              switch (section) {
                case "Halaman":
                  return "lg:col-span-2";
                case "Kegiatan":
                  return "lg:col-span-3";
                default:
                  return "lg:col-span-2";
              }
            }
            return (
              <div className={layoutGrid(item.section)} key={index}>
                <h4 className="text-white font-extrabold">{item.section}</h4>
                <div className="flex flex-col text-white text-sm font-normal gap-1 lg:gap-3 mt-1 lg:mt-3">
                  {item.content.map((section, idx) => (
                    <a href="/" key={idx}>
                      {section}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 lg:mt-24 text-center text-white">
          © 2024 Masjid Al-Kandari All Rights Reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
