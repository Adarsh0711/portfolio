"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const experience = {
  title: "My experience",
  description: "I'm just at the start of my career, but the learning curve has been steep and rewarding.",
  items: [
    {
      company: "MiQ Digital",
      position: "Analyst I & Intern",
      duration: "Jan 2022 - Jul 2023",
      responsibilities: [
        "Here is where I found that laughter and hard work can go hand in hand.",
        "Key contributions:",
        "Generated insightful ad campaign reports and recommendations for diverse clients spanning various industries.",
        "Built dashboards that streamlined reporting for internal business operations and customer engagements, reducing manual report generation by over 70%.",
        "Developed automation solutions for generating IP-based targeting segments using TV Data, reducing processing time from 2.5 hours to 7 minutes per request, saving over 1000+ hours.",
        "Collaborated with different teams in strategic planning, analysis, ad campaign planning, and took leadership in overseeing specific tasks from the analytics side for the 2022 US Senate and Governor elections.",
        "Created vertical studies across domains to enhance campaign performance by leveraging current trends and diverse channels like CTV, Audio, and Display.",
        "Performed exploratory data analysis (EDA) for multiple clients, uncovering new insights and driving strategic improvements.",
        "Explored newly onboarded DSP and enhanced the reporting and activation capabilities.",
      ],
    },
    {
      company: "Humourbaba.com",
      position: "Digital Marketing & Data Analyst Intern",
      duration: "Jul 2020 - Nov 2020",
    },
    {
      company: "Sankalpsoft",
      position: "Business Development Intern",
      duration: "Apr 2020 - May 2020",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-white text-black"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#e5e7eb] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 experience-item">
                        <span className="text-blue-500">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                          <p className="text-black/60 text-lg font-bold">{item.company}</p>
                        </div>
                        {item.responsibilities && (
                          <div className="text-black/60">
                            <p>{item.responsibilities[0]}</p>
                            <p className="mt-4 mb-2">{item.responsibilities[1]}</p>
                            <ul className="list-disc ml-5">
                              {item.responsibilities.slice(2).map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
