import Image from "next/image";
import { motion } from "framer-motion";

import { Stars } from "@/components/Stars";
import { NavDesktop } from "@/components/NavDesktop";
import { NavMobile } from "@/components/NavMobile";
import { CustomHead } from "@/components/Head";
import { Aside } from "@/components/Aside";

function Home() {
  return (
    <>
      <CustomHead title="Testimonios" />
      <main className="flex min-h-screen  bg-zinc-800 selection:bg-green-500 selection:text-white">
        <Aside testimonials={true} />
        <div className="flex justify-center text-white xl:ml-[16.7%] items-start min-h-screen w-full xl:w-[77.3%]">
          <div className="w-full p-10 space-y-6">
            <div className="w-full px-6 py-2 text-center border border-white border-dashed">
              <div className="text-3xl font-black text-center uppercase lg:text-8xl">
                Testimonios
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card
                image="/images/user.jpg"
                name="Robert Pattinson"
                text="sustainable ROI. Dramatically underwhelm out-of-the-box paradigms vis-a-vis ethical paradigms. Objectively scale viral vortals for dynamic web-readiness."
              />
              <Card
                image="/images/user.jpg"
                name="Robert Pattinson"
                text="sustainable ROI. Dramatically underwhelm out-of-the-box paradigms vis-a-vis ethical paradigms. Objectively scale viral vortals for dynamic web-readiness."
              />
              <Card
                image="/images/user.jpg"
                name="Robert Pattinson"
                text="sustainable ROI. Dramatically underwhelm out-of-the-box paradigms vis-a-vis ethical paradigms. Objectively scale viral vortals for dynamic web-readiness."
              />
              <Card
                image="/images/user.jpg"
                name="Robert Pattinson"
                text="sustainable ROI. Dramatically underwhelm out-of-the-box paradigms vis-a-vis ethical paradigms. Objectively scale viral vortals for dynamic web-readiness."
              />
              <Card
                image="/images/user.jpg"
                name="Robert Pattinson"
                text="sustainable ROI. Dramatically underwhelm out-of-the-box paradigms vis-a-vis ethical paradigms. Objectively scale viral vortals for dynamic web-readiness."
              />
            </div>
          </div>
        </div>
        <NavDesktop testimonials={true} />
        <NavMobile testimonials={true} />
      </main>
    </>
  );
}

const Card = ({ name, text, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="max-w-md px-8 py-4 bg-white rounded-sm shadow-lg"
    >
      <div>
        <div className="flex items-center gap-4">
          <Image
            className="object-cover w-20 h-20 rounded-full"
            src={image}
            alt="image"
            width={1200}
            height={600}
          />
          <h2 className="text-xl font-semibold text-green-500">{name}</h2>
        </div>
        <p className="mt-2 text-zinc-800">{text}</p>
      </div>
      <div className="flex justify-end mt-4">
        <Stars />
      </div>
    </motion.div>
  );
};

export default Home;
