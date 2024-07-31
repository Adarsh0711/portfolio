"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1(716)-617-0186",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "adarshreddybandaru@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "187 Highgate Ave, Buffalo, NY 14215",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 bg-white text-black"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#e5e7eb] text-blue-500 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black/80">{item.title}</p>
                      <h3 className="text-xl text-black">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* image */}
          <div className="flex-1 flex items-center justify-center xl:justify-start order-2 xl:order-none">
            <Image src="/assets/work/contact_page_circular_image.png" width={500} height={500} alt="Contact Image" className="rounded-xl bg-white"/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
