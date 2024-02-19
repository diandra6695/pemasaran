"use client";
import Image from "next/image";
import Link from "next/link";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";
import maskotDua from "../../../../public/assets/img/hero/maskot-2.JPG";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen lg:mt-12 lg:p-0">
      <div className="flex flex-col lg:flex-row items-center">
        <motion.div
          //animasi dari kiri ke kanan dengan opacity dan easy ease
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 30 },
          }}
          className="bg-primary lg:w-7/12 md:h-screen h-[60rem] text-white"
        >
          <div className="lg:p-24 xl:p-32 px-4 h-full flex flex-col lg:gap-10 gap-5 justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
              }}
              className="border-l-2"
            >
              <h3 className="lg:text-3xl text-xl pl-2 font-bold ">Pemasaran</h3>
              <p className="pl-2 lg:text-base text-sm">SMK Negeri 1 Bangsri</p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
              }}
            >
              <h3 className="scroll-m-20 lg:text-4xl text-3xl lg:font-bold font-bold tracking-tight">
                Kuasai Teknik Pemasaran Modern di SMKN 1 Bangsri
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.4, ease: "easeInOut" },
              }}
              className="xl:text-base text-sm"
            >
              <p>
                Mbekali kamu dengan seni berjualan. Pelajari cara menata toko
                yang menarik, menentukan harga yang tepat, dan mengelola
                keuangan dengan cerdas. Raih masa depanmu sebagai pengusaha
                sukses bersama kami!
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              }}
              className="button lg:mt-5 mt-3 mb-3"
            >
              <Link
                href="#about"
                className="border lg:px-8 lg:py-4 px-6 py-3 lg:text-base text-sm rounded-md"
              >
                Selengkapnya
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 1000 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 200, damping: 30 },
              }}
              className="lg:hidden flex items-center gap-4"
            >
              <div className="gambar lg:-m-16">
                <Image
                  className="w-56 h-96 object-cover pointer-events-none"
                  width={1000}
                  height={1000}
                  src={maskotSatu}
                  alt="hero"
                />
              </div>
              <div className="gambar ">
                <Image
                  className="w-44 h-96 object-cover pointer-events-none"
                  width={1000}
                  height={1000}
                  src={maskotDua}
                  alt="hero"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 200, damping: 30 },
          }}
          className="lg:flex gap-20 items-center hidden"
        >
          <div className="gambar lg:-m-16">
            <Image
              className="lg:h-[30rem] lg:w-[16rem] w-56 h-96 object-cover"
              width={1000}
              height={1000}
              src={maskotSatu}
              alt="hero"
            />
          </div>
          <div className="gambar ">
            <Image
              className="h-[30rem] w-[12rem] object-cover"
              width={1000}
              height={1000}
              src={maskotDua}
              alt="hero"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
