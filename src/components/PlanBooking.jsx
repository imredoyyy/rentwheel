import Container from "../Layout/Container";
import Car from "../assets/car.svg";
import Booking from "../assets/booking.svg";
import Payment from "../assets/payment.svg";
import Driving from "../assets/driving.svg";
import Blob from "../assets/blob2.svg";

const PlanBooking = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-xl font-medium text-color-50">
            Plan Your Trip Now
          </h3>
          <h1 className="text-center text-3xl font-bold">
            Book Car in Four Easy Steps
          </h1>
        </div>

        <div className="grid grid-cols-1 justify-center gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center gap-6 p-4">
            <div className="grid size-[100px] place-items-center rounded-lg bg-[#e6f9ff]">
              <img src={Car} alt="car icon" className="size-11" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-center text-lg font-semibold">
                Select Your Car
              </h2>
              <p className="max-w-[350px] text-center text-base font-normal text-color-200">
                Choose the perfect vehicle for your journey from our diverse
                range of options
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-4">
            <div className="grid size-[100px] place-items-center rounded-lg bg-[#e6f9ff]">
              <img src={Booking} alt="booking icon" className="size-11" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-center text-lg font-semibold">
                Confirm Booking
              </h2>
              <p className="max-w-[350px] text-center text-base font-normal text-color-200">
                Double-check your reservation details and finalize your booking
                with just a few clicks
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-4">
            <div className="grid size-[100px] place-items-center rounded-lg bg-[#e6f9ff]">
              <img src={Payment} alt="payment icon" className="size-11" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-center text-lg font-semibold">
                Confirm Payment
              </h2>
              <p className="max-w-[350px] text-center text-base font-normal text-color-200">
                Complete your booking by securely confirming your payment
                details
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-4">
            <div className="grid size-[100px] place-items-center rounded-lg bg-[#e6f9ff]">
              <img
                src={Driving}
                alt="fast driving car icon"
                className="size-[70px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-center text-lg font-semibold">
                Enjoy the Car
              </h2>
              <p className="max-w-[350px] text-center text-base font-normal text-color-200">
                Begin your journey with confidence, knowing you have the perfect
                vehicle for your trip
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlanBooking;
