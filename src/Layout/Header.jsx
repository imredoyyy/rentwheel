import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

// Components
import Button from "../General/Button";
import IconButton from "../General/IconButton";
import useScroll from "../hooks/use-scroll";
import useWindowSize from "../hooks/use-window-size";
import Logo from "/logo.png";

// Icons
import { Menu, X } from "lucide-react";

const Header = () => {
  // Hide first two links from certain pages (Conditional Rendering)
  const location = useLocation();

  const hideLinks =
    location.pathname === "/contact" ||
    location.pathname === "/team" ||
    location.pathname === "/about";

  // Add bottom border color if scrollY > 40
  const scrolled = useScroll(40);

  // Open/Close Mobile Navigation
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      enablePageScroll();
    } else {
      setIsOpen(true);
      disablePageScroll();
    }
  };

  // Close Mobile Navigation after clicking on any nav link
  const handleClick = () => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
      enablePageScroll();
      clearTimeout(timeoutId);
    }, 500);
  };

  // Close Mobile Navigation if it's currently opened & window size is greater than 849px
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 849 && isOpen) {
      setIsOpen(false);
      enablePageScroll();
    }
  }, [isOpen, size]);

  return (
    <header
      className={`${scrolled ? "border-neutral-200 bg-white/50 backdrop-blur-xl" : "border-transparent bg-transparent"} fixed top-0 z-30 w-full border-b`}
    >
      <div className="mx-auto flex w-full items-center justify-between p-4 md:px-6">
        <Link target="_self" to="/">
          <img src={Logo} alt="" className="w-[11rem] lg:w-[13rem]" />
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-5 lg:gap-6">
            {!hideLinks && (
              <>
                <li>
                  <a
                    className="text-base font-medium transition-colors hover:text-color-50"
                    href="#car-models"
                  >
                    Car Models
                  </a>
                </li>
                <li>
                  <a
                    className="text-base font-medium transition-colors hover:text-color-50"
                    href="#testimonial-section"
                  >
                    Testimonial
                  </a>
                </li>
              </>
            )}

            <li>
              <Link
                to="/team"
                className="text-base font-medium transition-colors hover:text-color-50"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base font-medium transition-colors hover:text-color-50"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base font-medium transition-colors hover:text-color-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <IconButton className="md:hidden" onClick={toggleMenu}>
          <Menu />
        </IconButton>

        <div className="hidden gap-1 md:flex">
          <Button className="text-color-100">Sign In</Button>
          <Button className="bg-color-50 text-white">Sign Up</Button>
        </div>

        {/* Mobile Navigation */}

        <div
          className={`${isOpen ? "left-0 bg-white/75" : "left-full"} fixed top-0 z-[100] h-screen w-full  backdrop-blur-sm transition-all duration-500 ease-in-out`}
        >
          <nav className="inset-0">
            {/* Close Mobile Nav Button */}
            <IconButton className="!fixed right-5 top-4" onClick={toggleMenu}>
              <X className="!size-7" />
            </IconButton>

            <ul className="flex h-screen flex-col items-center justify-center gap-5">
              {!hideLinks && (
                <>
                  <li>
                    <a
                      className="text-xl font-medium"
                      href="#car-models"
                      onClick={handleClick}
                    >
                      Car Models
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-xl font-medium"
                      href="#testimonial-section"
                      onClick={handleClick}
                    >
                      Testimonial
                    </a>
                  </li>
                </>
              )}
              <li>
                <Link
                  className="text-xl font-medium"
                  to="/team"
                  onClick={handleClick}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl font-medium"
                  to="/about"
                  onClick={handleClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl font-medium"
                  to="/contact"
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
