import hardwell from "./assets/hardwell.png";
import creative from "./assets/creative.png";
import product from "./assets/product.png";
import design from "./assets/design.png";
import marketing from "./assets/marketing.png";

function App() {
  return (
    <>
      <div className="">
        {/* Navigation and hero */}
        <div className="bg-[#F2F2F2]">
          <div className="container ">
            {/* Nav */}
            <div className="bg-[#FFFFFF] w-full flex items-center justify-between py-4">
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

            <div className="flex flex-wrap gap-10">
              <div className="flex-1 p-10 bg-white">
                <div className="mb-5 flex justify-start">
                  <img src={product} alt="" />
                </div>
                <p className="font-inter font-semibold text-[26px] mb-5 text-center">
                  Product Management
                </p>
                <p className="font-inter text-base text-start">
                  Stay on top of your task lists and stay in touch with what's
                  happening
                </p>
              </div>
              <div className="flex-1 p-10 ">
                <div className="mb-5 flex justify-start">
                  <img src={design} alt="" />
                </div>
                <p className="font-inter font-semibold text-[26px] mb-5 text-center">
                  Design & Creatives
                </p>
                <p className="font-inter text-base text-center">
                  Stay on top of your task lists and stay in touch with what's
                  happening
                </p>
              </div>

              <div className="flex-1 p-10 bg-white">
                <div className="mb-5 flex justify-start">
                  <img src={marketing} alt="" />
                </div>
                <p className="font-inter font-semibold text-[26px] mb-5 text-center">
                  Marketing & Communication
                </p>
                <p className="font-inter text-base text-start">
                  Stay on top of your task lists and stay in touch with what's
                  happening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
