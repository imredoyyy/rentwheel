// Component
import Container from "../Layout/Container";
import Pagination from "../components/Pagination";
import Counter from "../General/Counter";

// Image
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <>
      <Pagination name="About" />
      <Container className="mt-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col items-center gap-10 md:items-start">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <h3 className="text-center text-xl font-medium text-color-50">
                About Us
              </h3>
              <h1 className="text-center text-3xl font-bold lg:text-3xl md:text-left">
                Know More About <span>Rent</span>
                <span className="text-color-50">Wheel</span>
              </h1>
              <p className="max-w-[400px] lg:max-w-[500px] text-center text-base font-normal text-color-200 md:text-left">
                Welcome to <b>RentWheel</b>, your trusted partner in hassle-free
                car rental solutions. With a commitment to providing top-quality
                vehicles, exceptional customer service, and unbeatable value, we
                strive to make your rental experience seamless from start to
                finish. Our dedicated team is here to assist you at every step
                of the way, ensuring that you get the right vehicle for your
                needs
              </p>
            </div>
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <Counter maxValue="30" className="text-color-50">
                  <span>+</span>
                </Counter>
                <p className="font-medium text-color-200 md:text-lg">
                  Car Models
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start">
                <Counter maxValue="50" className="text-color-50">
                  <span>+</span>
                </Counter>
                <p className="font-medium text-color-200 md:text-lg">
                  Rental Outlets
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start">
                <Counter maxValue="80" className="text-color-50">
                  <span>+</span>
                </Counter>
                <p className="font-medium text-color-200 md:text-lg">
                  Repair Shops
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
