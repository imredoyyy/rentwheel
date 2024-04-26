import { Link } from "react-router-dom";

import Button from "../General/Button";

import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-7xl py-8 md:px-8">
      <div className="grid grid-cols-1 justify-items-start gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
        <div className="flex w-full flex-col items-center gap-6 md:items-start">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="text-center text-xl font-bold tracking-[-0.01em] md:text-left md:text-2xl">
              Rent<span className="text-color-50">Wheel</span>
            </h3>
            <p className="max-w-[400px] text-center font-normal text-color-200 md:text-left">
              Revolutionize your travel experience with our premium car rentals
              and top-notch services
            </p>
          </div>

          <ul className="flex items-center gap-3">
            <li>
              <a
                href="#"
                className=" grid size-11 place-items-center rounded-full bg-color-50"
              >
                <Facebook className="size-5 stroke-white" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid size-11 place-items-center rounded-full bg-color-50"
              >
                <Linkedin className="size-5 stroke-white" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" grid size-11 place-items-center rounded-full bg-color-50"
              >
                <Instagram className="size-5 stroke-white" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col items-center gap-2 md:items-start">
          <h2 className="text-center text-xl font-bold md:text-left md:text-2xl">
            Company
          </h2>

          <ul className="flex flex-col items-center md:items-start">
            <li>
              <a
                href=""
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href=""
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Events
              </a>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col items-center gap-2 md:items-start">
          <h2 className="text-xl font-bold md:text-2xl">Useful Links</h2>
          <ul className="flex flex-col">
            <li>
              <Link
                to="/contact"
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href=""
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Community
              </a>
            </li>
            <li>
              <Link
                to="/team"
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Our Team
              </Link>
            </li>
            <li>
              <a
                href=""
                className="text-color-200 transition-colors duration-300 hover:text-color-50"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:items-start">
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-xl font-bold md:text-left md:text-2xl">
              Subscribe
            </h2>
            <p className="max-w-[400px] text-center font-normal text-color-200 md:text-left">
              Subscribe to our newsletter to get latest news and special offers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              required
              aria-required="true"
              placeholder="Enter Your Email"
              className="rounded-[4px] border border-color-200 py-3.5 pl-3 pr-6 text-base text-color-200 outline-none placeholder:text-slate-800"
            />
            <Button className="bg-color-50 text-white shadow-shadowDefault transition-shadow hover:shadow-shadowHover">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
