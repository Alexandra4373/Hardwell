import hardwell from "./assets/hardwell.png";
import creative from "./assets/creative.png";

function App() {
  return (
    <>
      <div className="">
        {/* Navigation and hero */}
        <div className="bg-[#FBF7EC]">
          <div className="container ">
            {/* Nav */}
            <div className="flex items-center justify-between py-4">
              <div className="">
                <img src={hardwell} alt="" />
              </div>

              <div className="">
                <ul className="sm:hidden md:flex gap-5">
                  <li>Home</li>
                  <li>Case Studies</li>
                  <li>Blog</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Contact button */}
              <div className=" text-white font-work text-base">
                <button className="bg-primary">Contact</button>
              </div>
            </div>

            {/* Hero */}
            <div className="flex md:flex-row sm:flex-col gap-20 justify-center items-center py-10">
              <div className="flex-1 flex gap-5 flex-col">
                <h1 className="font-work font-bold text-[4.25rem]">
                  The Better Way To{" "}
                  <span className="text-primary">Success</span> In Your Business
                </h1>
                <p className="font-work text-lg">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </p>

                <div className=" text-white font-work text-base">
                  <button className="bg-primary px-10">HIRE ME</button>
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
    </>
  );
}

export default App;
