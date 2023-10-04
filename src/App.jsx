import hardwell from "./assets/hardwell.png";
import creative from "./assets/creative.png";
import product from "./assets/product.png";
import design from "./assets/design.png";
import marketing from "./assets/marketing.png";
import about from "./assets/about.png";
import agency from "./assets/agency.png";
import lindi from "./assets/lindi.png";
import mayo from "./assets/mayo.png";

function App() {
  return (
    <>
      <div className="">
        {/* Navigation and hero */}
        <div className="bg-[#F2F2F2]">
          <div className="container ">
            {/* Nav */}
            <div className="w-full flex items-center justify-between py-4">
              <div className="">
                <img src={hardwell} alt="" />
              </div>

              <div className="">
                <ul className="sm:hidden md:flex gap-5">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Project</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* Contact button */}
              <div className=" text-white font-inter text-base">
                <button className="bg-black">Get started</button>
              </div>
            </div>

            {/* Hero */}
            <div className="">
              <div className="flex md:flex-row sm:flex-col gap-20 justify-center items-center py-10">
                <div className="flex-1 flex gap-5 flex-col">
                  <p>Ninad Creative Agency</p>
                  <h1 className="font-inter font-bold text-[3.25rem]">
                    Creative <span className="text-primary">Mind</span> With
                    Creative People
                  </h1>
                  <p className="font-inter text-lg">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when at its
                    layout.
                  </p>
                  <div className=" text-white font-inter text-base">
                    <button className="bg-primary px-10">Read more</button>
                  </div>
                </div>
                {/* Image */}
                <div className="flex-1">
                  <img src={creative} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore */}
        <div className="bg-[#FFFFF] py-20">
          <div className="container">
            <h2 className="font-semibold text-[2.475rem] mb-5 text-center leading-tight">
              Explore Service
            </h2>
            <p className=" text-lg mb-10 text-center">
              The sky was cloudless and of a deep dark blue spectacle before us
              was indeed sublime.
            </p>

            <div className="flex flex-wrap sm:flex-col sm:justify-center md:flex-row gap-10">
              <div className="flex-1 p-10 bg-white">
                <div className="mb-5 flex justify-start">
                  <img src={product} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px] text-start">
                  Product Management
                </p>
                <p className="font-inter text-base mt-5 text-start">
                  Stay on top of your task lists and stay in touch with what's
                  happening
                </p>
              </div>
              <div className="flex-1 p-10 ">
                <div className="mb-5 flex justify-start">
                  <img src={design} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px]  text-start">
                  Design & Creatives
                </p>
                <p className="font-inter text-base mt-5 text-start">
                  Stay on top of your task lists and stay in touch with what's
                  happening
                </p>
              </div>

              <div className="flex-1 p-10 bg-white">
                <div className="mb-5 flex justify-start">
                  <img src={marketing} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px]  text-start">
                  Marketing & Communication
                </p>
                <p className="font-inter text-base mt-5 text-start">
                  Stay on top of your task lists and stay in touch with what's
                  happening.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About*/}
        <div className="py-20">
          <div className="container flex sm:flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 ">
              <img src={about} alt="" />
            </div>
            <div className="flex-1 ">
              <h6 className="mt-5">ABOUT</h6>
              <h2 className="font-inter font-semibold  text-[2.475rem] mb-5 leading-tight">
                Creating, Communicating & Delivering
              </h2>
              <p className="font-inter font-light mb-5">
                Web designers plan, create and code internet sites and web
                pages, many of which combine text with sounds, pictures,
                graphics and video clips.
              </p>
              <h6 className="font-medium">Learn more</h6>
            </div>
          </div>
        </div>
        {/*Discover our work */}
        <div className="py-20">
          <div className="container">
            <div className="">
              <h2 className="font-inter font-semibold text-[3.475rem] mb-5 text-center leading-tight">
                Discover Our Work
              </h2>
              <p className="font-inter text-medium mb-10 text-center">
                Web designer is responsible for creating the design and layout
                of a website.
              </p>
            </div>
            <div className="bg-primary text-white  py-10">
              <div className="flex gap-10">
                <div className="flex-1  sm:mb-10">
                  <h6>User Interface</h6>
                  <h2 className="font-outfit font-semibold text-[3.475rem] leading-tight mb-5">
                    Creative Agency <br />& Portfolio
                  </h2>
                  <p className="font-dmsans text-base mb-5">
                    Web designers plan, create and code internet sites and web
                    pages, text with sounds.
                  </p>
                </div>
                <div className="flex-1">
                  <img src={agency} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-20 flex flex-wrap gap-10">
          <div className="md:w-[45%] sm:w-full">
            <img src={lindi} alt="" />
          </div>
          <div className="md:w-[45%] sm:w-full">
            <img src={mayo} alt="" />
          </div>
        </div>

        <div className="py-20">
          <div className="container flex justify-center md:flex-row sm:flex-wrap sm:flex-col sm:gap-10">
            <div className="flex-1 text-secondary text-center border rounded border-slate-950 py-8 ">
              <h1 className="">
                4.200 <span>%</span>
              </h1>

              <h3>Revenue</h3>
            </div>
            <div className="flex-1 text-tert text-center border rounded border-slate-950 py-8">
              <h1 className="">
                73<span>+</span>
              </h1>

              <h3>Projects</h3>
            </div>
            <div className="flex-1 text-quart text-center border rounded border-slate-950 py-8">
              <h1 className="">
                499.5<span>+</span>
              </h1>

              <h3>Uptime</h3>
            </div>
          </div>
        </div>

        {/* Analyze % Improve */}
        <div className="py-20">
          <div className="container flex sm:flex-col md:flex-row items-center text-second">
            <div className="flex-1 sm:mb-10">
              <h2 className="font-outfit font-semibold text-[3.475rem] leading-tight mb-5">
                Peed Of Creative Service For Your Business Growth
              </h2>
              <p className="font-dmsans text-base mb-5">
                We recruit doctors with the best honors and graduates at their
                universities, with a very broad and extraordinary experience
                they grow into professional doctors
              </p>

              <p className="font-dmsans text-base">
                then received extraordinary supplies, guided for 2 years, they
                already understand very well about existing diseases and how to
                handle them properly
              </p>
            </div>
            <div className="flex-1">
              <img src={peed} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
