import logoSvg from "../assets/images/logo.svg";
import bgDesktop from "../assets/images/hero-desktop.jpg";
import bgMobile from "../assets/images/hero-mobile.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import { PiWarningOctagonBold } from "react-icons/pi";

export function MainPage() {
  const [emailId, setEmailId] = useState("");
  const [mailCheck, setMailCheck] = useState(false);

  function handleMailCheck() {
    event.preventDefault();
    // alert(emailId);
    if (!emailId.includes("@")) {
      setMailCheck(true);
    } else {
      setMailCheck(false);
    }
  }

  function handleEmailId(event) {
    setEmailId(event.target.value);
  }
  return (
    <>
      <main className="w-full font-one h-screen flex flex-col md:grid md:grid-cols-2 md:grid-rows-4">
        <header className="my-10 md:my-0 ml-6 md:place-content-end md:ml-32 order-1">
          <img src={logoSvg} alt="" className="w-32 md:w-56" />
        </header>
        <div className="p-8 md:px-32 order-3">
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
              value={emailId}
              onChange={handleEmailId}
              placeholder="Email Address"
              className="w-full rounded-full p-4 pl-8 border border-red-200 focus:outline-Soft-Red placeholder:text-Desaturated-Red"
            />
            <button
              type="submit"
              onClick={handleMailCheck}
              className="absolute top-0 right-0 h-full px-8 rounded-full bg-gradient-to-br from-red-300 to-red-400 shadow-lg shadow-red-200 hover:scale-110 transition-transform"
            >
              <MdKeyboardDoubleArrowRight className="size-10 fill-white" />
            </button>
            {mailCheck ? (
              <span className="absolute top-3 right-30">
                <PiWarningOctagonBold className="size-8 fill-Soft-Red" />
              </span>
            ) : null}
          </form>
          {mailCheck ? (
            <p className="text-center mt-2 mr-6 text-Soft-Red font-bold">
              Invalid Email Address
            </p>
          ) : null}
        </div>

        <div className="order-2 md:order-2">
          <img
            src={bgMobile}
            className="bg-cover bg-center md:hidden w-full"
            alt=""
          />
          <img
            src={bgDesktop}
            className="bg-cover bg-center w-full max-w-xl h-screen hidden md:block"
            alt=""
          />
        </div>
      </main>
    </>
  );
}
