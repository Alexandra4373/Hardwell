import hardwell from "./assets/hardwell.png";
import creative from "./assets/creative.png";
import product from "./assets/product.png";
import design from "./assets/design.png";
import marketing from "./assets/marketing.png";
import about from "./assets/about.png";
import agency from "./assets/agency.png";
import lindi from "./assets/lindi.png";
import mayo from "./assets/mayo.png";
import analyze from "./assets/analyze.png";
import check from "./assets/check.png";
import dominik from "./assets/dominik.png";
import capmany from "./assets/capmany.png";
import alicia from "./assets/alicia.png";
import anton from "./assets/anton.png";
imoprt billy from "./assets/billy.png";

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
          <div className="container flex sm:flex-col md:flex-row items-center gap-10 ">
            <div className="flex-1 sm:mb-10">
              <h2 className="font-semibold text-[3.475rem] leading-tight mb-5">
                Analyze <br />& Improve
              </h2>
              <p className="font-inter text-base mb-5">
                Web designer is responsible for creating the design and layout
                of a website or web pages. It and can mean working on a brand
                new website.
                <div className="flex flex-row mt-10">
                  <img src={check} />
                  <h4 className="ml-3">Well Planned Architecture</h4>
                </div>
                <div className="flex flex-row mt-5">
                  <img src={check} />
                  <h4 className="ml-3">Accessible to All Users</h4>
                </div>
                <div className="flex flex-row mt-5">
                  <img src={check} />
                  <h4 className="ml-3">Mobile Compatibility</h4>
                </div>
              </p>
            </div>
            <div className="flex-1">
              <img src={analyze} alt="" />
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container">
            <h2 className="font-semibold text-[2.475rem] mb-5 text-center leading-tight">
              Team Members
            </h2>
            <p className=" text-lg mb-10 text-center">
              Combine text with sounds, picyures, graphics and video clips.
            </p>

            <div className="flex flex-wrap sm:flex-col sm:justify-center md:flex-row">
              <div className="flex-1 ">
                <div className="mb-5 flex justify-start">
                  <img src={dominik} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px] text-start">
                  Bernarr Dominik
                </p>
                <p className="font-inter text-base mt-2 font-light text-start">
                  Founder
                </p>
              </div>
              <div className="flex-1 ">
                <div className="mb-5 flex justify-start">
                  <img src={capmany} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px]  text-start">
                  Fabiana Capmany
                </p>
                <p className="font-inter text-base mt-2 font-light text-start">
                  Account Manager
                </p>
              </div>

              <div className="flex-1  ">
                <div className="mb-5 flex justify-start">
                  <img src={alicia} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px]  text-start">
                  Alicia Stanger
                </p>
                <p className="font-inter text-base font-light mt-2 text-start">
                  Designer
                </p>
              </div>
              <div className="flex-1  ">
                <div className="mb-3 flex justify-start">
                  <img src={anton} alt="" />
                </div>
                <p className="font-inter font-semibold text-[20px]  text-start">
                  Anton Brownstein
                </p>
                <p className="font-inter text-base font-light mt-2 text-start">
                  Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our testimonial */}
        <div className="bg-[#F5F4F0] py-20">
          <div className="container text-second">
            <h3 className="text-center font-outfit font-semibold text-[42px] mb-5">
              Our Testimonials
            </h3>
            <p className="text-center font-dmsans text-base mb-10">
			Read some awesome feedback from our students all over the world. We are giving the best to our students
            </p>

            {/* testimonials */}
            <div className="flex md:flex-row sm:flex-wrap sm:flex-col gap-5">
              <div className="flex-1 flex gap-3 rounded-2xl bg-white px-8 py-12">
                <div className="">
					<p>Lorem ipsum dolor sit amet, con adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						 Ut enim ad minim veniam, quis</p>
                  <img src={billy} alt="" />
                </div>
                </div>
              </div>
              <div className="flex-1 flex gap-3 rounded-2xl bg-white px-8 py-12">
                <div className="">
					<p>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                  <img src={billy} alt="" />
                </div>
                
              </div>
              <div className="flex-1 flex gap-3 rounded-2xl bg-white px-8 py-12">
                <div className="">
					<p>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                  <img src={billy} alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
