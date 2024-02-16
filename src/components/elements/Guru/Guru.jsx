import Image from "next/image";
import rizki from "../../../../public/assets/img/guru/ShaifurRizqiZein.png";
import ika from "../../../../public/assets/img/guru/IkaHeniWahyuningsih.png";
import tita from "../../../../public/assets/img/guru/TitaAmelia.png";
import wahyu from "../../../../public/assets/img/guru/WahyuIriyanti.png";

const Guru = () => {
  return (
    <section id="guru" className="md:container md:mx-auto pt-24">
      <div className="md:mx-10 px-4">
        <header className="mb-10">
          <h3 className="md:text-3xl text-2xl font-bold mb-2">
            Guru Produktif Pemasaran
          </h3>
          <p className="max-w-xl md:text-base text-sm">
            Guru yang mengajar pelajaran seputar pemasaran seperti Berjualan,
            Tutorial Profit, dll.
          </p>
        </header>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="w-full flex justify-center">
            <div className="w-[20rem] h-[28rem]">
              <div className="absolute w-[20rem] h-[28rem] bg-gradient-to-t from-primary from-0% hover:from-5% transition-colors">
                {/* teks berada di bawah */}
                <div className="absolute bottom-0 text-white p-5">
                  <h3 className=" text-xl font-bold text-white">
                    Shaifur Rizqi Zein, S.Pd
                  </h3>
                </div>
              </div>
              <Image
                className="object-cover w-[20rem] h-[28rem]"
                src={rizki}
                height={350}
                width={350}
                alt="maskot-satu"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[20rem] h-[28rem]">
              <div className="absolute w-[20rem] h-[28rem] bg-gradient-to-t from-primary from-0% hover:from-5% transition-colors">
                {/* teks berada di bawah */}
                <div className="absolute bottom-0 text-white p-5">
                  <h3 className=" text-xl font-bold text-white">
                    Tita Amelia, S.Pd
                  </h3>
                </div>
              </div>
              <Image
                className="object-cover w-[20rem] h-[28rem]"
                src={tita}
                height={350}
                width={350}
                alt="maskot-satu"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[20rem] h-[28rem]">
              <div className="absolute w-[20rem] h-[28rem] bg-gradient-to-t from-primary from-0% hover:from-5% transition-colors">
                {/* teks berada di bawah */}
                <div className="absolute bottom-0 text-white p-5">
                  <h3 className=" text-xl font-bold text-white">
                    Ika Heni Wahyuningsih, S.Pd
                  </h3>
                </div>
              </div>
              <Image
                className="object-cover w-[20rem] h-[28rem]"
                src={ika}
                height={350}
                width={350}
                alt="maskot-satu"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[20rem] h-[28rem]">
              <div className="absolute w-[20rem] h-[28rem] bg-gradient-to-t from-primary from-0% hover:from-5% transition-colors">
                {/* teks berada di bawah */}
                <div className="absolute bottom-0 text-white p-5">
                  <h3 className=" text-xl font-bold text-white">
                    Wahyu Iriyanti, S.Pd
                  </h3>
                </div>
              </div>
              <Image
                className="object-cover w-[20rem] h-[28rem]"
                src={wahyu}
                height={350}
                width={350}
                alt="maskot-satu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guru;
