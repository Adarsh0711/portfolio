"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let playCount = 0;

    const handleVideoEnd = () => {
      playCount += 1;
      if (playCount >= 5) {
        video.pause();
        video.currentTime = 0; // Reset video to the start if needed
      } else {
        video.play();
      }
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-white text-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center"
        >
          {/* text content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg text-justify">
              Ever wondered what happens when you mix curiosity with a mountain of data? You get me, <span className="text-blue-500">Adarsh Bandaru</span>! I turn complex datasets into clear insights and compelling stories. With a Master's in Computer Science from the <span className="text-blue-500">State University of New York at Buffalo</span>, I've mastered <span className="text-blue-500">Machine Learning, Deep Learning, and Algorithms</span>—all while keeping my sanity (mostly) intact.
            </p>
            <p className="text-lg text-justify">
              My toolkit includes <span className="text-blue-500">Python</span> for data pipelines, <span className="text-blue-500">Java</span> for backend systems, and <span className="text-blue-500">C++</span> for performance optimization. I use <span className="text-blue-500">TensorFlow</span> and <span className="text-blue-500">PyTorch</span> to develop neural networks and <span className="text-blue-500">HTML, CSS, and JavaScript</span> for seamless web experiences.
            </p>
            <p className="text-lg text-justify">
              At <span className="text-blue-500">MiQ</span>, I thrived as an Analyst, creating magical dashboards and automating tasks to make data work for everyone. I love making data talk and driving impactful decisions.
            </p>
            <p className="text-lg text-justify">
              I solve complex problems with solutions that inspire. If you have data to wrangle or need some machine learning magic, I’m your go-to person.
            </p>
            <p className="text-lg text-justify">
              Great, you made it to the end! Whether you read every word or skillfully skimmed through, there's more to explore. Dive into the other sections to see more of what I can do!
            </p>
          </div>
          {/* Video */}
          <div className="flex justify-center">
            <video
              ref={videoRef}
              width="500"
              height="500"
              autoPlay
              muted
              className="rounded-xl"
            >
              <source src="/assets/Hi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
