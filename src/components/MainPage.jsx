import logoSvg from "../assets/images/logo.svg";
import bgDesktop from "../assets/images/hero-desktop.jpg";
import bgMobile from "../assets/images/hero-mobile.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export function MainPage() {
  return (
    <>
      <main className="w-full h-screen md:grid md:grid-cols-2">
        {/* <div className="flex flex-col md:flex-row-reverse">
          <header className="p-8 md:order-3">
            <img src={logoSvg} alt="" />
          </header>
          <div className="order-2">
            <img
              src={bgMobile}
              className="bg-cover bg-center md:hidden w-full"
              alt=""
            />
            <img
              src={bgDesktop}
              className="bg-cover bg-center hidden md:block md:h-screen"
              alt=""
            />
          </div>
          <div className="font-one mt-14 mb-6 text-center order-2">
            <h1 className="uppercase text-5xl font-light text-Desaturated-Red">
              W e ' r e
            </h1>
            <h2 className="uppercase text-5xl font-semibold text-Dark-Grayish-Red">
              c o m i n g
            </h2>
            <h3 className="uppercase text-5xl font-semibold text-Dark-Grayish-Red">
              s o o n
            </h3>
            <p className="p-6 font-medium text-Desaturated-Red text-lg ">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="relative px-8 md:flex md:flex-col self-stretch mt-6">
              <input
                type="text"
                placeholder="Email Address"
                className="outline-1 rounded-full p-4 outline-Soft-Red w-full placeholder:text-Desaturated-Red"
              />
              <button className="absolute top-1/2 right-8 -translate-y-1/2 rounded-full p-1 px-4 bg-linear-[135deg,hsl(0,_80%,_86%)_50%,hsl(0,_74%,_74%)]">
                <MdKeyboardDoubleArrowRight className="size-12 fill-white" />
              </button>
            </div>
          </div>
        </div> */}
        {/* column 1: content */}
        <div className="p-8 md:p-18">
          {/* Logo */}
          <header className="mb-16">
            <img src={logoSvg} alt="" className="w-32" />
          </header>
          {/* text content */}
          <div className="text-center md:text-left">
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
        {/* hero image */}
        <div>
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
      </main>
    </>
  );
}
