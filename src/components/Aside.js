import Link from "next/link";
import Image from "next/image";

export const Aside = ({
  about = false,
  resume = false,
  portfolio = false,
  testimonials = false,
  contact = false,
}) => {
  return (
    <div className="hidden xl:block fixed h-screen w-[16.7%] bg-green-500">
      <div className="bg-zinc-500 w-full h-[30%]">
        <Image alt="me" className="w-full h-full" src="images/me.svg" width={0} height={0} />
      </div>
      <div className="flex justify-center items-center h-[70%] w-full">
        <div className="space-y-0.5 flex flex-col justify-center items-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <Line />
          <div className="text-lg font-extrabold uppercase">
            <Link href="/">Home</Link>
          </div>
          <Line />
          <div
            className={
              about
                ? "text-lg font-extrabold text-white uppercase font-mediun"
                : "font-extrabold uppercase "
            }
          >
            <Link href="/about">Sobre mi</Link>
          </div>
          <Line />
          <div
            className={
              resume
                ? "text-lg font-extrabold text-white uppercase font-mediun"
                : "font-extrabold uppercase "
            }
          >
            <Link href="/resume">Resumen</Link>
          </div>
          <Line />
          <div
            className={
              portfolio
                ? "text-lg font-extrabold text-white uppercase font-mediun"
                : "font-extrabold uppercase "
            }
          >
            <Link href="/portfolio">Portafolio</Link>
          </div>
          <Line />
          {/* <div
            className={
              testimonials
                ? "text-lg font-extrabold text-white uppercase font-mediun"
                : "font-extrabold uppercase "
            }
          >
            <Link href="/testimonials">Testimonios</Link>
          </div> */}
          {/* <Line /> */}
          <div
            className={
              contact
                ? "text-lg font-extrabold text-white uppercase font-mediun"
                : "font-extrabold uppercase "
            }
          >
            <Link href="/contact">Contacto</Link>
          </div>
          <Line />
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return <div className="w-0.5 h-4 bg-black "></div>;
};
