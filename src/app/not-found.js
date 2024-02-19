"use client";
import Button from "@/components/elements/utils/Button";
import { SmileyXEyes } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto min-h-screen w-full flex flex-col justify-center items-center">
      <div className="text-primary flex flex-col justify-center items-center text-center gap-4">
        <div>
          <h2 className="flex justify-center">
            <SmileyXEyes size={70} weight="fill" />
          </h2>
          <h2 className="text-3xl font-bold">
            Upss, 404 Halaman Nggak Ketemu.
          </h2>
        </div>
        <p className="max-w-lg">
          Santai dulu ga sih, Halaman yang elo cari kayaknya lagi ngilang entah
          ke mana. Mungkin lagi main petak umpet sama server.
        </p>
        <Button text="Kembali ke Beranda" link="/" />
      </div>
    </div>
  );
}
