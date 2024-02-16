"use client";
import Image from "next/image";
import logoPemasaran from "../../../../public/assets/img/logoPemasaran.svg";
import Link from "next/link";
import { List } from "@phosphor-icons/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="w-screen lg:px-20 px-2 fixed z-10 translate-y top-0 bg-white">
      <div className="flex justify-between lg:p-5 p-4 items-center">
        <Link href={"/"} className="logo">
          <Image
            width={150}
            height={150}
            className="lg:w-32 w-28"
            src={logoPemasaran}
            alt="logo"
          />
        </Link>
        <div className="hamburger lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <List size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="border-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col text-end justify-center gap-7 text-sm">
                <li>
                  <Link href={"/"}>Beranda</Link>
                </li>
                <li>
                  <Link href={"#about"}>Tentang kami</Link>
                </li>
                <li>
                  <Link href={"#kegiatan"}>Kegiatan</Link>
                </li>
                <li>
                  <Link href={"#fasilitas"}>Fasilitas</Link>
                </li>
                <li>
                  <Link href={"#guru"}>Guru</Link>
                </li>
                <li>
                  <Link href={"#testimoni"}>Testimoni</Link>
                </li>
                <li>
                  <Link href={"#kontak"}>Kontak</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <div className="list hidden lg:block">
          <ul className="flex justify-center gap-7 text-sm">
            <li>
              <Link href={"/"}>Beranda</Link>
            </li>
            <li>
              <Link href={"/#about"}>Tentang kami</Link>
            </li>
            <li>
              <Link href={"/#kegiatan"}>Kegiatan</Link>
            </li>
            <li>
              <Link href={"/#fasilitas"}>Fasilitas</Link>
            </li>
            <li>
              <Link href={"/#guru"}>Guru</Link>
            </li>
            <li>
              <Link href={"/#testimoni"}>Testimoni</Link>
            </li>
            <li>
              <Link href={"/#kontak"}>Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
