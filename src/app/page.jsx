import Fasilitas from "@/components/elements/Fasilitas/Fasilitas";
import Footer from "@/components/elements/Footer/Footer";
import Guru from "@/components/elements/Guru/Guru";
import Hero from "@/components/elements/Hero/Hero";
import Kegiatan from "@/components/elements/Kegiatan/Kegiatan";
import Kelas from "@/components/elements/Kelas/Kelas";
import TenatangKami from "@/components/elements/TentangKami/TentangKami";
import Testimonial from "@/components/elements/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TenatangKami />
      <Kegiatan />
      <Fasilitas />
      <Guru />
      <Testimonial />
    </main>
  );
}
