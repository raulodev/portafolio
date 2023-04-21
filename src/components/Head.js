import Head from "next/head";

export const CustomHead = ({ title = "Raúl Cobiellas" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <meta
        name="description"
        content="Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades."
      />

      <meta property="og:url" content="https://raulcobiellas.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
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
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Un desarrollador full-stack que busca constantemente nuevos retos y oportunidades."
      />
      <meta
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/76708845?v=4?s=100"
      />
    </Head>
  );
};
