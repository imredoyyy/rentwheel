// Component
import Container from "../Layout/Container";
import Button from "../General/Button";
import Counter from "../General/Counter";

// Image
import ChooseUsImg from "../assets/choose-us.jpeg";

// Icons
import { ArrowRight } from "lucide-react";

const ChooseUs = () => {
  return (
    <Container>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="order-last flex justify-center">
          <img
            src={ChooseUsImg}
            alt=""
            className="object-contain w-[420px] md:w-full md:max-w-[500px]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-12 p-4  md:order-last">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <h3 className="text-center text-xl font-medium text-color-50 md:text-left">
                Why Choose Us?
              </h3>
              <h1 className="max-w-[450px] text-center text-3xl font-bold md:text-left lg:text-3xl">
                We Provide Premium Car With High Quality Services
              </h1>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="text-center font-normal md:text-left max-w-[550px]">
                Want to rent a car? Well look no further, as <b>RentWheel</b>{" "}
                got you covered from start to finish. Revolutionize your travel
                experience with our premium car rentals and top-notch services,
                ensuring every journey is an unforgettable adventure.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button className="border-2 border-transparent bg-color-50 text-white shadow-shadowDefault transition-shadow hover:shadow-shadowHover">
                Read More
              </Button>

              <Button
                className="border-2 border-transparent bg-color-100 text-white transition-colors duration-200 hover:border-color-100 hover:bg-transparent hover:text-color-100"
                href="#book-car"
              >
                Rent A Car <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>

          {/* Counter */}
          <div className="flex items-center justify-center gap-8 md:justify-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-color-50">
                <Counter maxValue={15} />
                <span className="text-4xl font-bold">+</span>
              </div>
              <p className="text base font-medium lg:text-lg">
                Years of Experience
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center text-color-50">
                <Counter maxValue={25000} />
                <span className="text-4xl font-bold">+</span>
              </div>
              <p className="text base font-medium lg:text-lg">
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChooseUs;
