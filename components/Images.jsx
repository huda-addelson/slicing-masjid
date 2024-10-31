// import Image from "next/image";
// import Image from "next/image";
"use client";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Images = () => {
  const items = [
    "foto-6.jpg",
    "foto-2.png",
    "foto-7.jpg",
    "foto-1.jpg",
    "foto-4.jpg",
    "foto-5.jpg",
    "foto-3.jpg",
    // "foto-8.jpeg",
  ];

  return (
    <section id="foto" className="mt-[145px] flex flex-col items-center">
      <div className="section-title text-primary">Foto</div>
      <h2 className=" max-w-2xl text-center mb-5">
        Menjelajahi Keindahan Masjid Dari Berbagai Sisi
      </h2>
      <div className="max-w-screen-lg w-full">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px" columnsCount={4}>
            {items.map((item, index) => (
              <div className="w-full px-3 lg:px-0">
                <img
                  src={`/images/${item}`}
                  alt={item}
                  key={index}
                  className="w-full object-cover rounded-md lg:rounded-xl"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            {items.map((item, index) => (
              <div key={index}>
                <img
                  src={`/images/${item}`}
                  className="h-auto max-w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="columns-1 sm:columns-2 lg:columns-4 gap-1">
          {items.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                src={`/images/${item}`}
                className="w-full object-cover rounded-lg p-1"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Images;
