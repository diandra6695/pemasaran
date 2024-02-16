import Image from "next/image";
import logoPemasaran from "../../../public/assets/img/logoPemasaran.svg";
import rizki from "../../../public/assets/img/guru/ShaifurRizqiZein.png";

const About = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="mt-28 flex flex-col gap-8  md:mx-10 md:p-0 px-4">
        <div className="flex justify-center mb-3">
          <Image
            className="md:w-72 w-48"
            width={250}
            height={250}
            src={logoPemasaran}
            alt="logo"
          />
        </div>
        <div className="kajur flex flex-col gap-5">
          <h3 className="font-bold md:text-2xl text-xl text-primary">
            Kepala Kejuruan Pemasaran
          </h3>
          <div className="flex gap-5">
            <Image
              width={200}
              className="rounded-lg md:w-72 w-48"
              height={200}
              src={rizki}
              alt="kajur"
            />

            <div className="text-lg text-primary">
              <h3>
                <span className="font-bold">Nama :</span> Shaifur Rizqi Zein,
                S.Pd
              </h3>
              <h3>
                <span className="font-bold">NIP :</span> 19900309 202321 1 006
              </h3>
              <h3>
                <span className="font-bold">Jabatan :</span> Kepala Jurusan
                Pemasaran
              </h3>
            </div>
          </div>
        </div>
        <h3 className="font-bold md:text-2xl text-primary text-xl">
          Visi - Misi Kejuruan Pemasaran
        </h3>
        <div className="visi">
          <h3 className="font-bold md:text-xl text-lg ">Visi</h3>
          <p>Menciptakan generasi yang cerdas, kompeten dan berakhlak mulia</p>
        </div>
        <div className="misi">
          <h3 className="font-bold md:text-xl text-lg ">Misi</h3>
          <ul className="list-disc list-inside">
            {/* misi jurusan pemasaran */}
            <li>Lulus 100%</li>
            <li>
              Menjalin kerjasama dengan Dunia Usaha / Dunia Industri /
              Stakeholder
            </li>
            <li>Mewujudkan kelas bisnis</li>
            <li>Mengikuti lomba LKS tingkat provinsi</li>
            <li>Menciptakan tamatan yang siap kerja</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
