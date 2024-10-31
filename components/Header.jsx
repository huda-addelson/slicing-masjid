"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const links = [
    {
      title: "Beranda",
      to: "#beranda",
    },
    {
      title: "Fitur",
      to: "#fitur",
    },
    {
      title: "Kegiatan",
      to: "#kegiatan",
    },
    {
      title: "Foto",
      to: "#foto",
    },
    {
      title: "Lokasi",
      to: "#lokasi",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Atau window.pageYOffset
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 z-30 left-0 right-0 transition-all duration-200 ${
        scrollPosition > 250
          ? "bg-primary py-5 shadow-xl"
          : "bg-transparent py-12"
      }`}
    >
      <nav
        className={` max-w-screen-xl mx-auto flex justify-between items-center `}
      >
        <div>
          <Image src="/images/logo.svg" width={207} height={0} alt="logo" />
        </div>
        <div className="flex text-white space-x-12 text-lg font-normal">
          {links.map((link, i) => (
            <Link href={link.to} key={i}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Header;
