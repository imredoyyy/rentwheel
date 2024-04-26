import CarModels from "../components/CarModels";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanBooking from "../components/PlanBooking";
import TestimonialSection from "../components/Testimonial";
import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <BookCar/>
        <PlanBooking/>
        <CarModels/>
        <ChooseUs/>
        <TestimonialSection />
        <Faq/>
      </main>
    </>
  );
};

export default Home;
