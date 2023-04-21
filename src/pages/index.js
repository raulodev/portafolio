import Link from "next/link";
import Image from "next/image";

import { CustomHead } from "@/components/Head";

export default function Home() {
  return (
    <>
      <CustomHead />
      <main className="min-h-screen selection:bg-green-500 selection:text-white">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className="w-3/4 space-y-5 sm:w-2/3 xl:3/4">
              <div className="text-5xl font-semibold text-white uppercase">Hola!</div>
              <div className="text-6xl font-bold text-white uppercase">
                Yo soy <span className="text-green-500 ">Raul</span>
              </div>

              <div>
                <p className="text-lg text-white">
                  Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades
                </p>
              </div>
              <div className="mt-5">
                <Link href="/about">
                  <div className="px-5 py-3 text-xl font-bold text-white uppercase transition-shadow bg-green-500 rounded-full shadow-lg hover:shadow w-max">
                    Sobre mi
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="items-center justify-end hidden h-screen bg-zinc-400 xl:flex">
            <Image alt="me" className="w-full h-full" src="images/me.svg" width={0} height={0} />
          </div>
        </div>
      </main>
    </>
  );
}
