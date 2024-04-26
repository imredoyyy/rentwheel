import React, { useState } from "react";
import Button from "../General/Button";

const CarDescBox = ({ car }) => {
  if (!car) {
    return null; // Return null if no car is selected
  }

  return (
    <>
      <div className="flex justify-center gap-12">
        <div className="grid grid-cols-1 items-center  justify-items-center gap-4 sm:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className="w-[320px] md:w-[360px] xl:w-[420px]">
            <img
              src={car.image}
              alt={car.name}
              loading="lazy"
              draggable="false"
            />
          </div>

          <div className="flex flex-col">
            {/* Contents */}
            <div className="border border-color-100 text-color-200 ">
              <div className="border-b border-color-100 bg-color-50 p-3 text-center text-xl font-medium text-white">
                <h5>
                  ${car.price}/<span>day</span>
                </h5>
              </div>
              <div className="grid grid-cols-2 border-b border-color-100 text-center font-medium text-color-200">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  Company
                </div>
                <div className="p-1.5">{car.company}</div>
              </div>
              <div className="grid grid-cols-2 border-b border-color-100">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  Model
                </div>
                <div className="p-1.5 text-center font-medium text-color-200">
                  {car.model}
                </div>
              </div>
              <div className="grid grid-cols-2 border-b border-color-100 text-center font-medium text-color-200">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  Year
                </div>
                <div className="p-1.5">{car.year}</div>
              </div>
              <div className="grid grid-cols-2 border-b border-color-100 text-center font-medium text-color-200">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  Doors
                </div>
                <div className="p-1.5">{car.doors}</div>
              </div>
              <div className="grid grid-cols-2 border-b border-color-100 text-center font-medium text-color-200">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  AC
                </div>
                <div className="p-1.5">{car.ac}</div>
              </div>
              <div className="grid grid-cols-2 border-b border-color-100 text-center font-medium text-color-200">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  Transmission
                </div>
                <div className="p-1.5">{car.transmission}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="border-r border-color-100 p-1.5 text-center font-medium text-color-200">
                  Fuel
                </div>
                <div className=" p-1.5 text-center font-medium text-color-200">
                  {car.fuel}
                </div>
              </div>
            </div>
            <Button
              href="#book-car"
              className="bg-color-50 text-lg text-white xl:text-xl"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDescBox;
