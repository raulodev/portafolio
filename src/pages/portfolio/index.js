import { useState } from "react";

import { All, Script, Web } from "@/components/TabContent";
import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { CustomHead } from "@/components/Head";
import { Aside } from "@/components/Aside";

function Home() {
  const [classTab1, setClassTab1] = useState("block");
  const [classTab2, setClassTab2] = useState("hidden");
  const [classTab3, setClassTab3] = useState("hidden");

  const buttonActive = "p-5 outline-none text-xl font-bold text-green-500 uppercase";
  const buttonNotActive = "p-5 outline-none text-xl font-bold uppercase";

  const [activeButtonTab1, setActiveButtonTab1] = useState(buttonActive);
  const [activeButtonTab2, setActiveButtonTab2] = useState(buttonNotActive);
  const [activeButtonTab3, setActiveButtonTab3] = useState(buttonNotActive);

  function handlerClickTab1() {
    setClassTab1("block");
    setActiveButtonTab1(buttonActive);
    setClassTab2("hidden");
    setActiveButtonTab2(buttonNotActive);
    setClassTab3("hidden");
    setActiveButtonTab3(buttonNotActive);
  }
  function handlerClickTab2() {
    setClassTab1("hidden");
    setActiveButtonTab1(buttonNotActive);
    setClassTab2("block");
    setActiveButtonTab2(buttonActive);
    setClassTab3("hidden");
    setActiveButtonTab3(buttonNotActive);
  }
  function handlerClickTab3() {
    setClassTab1("hidden");
    setActiveButtonTab1(buttonNotActive);
    setClassTab2("hidden");
    setActiveButtonTab2(buttonNotActive);
    setClassTab3("block");
    setActiveButtonTab3(buttonActive);
  }

  return (
    <>
      <CustomHead title="Portafolio" />
      <main className="flex min-h-screen pb-20  sm:pb-0 bg-zinc-800 selection:bg-green-500 selection:text-white">
        <Aside portfolio={true} />
        <div className="flex xl:ml-[16.7%] text-white justify-center items-start min-h-screen w-full xl:w-[77.3%]">
          <div className="w-full p-10">
            <div className="w-full px-6 py-2 text-center border border-white border-dashed">
              <div className="text-4xl font-black uppercase lg:text-8xl">Portafolio</div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <button onClick={handlerClickTab1} className={activeButtonTab1}>
                  Todo
                </button>
                <button onClick={handlerClickTab2} className={activeButtonTab2}>
                  Apps
                </button>
                <button onClick={handlerClickTab3} className={activeButtonTab3}>
                  Web
                </button>
              </div>
              <div>
                <div className={classTab1}>
                  <All />
                </div>
                <div className={classTab2}>
                  <Script />
                </div>
                <div className={classTab3}>
                  <Web />
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavDesktop portfolio={true} />
        <NavMobile portfolio={true} />
      </main>
    </>
  );
}

export default Home;
