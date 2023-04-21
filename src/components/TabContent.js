import Image from "next/image";
import { motion } from "framer-motion";

import Translate from "../../public/proyectos_images/translate.jpg";
import Hunti from "../../public/proyectos_images/hunti.jpg";
import Portafolio from "../../public/proyectos_images/portafolio.png";
import S3link from "../../public/proyectos_images/s3link.png";
import fflow from "../../public/proyectos_images/Forward.png";
import calcuserver from "../../public/proyectos_images/calcuserver.png";

export function All() {
  return (
    <>
      <div className="grid gap-4">
        <Web />
        <Script />
      </div>
    </>
  );
}
export function Web() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* <Card
          image={Portafolio}
          repo_link="https://github.com/raulodev/portafolio"
          name="Portafolio"
        /> */}
        <Card
          image={S3link}
          repo_link="https://github.com/raulodev/selink"
          name="S3link"
          description="Almacén de enlaces"
        />
        <Card
          image={calcuserver}
          repo_link="https://github.com/raulodev/calcuserver"
          name="Calcuserver"
          description="Calcula el precio de los vps de ETECSA"
        />
      </div>
    </>
  );
}
export function Script() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card
          image={Hunti}
          repo_link="https://github.com/raulodev/hunti"
          name="Hunti"
          description="Aplicación para crear screenshot"
        />
        <Card
          image={Translate}
          repo_link="https://github.com/raulodev/translatebot-tg"
          name="Translate"
          description="Aplicación de traducción"
        />
        <Card
          image={fflow}
          repo_link="https://github.com/raulodev/ForwardFlow"
          name="Forward Flow"
          description="Programa el reenvío de mensajes"
        />
      </div>
    </>
  );
}

const Card = ({ image, repo_link, name, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="relative overflow-hidden rounded-sm h-52 hover:shadow-lg"
    >
      <Image className="object-cover w-full h-full" src={image} alt="" width={0} height={0} />
      <div className="absolute inset-0 flex items-center justify-center transition-all opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-80 hover:backdrop-blur ">
        <a className="flex" href={repo_link} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center">
            <p className="flex gap-2 text-lg font-bold text-white">
              <Icon />
              {name}
            </p>
            <p className="text-white ">{description}</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};
