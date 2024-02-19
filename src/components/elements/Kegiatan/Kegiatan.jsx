import Button from "../utils/Button";
import maskotSatu from "../../../../public/assets/img/kegiatan/kegiatan-maskot-1.jpg";
import maskotDua from "../../../../public/assets/img/kegiatan/kegiatan-maskot-2.jpg";
import maskotTiga from "../../../../public/assets/img/kegiatan/kegiatan-maskot-3.jpg";
import Image from "next/image";

const Kegiatan = () => {
  return (
    <section id="kegiatan" className="md:container md:mx-auto px-4 pt-24">
      <div className="lg:grid flex flex-col lg:grid-cols-3 grid-flow-col md:mx-10 md:p-0 gap-10">
        <div className="col-span-1 flex flex-col gap-7 justify-center">
          <h3 className="md:text-3xl text-2xl text-primary font-bold">
            Kegiatan Apa yang Kita Lakukan?
          </h3>
          <p className="md:text-base text-sm">
            Kamu akan terjun langsung ke dunia nyata dengan praktik berjualan di
            toko dan kantin sekolah. Kunjungi berbagai toko ternama untuk
            mempelajari strategi dan praktik terbaik dari para profesional.
            Tempa jiwa entrepreneur dan kemandirian dengan berjualan online di
            aplikasi belanja populer.
          </p>
          <p className="md:text-base text-sm">
            Dapatkan pengalaman berharga, bangun mental dan kemampuan berjualan
            yang handal, dan raih masa depan gemilang di dunia marketing!
          </p>
          <div className="hidden">
            <Button text="Lihat Selengkapnya" link="/" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-end gap-5 ">
          <div className="flex md:gap-8 gap-3">
            <div className="">
              <Image
                className="md:w-[16rem] md:h-[10rem] w-56 h-36 object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="md:text-base text-sm">
                kami berlatih berjualan di bisnis center sekolah dan kantin
                sekolah.
              </p>
            </div>
          </div>
          <div className="flex md:gap-8 gap-3">
            <div className="">
              <Image
                className="md:w-[16rem] md:h-[10rem] w-56 h-36 object-cover"
                src={maskotDua}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Kunjungan Industri</h3>
              <p className="md:text-base text-sm">
                kami mengunjungi toko di luar sekolah setiap beberapa bulan.
              </p>
            </div>
          </div>
          <div className="flex md:gap-8 gap-3">
            <div className="">
              <Image
                className="md:w-[16rem] md:h-[10rem] w-56 h-36 object-cover"
                src={maskotTiga}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Bisnis Online</h3>
              <p className="md:text-base text-sm">
                kami melakukan penjualan online di platform shop
              </p>
            </div>
          </div>
        </div>
        <div className="hidden">
          <Button text="Lihat Selengkapnya" link="/" />
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
