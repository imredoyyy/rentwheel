import React, { useState } from "react";

import Container from "../Layout/Container";
import { carData } from "../data/CarData";
import Button from "../General/Button";
import CarDescBox from "./CarDescBox";

const CarModels = () => {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0); // Selecting the first carData

  const handleCarFilter = (index) => {
    setSelectedCarIndex(index);
  };

  return (
    <Container id="car-models">
      <div className="flex flex-col gap-12 p-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-3xl font-bold">
              Our Vehicle Model & Pricing
            </h1>
            <p className="text-center font-normal text-color-200 sm:max-w-[550px]">
              Explore our range of vehicle models, carefully curated to meet
              your need. With clear pricing information provided upfront.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {carData.map((car, index) => (
              <Button
                key={index}
                className={`${selectedCarIndex === index ? "bg-color-50 text-white" : "bg-neutral-300 text-color-100"} transition-colors hover:bg-color-50 hover:text-white`}
                onClick={() => handleCarFilter(index)}
              >
                {car.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Display selected car details */}
        <CarDescBox car={carData[selectedCarIndex]} />
      </div>
    </Container>
  );
};

export default CarModels;
