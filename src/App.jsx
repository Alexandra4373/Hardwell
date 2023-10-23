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
import billy from "./assets/billy.png";
import clickCenter from "./assets/clickCenter.png";
import digitalside from "./assets/digitalside.png";
import fuzion from "./assets/fuzion.png";
import vortex from "./assets/vortex.png";
import travel from "./assets/travel.png";
import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.jpg";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";

function App() {
	return (
		<>
			{/* Navigation and hero */}
			<div className="">
				<div className="">
					{/* Nav */}
					<div className="bg-[#fff] ">
						<div className="container flex items-center justify-between py-4">
							<div className="">
								<img src={hardwell} alt="" />
							</div>
							<div className="">
								<ul className="hidden sm:flex gap-5">
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
					</div>

					{/* Hero */}
					<div className="bg-[#F2F2F2]">
						<div className="container flex md:flex-row sm:flex-col gap-12 justify-center items-center py-10">
							<div className="w-[55%] font-open flex gap-5 flex-col">
								<p>Ninad Creative Agency</p>
								<h1 className="font-bold text-[3.25rem]">
									Creative <span className="text-primary">Mind</span> With
									Creative People
								</h1>
								<p className="text-lg">
									It is a long established fact that a reader will be distracted
									by the readable content of a page when at its layout.
								</p>
								<div className=" text-white text-base">
									<button className="bg-primary px-10">Read more</button>
								</div>
							</div>
							{/* Image */}
							<div className="w-[45%] flex justify-center items-center">
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
							Web designers plan, create and code internet sites and web pages,
							many of which combine text with sounds, pictures, graphics and
							video clips.
						</p>
						<h6 className="font-medium">Learn more</h6>
					</div>
				</div>
			</div>

			{/* Discover our work */}
			<div className="py-20 ">
				<div className="container">
					<h2 className="font-inter font-semibold text-[3.475rem] mb-5 text-center leading-tight">
						Discover Our Work
					</h2>
					<p className="font-inter text-medium mb-10 text-center">
						Web designer is responsible for creating the design and layout of a
						website.
					</p>
				</div>
				<div className="bg-primary text-white py-10">
					<div className="container flex gap-10">
						<div className="flex-1 flex flex-col justify-center items-center">
							<div className="w-[80%]">
								<h6>User Interface</h6>
								<h2 className="text-white font-outfit font-semibold text-[3.475rem] leading-tight mb-5">
									Creative Agency <br />& Portfolio
								</h2>
								<p className="font-dmsans text-base mb-5">
									Web designers plan, create and code internet sites and web
									pages, text with sounds.
								</p>
							</div>
						</div>
						<div className="flex-1 flex justify-center items-center">
							<img src={agency} alt="" />
						</div>
					</div>
				</div>
			</div>

			{/* Two images */}
			<div className="container py-20 flex flex-wrap gap-10">
				<div className="md:w-[45%] sm:w-full">
					<img src={lindi} alt="" />
				</div>
				<div className="md:w-[45%] sm:w-full">
					<img src={mayo} alt="" />
				</div>
			</div>

			{/* Ratings */}
			<div className="py-20">
				<div className="container font-epilogue flex justify-center md:flex-row sm:flex-wrap sm:flex-col sm:gap-10">
					<div className="flex-1  text-center border rounded py-8 ">
						<h2 className="font-bold text-secondary">
							4.200 <span className="text-md">%</span>
						</h2>

						<p className="text-lg text-secondary ">Revenue</p>
					</div>
					<div className="flex-1 text-center border rounded  py-8">
						<h2 className="font-bold text-tert">
							73<span>+</span>
						</h2>

						<p className="text-lg text-tert">Projects</p>
					</div>
					<div className="flex-1  text-center border rounded py-8">
						<h2 className="font-bold text-quart">
							99.5<span>+</span>
						</h2>

						<p className="text-lg text-quart">Uptime</p>
					</div>
				</div>
			</div>

			{/* Analyze % Improve */}
			<div className="py-20">
				<div className="container flex mb-[15rem] sm:flex-col md:flex-row items-center  sm:align-center gap-10 ">
					<div className="flex-1 sm:mb-10">
						<h2 className="font-semibold text-[3.475rem] leading-tight mb-5">
							Analyze <br />& Improve
						</h2>
						<p className="font-inter text-base mb-5">
							Web designer is responsible for creating the design and layout of
							a website or web pages. It and can mean working on a brand new
							website.
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

			{/* YouTube Video */}
			<div className="bg-[#F3F7F5] pb-20">
				<div className="container">
					<div className="flex flex-col justify-center items-center">
						<img src={youtube} alt="" className="mb-10 aspect-video -mt-56" />

						<div className="flex sm:px-[15rem] flex-col sm:flex-row">
							<div className="flex-1 font-epilogue">
								<h3 className="font-bold">How we work</h3>
							</div>
							<div className="flex-1">
								<p>
									Web designers plan, create and code internet sites and web
									pages, many of which combine text with sounds, pictures,
									graphics and video clips.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Team members */}
			<div className="py-20">
				<div className="container">
					<h2 className="font-semibold text-[2.475rem] mb-5 text-center leading-tight">
						Team Members
					</h2>
					<p className="text-lg mb-10 text-center">
						Combine text with sounds, picyures, graphics{" "}
						<br className="hidden sm:flex" /> and video clips.
					</p>

					<div className="flex flex-wrap gap-5 sm:flex-row flex-col justify-center ">
						<div className="flex-1 flex flex-col items-center sm:items-start">
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
						<div className="flex-1 flex flex-col items-center sm:items-start">
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

						<div className="flex-1 flex flex-col items-center sm:items-start ">
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
						<div className="flex-1 flex flex-col items-center sm:items-start ">
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
			<div className="bg-[#FFFFF] py-20">
				<div className="container">
					<h2 className="font-semibold text-[2.475rem] mb-5 text-center leading-tight">
						Our Testimonials
					</h2>
					<p className=" text-lg mb-10 text-center">
						Read some awesome feedback from our students all over the world. We
						are giving the best to our students
					</p>

					<div className="flex flex-wrap sm:flex-col sm:justify-center md:flex-row gap-10">
						<div className="flex-1 p-10 border rounded">
							<p className="font-inter text-base mt-5">
								Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis
							</p>
							<div className="mb-5 flex mt-5">
								<img src={billy} alt="" />
								<div className="flex flex-col ml-5">
									<h4>BILLY ROOT</h4>
									<h5>Torest</h5>
								</div>
							</div>
						</div>
						<div className="flex-1 p-10 border rounded ">
							<p className="font-inter text-base mt-5 text-start">
								Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis
							</p>
							<div className="mb-5 flex mt-5">
								<img src={billy} alt="" />
								<div className="flex flex-col ml-5">
									<h4>BILLY ROOT</h4>
									<h5>Torest</h5>
								</div>
							</div>
						</div>

						<div className="flex-1 p-10 border rounded">
							<p className="font-inter text-base mt-5 ">
								Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis
							</p>
							<div className="mb-5 flex mt-5">
								<img src={billy} alt="" />
								<div className="flex flex-col ml-5">
									<h4>BILLY ROOT</h4>
									<h5>Torest</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Clients */}
			<div className="py-20">
				<div className="container flex flex-col items-center">
					<p className="font-inter font-bold text-xl text-center mb-10">
						Our Famous Clients
					</p>
					<div className="gap-10 flex flex-wrap items-center justify-center">
						<div className="">
							<img src={clickCenter} alt="" />
						</div>
						<div className="">
							<img src={digitalside} alt="" />
						</div>
						<div className="">
							<img src={vortex} alt="" />
						</div>
						<div className="">
							<img src={travel} alt="" />
						</div>
						<div className="">
							<img src={fuzion} alt="" />
						</div>
					</div>
				</div>
			</div>

			{/* Latest blogs*/}
			<div className=" py-20">
				<div className="container">
					<h2 className="font-inter font-bold text-[2.475rem] mb-5 text-center leading-tight">
						Latest blogs
					</h2>

					{/* Blogs */}
					<div className="flex flex-wrap gap-10">
						<div className="flex-1 p-10 border rounded">
							<div className="mb-5 flex justify-center">
								<img src={blog1} alt="" />
							</div>
							<p className="font-inter font-semibold text-[20px] mb-5 text-start">
								Build prototypes with thousands of components.
							</p>
							<p className="font-inter text-base text-start">
								Leverage agile frameworks to provide a robust synopsis for high
								level overviews. Iterative approaches.
							</p>
							<h5 className="mt-5 underline text-tert">Read more</h5>
						</div>

						<div className="flex-1 p-10 border rounded">
							<div className="mb-5 flex justify-center">
								<img src={blog2} alt="" />
							</div>
							<p className="font-inter font-semibold text-[20px] mb-5 text-start">
								Build prototypes with thousands of components.
							</p>
							<p className="font-inter text-base text-start">
								Leverage agile frameworks to provide a robust synopsis for high
								level overviews. Iterative approaches.
							</p>
							<h5 className="mt-5 underline text-secondary">Read more</h5>
						</div>

						<div className="flex-1 p-10 border rounded">
							<div className="mb-5 flex justify-center">
								<img src={blog3} alt="" />
							</div>
							<p className="font-inter font-semibold text-[20px] mb-5 text-start">
								Build prototypes with thousands of components.
							</p>
							<p className="font-inter text-base text-start">
								Leverage agile frameworks to provide a robust synopsis for high
								level overviews. Iterative approaches.
							</p>
							<h5 className="mt-5 underline text-quart">Read more</h5>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="bg-black pt-20 pb-10">
				<div className="container text-white">
					{/* Top footer */}
					<div className="flex flex-col sm:flex-row gap-10 justify-between mb-5">
						<div className="flex-1 p-10">
							<h1>WD</h1>
						</div>

						<div className="flex-1">
							<p className="mb-4 font-light">MENU</p>
							<ul className="flex flex-col gap-2">
								<li>About </li>
								<li>Portofolio </li>
								<li>Blog </li>
								<li>Contact</li>
							</ul>
						</div>

						<div className="flex-1">
							<p className="mb-4 font-light">SERVICE</p>
							<ul className=" flex flex-col gap-2">
								<li>User Experience </li>
								<li>User Interface </li>
								<li>Logotype </li>
								<li>See More </li>
							</ul>
						</div>

						{/* Social icons */}
						<div className="flex-1 flex items-center gap-5">
							<div className="bg-white w-10 h-10 flex justify-center items-center rounded-full relative bg-opacity-10">
								<img src={facebook} className="absolute z-10" />
							</div>
							<div className="bg-white w-10 h-10 flex justify-center items-center rounded-full relative bg-opacity-10">
								<img src={twitter} />
							</div>
							<div className="bg-white w-10 h-10 flex justify-center items-center rounded-full relative bg-opacity-10">
								<img src={instagram} className="b" />
							</div>
						</div>
					</div>
				</div>
				{/* Bottom  footer */}

				<div className="container text-white mt-5 flex sm:flex-row flex-col text-center justify-between">
					<p>Copyright 2020 Laaqiq. All Rights Reserved</p>
					<p className="">Terms of Use</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</>
	);
}

export default App;
