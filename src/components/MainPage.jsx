import logoSvg from "../assets/images/logo.svg";
import bgDesktop from "../assets/images/hero-desktop.jpg";
import bgMobile from "../assets/images/hero-mobile.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export function MainPage() {
  return (
    <>
      {/* <main className="w-full h-screen flex flex-col md:grid md:grid-cols-2">
        
        <div className="p-8 md:p-18 order-1 md:order-1">
         
          <header className="mb-16 row-start-1 md:col-start-1">
            <img src={logoSvg} alt="" className="w-32" />
          </header>
          
          <div className="text-center md:text-left order-3">
            <h1 className=" lg:text-6xl  tracking-[1.25rem] uppercase text-5xl font-light text-Desaturated-Red">
              We're
            </h1>
            <h2 className=" lg:text-6xl tracking-[1.25rem] mt-2 uppercase text-5xl font-semibold text-Dark-Grayish-Red">
              coming soon
            </h2>
            <p className="mt-6 text-base text-Desaturated-Red leading-relaxed">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <form className="mt-8 relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-full p-4 pl-8 border border-red-200 placeholder:text-Desaturated-Red"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full px-8 rounded-full bg-gradient-to-br from-red-300 to-red-400 shadow-lg shadow-red-200 hover:scale-110 transition-transform"
            >
              <MdKeyboardDoubleArrowRight className="size-10 fill-white" />
            </button>
          </form>
        </div>
        
        <div className="order-1 md:order-2">
          <img
            src={bgMobile}
            className="bg-cover bg-center md:hidden w-full"
            alt=""
          />
          <img
            src={bgDesktop}
            className="bg-cover bg-center w-full h-screen hidden md:block"
            alt=""
          />
        </div>
      </main> */}
      <main className="w-full min-h-screen flex flex-col md:grid md:grid-cols-2">
        {/* --- COLUMN 1: ALL CONTENT --- */}
        {/* This column is second on mobile (`order-2`) and first on desktop (`md:order-1`) */}
        <div className="order-2 md:order-1 p-8 md:p-16 lg:p-24 bg-gradient-to-br from-white to-red-50">
          <header>
            <img
              src={logoSvg}
              alt="Base Apparel Logo"
              className="w-32 mb-8 md:mb-16"
            />
          </header>
          {/* ... rest of your content (h1, p, form) ... */}
          <div className="text-center md:text-left order-3">
            <h1 className=" lg:text-6xl  tracking-[1.25rem] uppercase text-5xl font-light text-Desaturated-Red">
              We're
            </h1>
            <h2 className=" lg:text-6xl tracking-[1.25rem] mt-2 uppercase text-5xl font-semibold text-Dark-Grayish-Red">
              coming soon
            </h2>
            <p className="mt-6 text-base text-Desaturated-Red leading-relaxed">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <form className="mt-8 relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-full p-4 pl-8 border border-red-200 placeholder:text-Desaturated-Red"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full px-8 rounded-full bg-gradient-to-br from-red-300 to-red-400 shadow-lg shadow-red-200 hover:scale-110 transition-transform"
            >
              <MdKeyboardDoubleArrowRight className="size-10 fill-white" />
            </button>
          </form>
        </div>

        {/* --- COLUMN 2: IMAGE --- */}
        {/* This column is first on mobile (`order-1`) and second on desktop (`md:order-2`) */}
        <div className="order-1 md:order-2">
          {/* Mobile Image */}
          <img src={bgMobile} alt="Model" className="w-full md:hidden" />
          {/* Desktop Image */}
          <img
            src={bgDesktop}
            alt="Model"
            className="hidden md:block w-full h-full object-cover"
          />
        </div>
      </main>
    </>
  );
}
