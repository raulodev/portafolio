import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { CustomHead } from "@/components/Head";
import { Aside } from "@/components/Aside";

function Home() {
  return (
    <>
      <CustomHead title="Sobre Mi" />
      <main className="flex min-h-screen pb-20 sm:pb-0 bg-zinc-800 selection:bg-yellow-400 selection:text-white">
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
              <div className="lg:text-lg">
                Nací en Cuba y crecí en Holguín donde descubrí mi pasión por la tecnología y la
                programación. En mi tiempo libre, disfruto de la lectura, el aprendizaje y la
                experimentación con nuevas tecnologías. Siempre estoy buscando nuevas formas de
                mejorar mis habilidades y de aprender más sobre el mundo de la programación.
              </div>
              <div className="text-2xl font-bold">Qué hago ?</div>
              <div className="font-semibold uppercase">Automatización</div>
              <div className="lg:text-lg">
                <ul className="space-y-2 list-disc list-outside">
                  <li>
                    Procesamiento de datos: Puedo automatizar el procesamiento de grandes cantidades
                    de datos, como archivos CSV, Excel, JSON, XML, y otros formatos.
                  </li>
                  <li>
                    Automatización de tareas repetitivas: Puedo crear scripts que automatizan tareas
                    repetitivas, como descargar archivos de un sitio web, enviar correos
                    electrónicos, actualizar bases de datos, entre otras tareas.
                  </li>
                  <li>
                    Creación de bots: Puedo crear bots para automatizar tareas en redes sociales,
                    como publicar contenido, responder a mensajes, seguir o dejar de seguir a otros
                    usuarios, entre otras tareas.
                  </li>
                  <li>
                    Web scraping: Puedo automatizar el proceso de recopilar datos de páginas web,
                    utilizando librerías como Beautiful Soup y Selenium.
                  </li>
                </ul>
              </div>
              <div className="font-semibold uppercase">Desarrollo web backend</div>
              <ul className="space-y-2 list-disc list-outside">
                <li>
                  Creación de aplicaciones web: Puedo utilizar frameworks web como Django y Flask
                  para crear aplicaciones web completas utilizando Python.
                </li>
                <li>
                  Desarrollo de APIs: Puedo crear APIs utilizando Python y frameworks como Flask y
                  FastAPI para crear y exponer servicios web.
                </li>
                <li>
                  Integración con bases de datos: Puedo utilizar librerías de bases de datos como
                  SQLAlchemy y Django ORM para trabajar con bases de datos en aplicaciones web.
                </li>
              </ul>
              <div className="font-semibold uppercase">Desarrollo web frontend</div>
              <ul className="space-y-2 list-disc list-outside">
                <li>
                  Creación de componentes: React se basa en la creación de componentes reutilizables
                  que se pueden utilizar en diferentes partes de una aplicación web. Como
                  programador de React, puedo crear y personalizar componentes para diferentes
                  necesidades.
                </li>
                <li>
                  Desarrollo de aplicaciones web: React se utiliza ampliamente en el desarrollo de
                  aplicaciones web, permitiendo a los desarrolladores crear aplicaciones web de una
                  sola página (SPA) y aplicaciones web progresivas (PWA).
                </li>
                <li>
                  Integración con otras librerías y frameworks: React se puede integrar fácilmente
                  con otras librerías y frameworks de JavaScript, como Next.js, lo que me permite
                  crear aplicaciones más complejas y escalables.
                </li>
              </ul>
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
