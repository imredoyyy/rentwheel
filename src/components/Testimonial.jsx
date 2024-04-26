import Container from "../Layout/Container";
import { reviewData } from "../data/ReviewData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Carousel";

// Icon
import { Car, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <Container id="testimonial-section">
      <div className="relative">
        <div className="flex flex-col gap-12 p-6">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-medium text-color-50">Testimonial</h3>
            <h1 className="text-3xl font-bold capitalize">
              What our client's had to say
            </h1>
            <p className="max-w-[580px] text-center font-normal ">
              Explore the firsthand experiences of our clients! Read their
              honest reviews and feedback to learn more about the quality of
              service we provide.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              justify: "center",
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent>
              {reviewData.map((data, index) => (
                <CarouselItem className="shadow-sm ring-black md:basis-1/2">
                  <div
                    className="flex flex-col gap-6 rounded-lg bg-neutral-100 px-10 py-6"
                    key={index}
                  >
                    <h4 className="text-lg font-medium">
                      "{data.review}"
                    </h4>

                    <div className="flex flex-col">
                      <div className="flex  items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={data.image}
                            className="size-14 rounded-full object-contain"
                            alt={data.name} loading="lazy"
                          />
                          <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">
                              {data.name}
                            </h2>
                            <p>{data.location}</p>
                          </div>
                        </div>
                        <div className="flex items-end">
                          <Quote className="size-10 stroke-color-50 xl:size-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
