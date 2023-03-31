import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Head>
        <title>Sobre mi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen pb-20 select-none sm:pb-0 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="hidden xl:block fixed h-screen w-[16.7%] bg-yellow-500">
          <div className="bg-zinc-400 w-full h-[30%]">
            <Image alt="me" className="w-full h-full" src="images/me.svg" width={0} height={0} />
          </div>
          <div className="flex justify-center items-center h-[70%] w-full">
            <div className="space-y-0.5 flex flex-col justify-center items-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="text-lg font-extrabold uppercase">
                <Link href="/">Home</Link>
              </div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="text-lg font-extrabold text-white uppercase font-mediun">
                <Link href="/about">Sobre mi</Link>
              </div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="font-extrabold uppercase ">
                <Link href="/resume">Resumen</Link>
              </div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="font-extrabold uppercase ">
                <Link href="/portfolio">Portafolio</Link>
              </div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="font-extrabold uppercase ">
                <Link href="/testimonials">Testimonios</Link>
              </div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="font-extrabold uppercase ">
                <Link href="/contact">Contacto</Link>
              </div>
              <div className="w-0.5 h-4 bg-black rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center xl:ml-[16.7%] items-start min-h-screen w-full xl:w-[77.3%]">
          <div className="w-full p-10 space-y-5">
            <div className="w-full px-6 py-2 text-center border border-black border-dashed">
              <div className="text-4xl font-black uppercase lg:text-8xl">Sobre mi</div>
            </div>
            <div className="p-3 space-y-5">
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
                  <div className="flex flex-col w-full px-4 border-yellow-500 border-dashed md:border-r h-1/2 md:h-full md:w-1/2">
                    <div className="border-b flex justify-center items-center border-dashed border-yellow-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-yellow-500">+4</h1>
                        <p className="text-lg text-center text-white uppercase font-mediun">
                          años de experiencia
                        </p>
                      </div>
                    </div>
                    <div className="border-y md:border-b-0 md:border-t flex justify-center items-center border-dashed border-yellow-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-yellow-500">+20</h1>
                        <p className="text-lg text-center text-white uppercase font-mediun">
                          Tecnologías y frameworks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full px-4 border-yellow-500 border-dashed md:border-l h-1/2 md:h-full md:w-1/2">
                    <div className="border-y md:border-t-0 md:border-b flex justify-center items-center border-dashed border-yellow-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-yellow-500">+10</h1>
                        <p className="text-lg text-center text-white uppercase font-mediun">
                          proyectos
                        </p>
                      </div>
                    </div>
                    <div className="border-t flex justify-center items-center border-dashed border-yellow-500 h-[50%]">
                      <div>
                        <h1 className="text-4xl font-semibold text-center text-yellow-500">+140</h1>
                        <p className="text-lg text-center text-white uppercase font-mediun">
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
        <div className="hidden lg:flex min-h-screen justify-center items-center w-[7%]">
          <div className="fixed flex flex-col items-center justify-center px-2 py-5 space-y-6 bg-yellow-500 rounded-full right-7 top-1/4">
            <Link href="/">
              <motion.svg
                whileHover={{ scale: 1.25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </motion.svg>
            </Link>

            <Link href="/about">
              <motion.svg
                whileHover={{ scale: 1.25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>

            <Link href="/resume">
              <motion.svg
                whileHover={{ scale: 1.25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </motion.svg>
            </Link>

            <Link href="/portfolio">
              <motion.svg
                whileHover={{ scale: 1.25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>

            <Link href="/testimonials">
              <motion.svg
                whileHover={{ scale: 1.25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>

            <Link href="/contact">
              <motion.svg
                whileHover={{ scale: 1.25 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>
          </div>
        </div>
        <div className="fixed flex justify-center px-5 py-2 space-x-6 bg-yellow-500 rounded-full sm:space-x-20 lg:hidden left-8 right-8 sm:left-14 sm:right-14 bottom-4">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 "
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </Link>

          <Link href="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link href="/resume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
          </Link>

          <Link href="/portfolio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link href="/testimonials">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link href="/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
