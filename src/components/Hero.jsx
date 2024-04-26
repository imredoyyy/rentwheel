// Components
import Container from "../Layout/Container";
import Jeep from "../assets/jeep.png";
import ToyotaRav4 from '../assets/Toyota-Rav4.png';
import Button from "../General/Button";
import useScroll from "../hooks/use-scroll";

// Icons
import { CircleCheck, ChevronRight, ArrowUp } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const scrolled = useScroll(100);

  // Function to scroll to top
  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Container id="hero" className="">
      <div className="flex h-full flex-grow flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:gap-11">
        <div className="relative flex h-full w-full justify-center md:order-last">
          <img
            src={ToyotaRav4}
            alt="Jeep"
            className="z-10 hidden aspect-[4/3] min-w-[400px] object-contain md:block"
          />
          <div className="max-w[400px] absolute inset-0 left-[150px] right-[140px] z-[-1] rounded-2xl bg-color-50 md:left-[60px] md:right-[50px] lg:left-[80px] lg:right-[70px]"></div>
        </div>

        {/* Hero Content */}
        <div className="mx-auto flex max-w-[36rem] flex-grow flex-col justify-center gap-6 md:items-start md:justify-center lg:max-w-3xl 2xl:gap-8">
          <h3 className="text-center text-xl font-semibold md:text-left">
            Plan your trip with Rent<span className="text-color-50">Wheel</span>
          </h3>
          <h1 className="text-center text-4xl font-bold capitalize sm:text-5xl md:text-left xl:text-[55px]">
            Fast and easy way to <span className="text-color-50">rent</span> a
            car
          </h1>
          <p className="text-center text-base font-normal text-color-200 md:text-left md:text-lg">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row md:justify-start">
            <Button
              className="border-2 border-color-50 bg-color-50 text-white shadow-shadowDefault transition-shadow hover:shadow-shadowHover"
              href="#book-car"
            >
              Book Now <CircleCheck className="size-5" />
            </Button>
            <Button className="border-2 border-transparent bg-color-100 text-white hover:border-color-100 hover:bg-transparent hover:text-color-100">
              Learn More <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Icon */}
      <div
        className={`${scrolled ? "visible opacity-100" : "invisible opacity-0"} fixed bottom-5 right-7 grid cursor-pointer place-items-center rounded-full bg-color-50 p-2 duration-300 hover:-translate-y-1.5`}
        onClick={handleScrollTop}
      >
        <ArrowUp className="stroke-white" />
      </div>
    </Container>
  );
};

export default Hero;
