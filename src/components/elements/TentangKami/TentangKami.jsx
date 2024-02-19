"use client";
import maskotSatu from "../../../../public/assets/img/about/tentang-maskot-1.jpg";
import maskotDua from "../../../../public/assets/img/about/tentang-maskot-2.jpg";
import Image from "next/image";
import Button from "../utils/Button";
import { motion } from "framer-motion";

const TenatangKami = () => {
  return (
    <section id="about" className="pt-24">
      <div className="md:container md:mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
          <div className="flex gap-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 200, damping: 30 },
              }}
              className="xl:w-[24rem] lg:w-[20rem]"
            >
              <div className="">
                <Image
                  src={maskotSatu}
                  className="xl:h-[35rem] xl:w-[25rem] lg:h-[25rem] h-60 object-cover"
                  width={700}
                  height={700}
                  alt="maskot"
                />
              </div>
              <div className=" flex flex-col gap-4 lg:p-6 p-3 bg-primary text-white text-xl">
                <h1 className="font-bold xl:text-2xl lg:text-xl text-lg">
                  Siapa Kita?
                </h1>
                <h3 className="xl:text-base lg:text-sm text-xs">
                  Kita merupakan salah satu jurusan yang ada di SMK Negeri 1
                  Bangsri yang mendalami bidang pemasaran
                </h3>
              </div>
            </motion.div>
            <div className="xl:w-[24rem] lg:w-[20rem]">
              <div className=" flex flex-col gap-4 md:p-6 p-3 bg-primary text-white text-xl">
                <h1 className="font-bold xl:text-2xl lg:text-xl text-lg">
                  Apa yang kita Pelajari?
                </h1>
                <h3 className="xl:text-base lg:text-sm text-xs">
                  Di Jurusan Pemasaran SMKN 1 Bangsri, kamu tidak hanya belajar
                  teori, tapi juga mempraktikkan berbagai strategi bisnis!
                </h3>
              </div>
              <div className="">
                <Image
                  src={maskotDua}
                  className="xl:h-[35rem] xl:w-[25rem] lg:h-[25rem] h-60 object-cover"
                  width={700}
                  height={700}
                  alt="maskot"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[25rem] lg:w-[20rem] flex flex-col lg:gap-10 gap-3 p-2">
            <h3 className="md:text-3xl text-2xl text-primary font-bold">
              Tentang Kami
            </h3>
            <p className="md:text-base text-sm">
              Jurusan Pemasaran SMKN 1 Bangsri bukan sekadar tempat belajar jual
              beli. Di sini, kamu akan menjelajahi seni pemasaran dan menjadi
              Marketing Master masa depan!
            </p>
            <p className="md:text-base text-sm">
              Kuasai strategi kreatif dan inovatif: tata letak toko memikat,
              formula harga tepat, strategi keuangan cerdas, dan pemasaran
              digital kekinian.
            </p>
            <Button text="Lihat Selengkapnya" link="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenatangKami;
