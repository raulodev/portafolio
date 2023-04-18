import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { CustomHead } from "@/components/Head";
import { Aside } from "@/components/Aside";

function Home() {
  const exp = 4;
  const tech = 15;
  const projects = 10;
  const contrib = 140;

  return (
    <>
      <CustomHead title="Sobre Mi" />
      <main className="flex min-h-screen pb-20 font-serif sm:pb-0 bg-zinc-800 selection:bg-green-500 selection:text-white">
        <Aside about={true} />
        <div className="flex justify-center xl:ml-[16.7%] items-start min-h-screen w-full xl:w-[77.3%]">
          <div className="w-full p-10 space-y-5">
            <div className="w-full px-6 py-2 text-center border border-white border-dashed">
              <div className="text-4xl font-black text-white uppercase lg:text-8xl">Sobre mi</div>
            </div>
            <div className="p-3 space-y-5 text-white">
              <div className="text-2xl lg:text-4xl">
                Yo soy <span className="font-bold">Raúl Enrique,</span> Desarrollador de Software
              </div>
              <div className=" lg:text-lg">
                Nací en Cuba y crecí en Holguín donde descubrí mi pasión por la tecnología y la
                programación. En mi tiempo libre, disfruto de la lectura, el aprendizaje y la
                experimentación con nuevas tecnologías. Siempre estoy buscando nuevas formas de
                mejorar mis habilidades y de aprender más sobre el mundo de la programación.
              </div>
              <div className="space-y-10 lg:space-y-0 lg:space-x-10 lg:flex">
                <div className="md:flex w-full lg:w-[60%] h-96 rounded shadow   bg-gradient-to-r from-black via-zinc-900 to-black p-4">
                  <div className="flex flex-col w-full px-4 border-green-500 border-dashed md:border-r h-1/2 md:h-full md:w-1/2">
                    <div className="border-b flex justify-center items-center border-dashed border-green-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-green-500">
                          +{exp}
                        </h1>
                        <p className="text-center text-white uppercase sm:text-lg font-mediun">
                          años de experiencia
                        </p>
                      </div>
                    </div>
                    <div className="border-y md:border-b-0 md:border-t flex justify-center items-center border-dashed border-green-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-green-500">
                          +{tech}
                        </h1>
                        <p className="text-center text-white uppercase sm:text-lg font-mediun">
                          Tecnologías y frameworks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full px-4 border-green-500 border-dashed md:border-l h-1/2 md:h-full md:w-1/2">
                    <div className="border-y md:border-t-0 md:border-b flex justify-center items-center border-dashed border-green-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-green-500">
                          +{projects}
                        </h1>
                        <p className="text-center text-white uppercase sm:text-lg font-mediun">
                          proyectos
                        </p>
                      </div>
                    </div>
                    <div className="border-t flex justify-center items-center border-dashed border-green-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-green-500">
                          +{contrib}
                        </h1>
                        <p className="text-center text-white uppercase sm:text-lg font-mediun">
                          Contribuciones
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full lg:w-[40%] gap-4">
                  <div className="text-2xl font-bold">Qué hago ?</div>
                  <div className="flex w-full">
                    <div className="flex gap-3">
                      <div className="lg:w-[16rem]">
                        <div className="font-semibold uppercase">Automatización</div>
                        <div className="text-md">
                          Creación de scripts para tareas complejas automatizables o procesamientos
                          masivos de datos
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex gap-3">
                      <div className="lg:w-[16rem]">
                        <div className="font-semibold uppercase">Desarrollo web</div>
                        <div>
                          Creación de sitios web con frameworks como Django , Nextjs y Tailwindcss
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavDesktop about={true} />
        <NavMobile about={true} />
      </main>
    </>
  );
}

export default Home;
