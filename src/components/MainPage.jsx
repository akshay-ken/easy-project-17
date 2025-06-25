import logoSvg from "../assets/images/logo.svg";
import bgDesktop from "../assets/images/hero-desktop.jpg";
import bgMobile from "../assets/images/hero-mobile.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export function MainPage() {
  return (
    <>
      <main className="w-full h-screen">
        <div className="flex flex-col md:flex-row">
          <header className="p-8">
            <img src={logoSvg} alt="" />
          </header>
          <div>
            <img
              src={bgMobile}
              className="bg-cover bg-center md:hidden"
              alt=""
            />
            <img
              src={bgDesktop}
              className="bg-cover bg-center hidden md:block"
              alt=""
            />
          </div>
          <div className="font-one flex flex-col items-center my-14">
            <h1 className="uppercase text-5xl font-light text-Desaturated-Red">
              W e ' r e
            </h1>
            <h2 className="uppercase text-5xl font-semibold text-Dark-Grayish-Red">
              c o m i n g
            </h2>
            <h3 className="uppercase text-5xl font-semibold text-Dark-Grayish-Red">
              s o o n
            </h3>
            <p className="p-6 font-medium text-Desaturated-Red text-lg text-center">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className="outline-1 rounded-full p-4 mx-6 outline-Soft-Red w-full"
            />
            <button className="absolute top-1/2 -right-6 -translate-y-1/2 bg-Soft-Red rounded-full p-1 px-4 bg-linear-[135deg,hsl(0,_80%,_86%)_50%,hsl(0,_74%,_74%)]">
              <MdKeyboardDoubleArrowRight className="size-12 fill-white" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
