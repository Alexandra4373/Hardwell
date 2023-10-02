import hardwell from "./assets/hardwell.png";
import creative from "./assets/creative.png";

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
      </div>
    </>
  );
}

export default App;
