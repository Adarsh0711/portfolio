"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaWindows,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiNumpy,
  SiPostman,
  SiDatabricks,
  SiVisualstudio,
  SiAnaconda,
  SiAzuredevops,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiMongodb,
  SiBootstrap,
  SiApachespark,
  SiMysql,
  SiApachekafka,
} from "react-icons/si";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I'm just at the start of my career, but the learning curve has been steep and rewarding.",
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

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Through rigorous coursework and hands-on projects, I have developed a deep understanding of computer science principles and applications.",
  items: [
    {
      institution: "State University of New York at Buffalo",
      degree: "Master of Science in Computer Science",
      duration: "August 2023 - January 2025",
    },
    {
      institution: "Vellore Institute of Technology",
      degree: "BTech in Computer Science and Engineering",
      duration: "August 2018 - May 2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Equipped with a robust toolkit of technologies, I am prepared to contribute to innovative solutions in any environment.",
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
      ],
    },
    {
      title: "Tools and Platforms",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiDatabricks />, name: "Databricks" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <FaWindows />, name: "Windows" },
        { icon: <SiVisualstudio />, name: "Visual Studio" },
        { icon: <SiAnaconda />, name: "Anaconda" },
        { icon: <SiAzuredevops />, name: "Microsoft Azure" },
      ],
    },
    {
      title: "Methodologies & Concepts",
      skills: [
        { name: "Agile Development" },
        { name: "CI/CD" },
        { name: "Data Analytics" },
        { name: "Data Modeling" },
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "NLP" },
        { name: "OOP" },
        { name: "SaaS" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiKeras />, name: "Keras" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiScikitlearn />, name: "Scikit-Learn" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
        { icon: <SiApachespark />, name: "Apache Spark" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiApachekafka />, name: "Mongoose" },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <li className="bg-[#e5e7eb] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 col-span-2">
                      <span className="text-blue-500">{experience.items[0].duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                        {experience.items[0].position}
                      </h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                        <p className="text-black/60 text-lg font-bold">{experience.items[0].company}</p>
                      </div>
                      <div className="text-black/60">
                        <p>{experience.items[0].responsibilities[0]}</p>
                        <p className="mt-4 mb-2">{experience.items[0].responsibilities[1]}</p>
                        <ul className="list-disc ml-5">
                          {experience.items[0].responsibilities.slice(2).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li className="bg-[#e5e7eb] h-[250px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-blue-500">{experience.items[1].duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                        {experience.items[1].position}
                      </h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                        <p className="text-black/60 text-lg font-bold">{experience.items[1].company}</p>
                      </div>
                    </li>
                    <li className="bg-[#e5e7eb] h-[250px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-blue-500">{experience.items[2].duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                        {experience.items[2].position}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                        <p className="text-black/60 text-lg font-bold">{experience.items[2].company}</p>
                      </div>
                    </li>
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#e5e7eb] h-[250px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-blue-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                            <p className="text-black/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                {skills.categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="bg-white border border-gray-300 p-4 rounded text-center">
                          {skill.icon && <div className="mx-auto text-4xl">{skill.icon}</div>}
                          <p className="mt-2">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
