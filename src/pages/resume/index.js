import Image from "next/image";

import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { CustomHead } from "@/components/Head";
import { Aside } from "@/components/Aside";

function Home() {
  return (
    <>
      <CustomHead title="Resumen" />
      <main className="flex min-h-screen pb-20 font-serif sm:pb-0 bg-zinc-800 selection:bg-green-500 selection:text-white">
        <Aside resume={true} />
        <div className="flex justify-center xl:ml-[16.7%] text-white items-start min-h-screen w-full xl:w-[77.3%]">
          <div className="w-full p-10 space-y-6">
            <div className="w-full px-6 py-2 text-center border border-white border-dashed">
              <div className="text-4xl font-black uppercase lg:text-8xl">Resumen</div>
            </div>
            <div>
              <div className="py-4 text-2xl font-bold uppercase">Cursos y certificaciones</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                  curso={"Python Core"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={"https://www.sololearn.com/Certificate/CT-NZIC83RE/png"}
                />
                <Card
                  curso={"SQL"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={"https://www.sololearn.com/Certificate/CT-P8T367SP/png"}
                />
                <Card
                  curso={"JQUERY"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={"https://www.sololearn.com/Certificate/CT-SYKEMTQZ/pdf"}
                />
                <Card
                  curso={"Responsive Web Design"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={"https://www.sololearn.com/Certificate/1162-25257133/pdf/"}
                />
                <Card
                  curso={"HTML"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={"https://www.sololearn.com/Certificate/1014-25257133/pdf/"}
                />
                <Card
                  curso={"Javascript"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={
                    "https://www.sololearn.com/certificates/course/en/25257133/1024/landscape/png"
                  }
                />
                <Card
                  curso={"Python Data Structures"}
                  logo={"sololearn.svg"}
                  empresa={"Sololearn"}
                  link={
                    "https://www.sololearn.com/certificates/course/en/25257133/1159/landscape/png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <NavDesktop resume={true} />
        <NavMobile resume={true} />
      </main>
    </>
  );
}

const Card = ({ curso, link, logo, empresa }) => {
  return (
    <div className="p-4 space-y-2 transition-shadow bg-white rounded-sm shadow-lg hover:shadow">
      <div className="px-4 py-1 font-semibold uppercase bg-green-500 rounded shadow w-max">
        {curso}
      </div>
      <div className="flex items-center gap-2 font-semibold text-zinc-800">
        <Image alt="me" className="w-10 h-10" src={`images/${logo}`} width={0} height={0} />
        <a href={link} target="_blank" rel="noopener noreferrer">
          <UrlIcon />
        </a>
        {empresa}
      </div>
    </div>
  );
};

const UrlIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

export default Home;
