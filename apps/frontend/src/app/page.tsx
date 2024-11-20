import LogoHome from "@/components/template/LogoHome";
import Link from "next/link";


export default function Home() {

  return (
    <div className="
    h-screen flex flex-col justify-center items-center bg-[url('/background-elementos.svg')]
    bg-cover select-none
    ">
      <div className="flex flex-col items-center">
        <LogoHome />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center">Crie e gerencie o convite do seu evente de forma rápida, fácil e sem complicações! </p>
      </div>
      <Link
        className="button blue mt-5 text-lg uppercase"
        href="/event">Crie o seu Evento</Link>
    </div>
  );
}
