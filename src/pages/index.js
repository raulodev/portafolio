import Link from "next/link";
import Image from "next/image";
import { CustomHead } from "@/components/Head";
import { NavDesktop } from "@/components/NavDesktop";

export default function Home() {
  return (
    <>
      <CustomHead />
      <main className="min-h-screen selection:bg-amber-400 selection:text-white">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-16 text-center xl:items-start xl:min-h-min xl:w-3/4 bg-zinc-800 bg-opacity-80 xl:bg-transparent xl:space-y-5 xl:text-left sm:w-2/3 xl:3/4 ">
              <div className="font-bold text-white uppercase text-7xl">
                Yo soy <span className="text-amber-400">Raul</span>
              </div>
              <div className="px-2 py-1 bg-amber-400 w-max">
                <p className="text-xl font-black uppercase text-zinc-900">Desarrollador Web</p>
              </div>
              <div>
                <p className="text-lg text-white">
                  Busco constantemente nuevos retos y oportunidades
                </p>
              </div>
              <div className="mt-5">
                <button className="px-5 py-3 text-xl font-bold uppercase transition-all ease-in-out rounded-full shadow-lg text-zinc-200 bg-amber-400 hover:bg-amber-500 hover:shadow w-max">
                  <Link href="/about">Sobre mi</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="items-center justify-end hidden h-screen bg-zinc-400 xl:flex">
            <Image alt="me" className="w-full h-full" src="images/me.svg" width={0} height={0} />
          </div>
        </div>
        <NavDesktop home={true} />
      </main>
    </>
  );
}
