import { CustomHead } from "@/components/Head";
import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { Aside } from "@/components/Aside";

function Home() {
  return (
    <>
      <CustomHead title="Contacto" />
      <main className="flex min-h-screen pb-20  sm:pb-0 bg-zinc-800 selection:bg-green-500 selection:text-white">
        <Aside contact={true} />
        <div className="flex justify-center text-white xl:ml-[16.7%] items-start min-h-screen w-full xl:w-[77.3%]">
          <div className="w-full p-10 space-y-6">
            <div className="w-full px-6 py-2 text-center border border-white border-dashed">
              <div className="text-4xl font-black uppercase lg:text-8xl">Contacto</div>
            </div>
            <div className="space-y-5">
              <div className="text-2xl lg:text-4xl">
                Siéntete <span className="font-bold">libre</span> de contactarme!
              </div>
              <div className="lg:text-lg">
                Soy consciente de que la comunicación es importante, pero puede haber momentos en
                los que tarde más en responder o esté ocupado.
              </div>
              <div className="grid grid-cols-1 py-12 space-y-12 sm:space-y-0 sm:grid-cols-2">
                <a
                  href="tel:+5356938300"
                  className="py-4 transition-colors ease-in-out rounded-sm hover:bg-zinc-700"
                >
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-28 h-28"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>+5356938300</div>
                  </div>
                </a>
                <a
                  href="mailto:raulcobiellas@gmail.com"
                  className="py-4 transition-colors ease-in-out rounded-sm hover:bg-zinc-700"
                >
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-28 h-28"
                      >
                        <path
                          strokeLinecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </div>
                    <div>raulcobiellas@gmail.com</div>
                  </div>
                </a>
              </div>
              <div className="text-3xl font-bold text-center uppercase">
                Gracias por tu paciencia!
              </div>
            </div>
          </div>
        </div>
        <NavDesktop contact={true} />
        <NavMobile contact={true} />
      </main>
    </>
  );
}

export default Home;
