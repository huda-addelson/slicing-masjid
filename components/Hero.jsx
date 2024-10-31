import React from "react";
import ButtonBase from "./base/ButtonBase";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="min-h-screen h-full w-full bg-[url('/images/hero-image.png')] bg-cover bg-no-repeat bg-center relative flex items-center justify-center px-3 md:px-0"
    >
      <div className="bg-primary absolute top-0 bottom-0 w-full opacity-90 z-10 mix-blend-multiply" />
      <div className="z-20 flex flex-col items-center text-center text-white">
        <h2 className="w-full lg:max-w-2xl">
          Temukan kedamaian melalui dekat dengan Tuhan
        </h2>
        <p className="w-full lg:max-w-[642px] text-base lg:text-lg mt-[30px] mb-10">
          Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi
          tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan
          perekonomian, atau tempat apapun yang berkaitan dengan keumatan.
        </p>
        <div className="flex gap-3">
          <ButtonBase variant="outlined">Baca Selengkapnya</ButtonBase>
          <ButtonBase>Hubungi Kami</ButtonBase>
        </div>
      </div>
    </section>
  );
};

export default Hero;
