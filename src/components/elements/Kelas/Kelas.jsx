import Image from "next/image";
import Link from "next/link";

const Kelas = () => {
  return (
    <section id="kelas" className="md:container md:mx-auto pt-24">
      <div className="md:grid md:mx-10 px-4 md:grid-cols-2 flex flex-col-reverse gap-5 items-center">
        <div className="">
          <div className="grid grid-cols-2 gap-3">
            <Link
              className="bg-primary block md:h-20 md:w-[16rem] h-16 w-48 rounded-lg text-white"
              href=""
            >
              <h3 className="flex justify-center items-center h-full">
                X PM 1
              </h3>
            </Link>
            <Link
              className="bg-primary block md:h-20 md:w-[16rem] h-16 w-48 rounded-lg text-white"
              href=""
            >
              <h3 className="flex justify-center items-center h-full">
                X PM 1
              </h3>
            </Link>
            <Link
              className="bg-primary block md:h-20 md:w-[16rem] h-16 w-48 rounded-lg text-white"
              href=""
            >
              <h3 className="flex justify-center items-center h-full">
                X PM 1
              </h3>
            </Link>
            <Link
              className="bg-primary block md:h-20 md:w-[16rem] h-16 w-48 rounded-lg text-white"
              href=""
            >
              <h3 className="flex justify-center items-center h-full">
                X PM 1
              </h3>
            </Link>
            <Link
              className="bg-primary block md:h-20 md:w-[16rem] h-16 w-48 rounded-lg text-white"
              href=""
            >
              <h3 className="flex justify-center items-center h-full">
                X PM 1
              </h3>
            </Link>
            <Link
              className="bg-primary block md:h-20 md:w-[16rem] h-16 w-48 rounded-lg text-white"
              href=""
            >
              <h3 className="flex justify-center items-center h-full">
                X PM 1
              </h3>
            </Link>
          </div>
        </div>
        <div className="h-full">
          <div className="">
            <h3 className="md:text-3xl text-2xl font-bold text-primary">
              Kelas
            </h3>
            <p className="mb-5 md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aliquid fuga doloremque quo, reiciendis commodi?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kelas;
