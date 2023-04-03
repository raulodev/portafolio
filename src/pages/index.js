import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raúl Cobiellas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades."
        />

        <meta property="og:url" content="https://raulcobiellas.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Raúl Cobiellas" />
        <meta
          property="og:description"
          content="Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/76708845?v=4?s=100"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="raulcobiellas.vercel.app" />
        <meta property="twitter:url" content="https://raulcobiellas.vercel.app/" />
        <meta name="twitter:title" content="Raúl Cobiellas" />
        <meta
          name="twitter:description"
          content="Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/76708845?v=4?s=100"
        />
      </Head>
      <main className="min-h-screen select-none">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-3/4 space-y-5 sm:w-2/3 xl:3/4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-semibold uppercase"
              >
                Hola!
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-6xl font-bold uppercase"
              >
                Soy <span className="text-yellow-500">Enrique</span>
              </motion.div>

              <div>
                <p className="text-lg">
                  Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades
                </p>
              </div>
              <div className="px-5 py-3 transition-shadow bg-yellow-500 rounded-full shadow-lg hover:shadow w-max">
                <Link className="text-xl font-bold text-white uppercase" href="/about">
                  Sobre mi
                </Link>
              </div>
            </div>
          </div>
          <div className="items-center justify-end hidden h-screen bg-zinc-400 xl:flex">
            <Image alt="me" className="w-full h-full" src="images/me.svg" width={0} height={0} />
            <div className="fixed flex flex-col items-center justify-center px-2 py-5 space-y-6 bg-yellow-500 rounded-full right-7 top-1/4 ">
              <Link href="/">
                <motion.svg
                  whileHover={{ scale: 1.25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
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
                  className="w-6 h-6"
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
        </div>
      </main>
    </>
  );
}
