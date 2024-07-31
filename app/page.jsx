import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full bg-white text-black">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg text-black">Data Science & AI Enthusiast</span>
            <h1 className="text-2xl xl:text-5xl mb-6 text-black">
              Hello, I'm <br /> <span className="text-blue-500">Adarsh Bandaru</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80 text-justify">
              I turn coffee ☕ into code and data into actionable insights. Whether it's taming wild datasets or crafting predictive models, I bring magic to the world of data science and analytics. Let's connect and make data work for us!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume.pdf"
                download
                className="uppercase flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0 flex justify-center">
                <Social
                  containerStyles="flex gap-6 justify-center"
                  iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <footer className="text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Adarsh Bandaru
      </footer>
    </section>
  );
};

export default Home;
