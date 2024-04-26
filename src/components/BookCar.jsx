import React, { useState, useEffect } from "react";

// Images
import BMW_320_ModernLine from "../assets/BMW-320-Modernline.png";
import Jeep from "../assets/jeep.png";
import Mercedes_Benz_GLK from "../assets/Mercedes-Benz-GLK.png";
import ToyotaCorolla from "../assets/Toyota-Corolla.png";
import ToyotaFortuner from "../assets/Toyota-Fortuner.png";
import Volvo_XC40 from "../assets/Volvo-XC40.png";
import HondaAccord from "../assets/Honda-Accord.png";

import Container from "../Layout/Container";
import IconButton from "../General/IconButton";
import Button from "../General/Button";

// Icons
import { X, Car, MapPin, Calendar, Info } from "lucide-react";

const BookCar = () => {
  const [modal, setModal] = useState(false);

  // Booking Infos
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [carImg, setCarImg] = useState("");

  // Modal Infos
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Getting Values from Modal input
  const [ageWarning, setAgeWarning] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  // If all input fields are filled, open modal

  const [showErrorMsg, setShowErrorMsg] = useState(false);

  // Hide error message onClick
  const handleErrorMsg = () => {
    showErrorMsg ? setShowErrorMsg(false) : "";
  };

  const openModal = (e) => {
    e.preventDefault();

    if (
      (modal && showErrorMsg) ||
      carType === "" ||
      pickUp === "" ||
      dropOff === "" ||
      pickDate === "" ||
      dropDate === ""
    ) {
      setShowErrorMsg(true); // Show error message
    } else {
      setModal(true);
      setShowErrorMsg(false); // Hide error message
    }
  };

  // Disable page scroll if modal is opened
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [modal]);

  // hideModal
  const handleModal = () => {
    setModal(false);
    setShowErrorMsg(false); // Hide error message
  };

  // Getting values from Booking input
  const handleCarType = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePickUp = (e) => {
    setPickUp(e.target.value);
  };

  const handleDropOff = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickDate = (e) => {
    setPickDate(e.target.value);
  };

  const handleDropDate = (e) => {
    setDropDate(e.target.value);
  };

  // Based on the selected car type, show car image in the modal. This can be achieved using switch statement or an object mapping. Later is more concise and makes the code more readable

  /* ======== Switch Statement ======== */
  // let imgUrl;
  // switch (carImg) {
  //   case "Mercedes Benz GLK":
  //     imgUrl = Mercedes_Benz_GLK;
  //     break;

  //   case "Toyota Corolla":
  //     imgUrl = ToyotaCorolla;
  //     break;

  //   case "Volvo XC40":
  //     imgUrl = Volvo_XC40;
  //     break;

  //   case "Jeep":
  //     imgUrl = Jeep;
  //     break;

  //   case "BMW 320 ModernLine":
  //     imgUrl = BMW_320_ModernLine;
  //     break;

  //   case "Toyota Fortuner":
  //     imgUrl = ToyotaFortuner;
  //     break;

  //   default:
  //     imgUrl = "";
  // }

  /* ======== Object Mapping ======== */
  const carImages = {
    "Mercedes Benz GLK": Mercedes_Benz_GLK,
    "Toyota Corolla": ToyotaCorolla,
    "Volvo XC40": Volvo_XC40,
    Jeep: Jeep,
    "BMW 320 ModernLine": BMW_320_ModernLine,
    "Toyota Fortuner": ToyotaFortuner,
    "Honda Accord": HondaAccord,
  };

  let imgUrl = carImages[carType] || "";

  // Confirm Booking
  const [bookingDoneMsg, setBookingDoneMsg] = useState(false);

  // Hide booking done message onClick
  const handleBookingDoneMsg = () => {
    setBookingDoneMsg(false);
  };

  const [modalErrorMsg, setModalErrorMsg] = useState(false);

  const confirmBooking = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      mobileNumber === "" ||
      email === "" ||
      age === "" ||
      address === "" ||
      zipCode === ""
    ) {
      setAgeWarning(false);
      setModalErrorMsg(true);
    } else if (age < 18) {
      setAgeWarning(true);
      setModalErrorMsg(false);
    } else {
      setAgeWarning(false);
      setModalErrorMsg(false);
      setModal(false);
      setBookingDoneMsg(true);

      // Clear modal input fields
      setName("");
      setMobileNumber("");
      setEmail("");
      setAge("");
      setAddress("");
      setZipCode("");

      // Hide Booking Done message after 2.5s
      const bookingDoneTimeoutId = setTimeout(() => {
        setBookingDoneMsg(false);
        clearTimeout(bookingDoneTimeoutId);
      }, 2500);
    }
  };

  return (
    <>
      <Container id="book-car">
        <div className="flex flex-col gap-9 rounded-xl px-8 py-6 shadow-modalShadow">
          <h1 className="text-center text-3xl font-bold lg:text-4xl">
            Book A Car
          </h1>

          <div className="mx-auto flex w-full flex-col gap-8">
            {/* Error Message */}
            <div className="flex flex-col gap-4">
              <p
                className={`${showErrorMsg ? "flex" : "hidden"} items-center justify-between rounded-md border border-transparent bg-red-200 p-3 text-center text-base font-medium text-red-500`}
              >
                All fields are required!{" "}
                <X className="cursor-pointer" onClick={handleErrorMsg} />
              </p>

              {/* Booking Done Message */}
              <p
                className={`${bookingDoneMsg ? "flex" : "hidden"} items-center justify-between rounded-md border border-transparent bg-green-200 p-3 text-center text-base font-medium text-green-500`}
              >
                Booking Done! Kindly check your email for confirmation message.{" "}
                <X className="cursor-pointer" onClick={handleBookingDoneMsg} />
              </p>
            </div>

            <form className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Car Selection */}
              <div className="flex flex-col gap-6">
                <label
                  htmlFor="carType"
                  className="flex items-center text-lg font-medium"
                >
                  <Car /> &nbsp; Select Car Type{" "}
                  <b className="text-color-50">*</b>
                </label>
                <select
                  id="carType"
                  className="rounded-[4px] border border-color-500 px-5 py-4 text-base font-normal"
                  onChange={handleCarType}
                >
                  <option value={carType}>Select Car Type</option>
                  <option value="Mercedes Benz GLK">Mercedes Benz GLK</option>
                  <option value="Toyota Corolla">Toyota Corolla</option>
                  <option value="Volvo XC40">Volvo XC40</option>
                  <option value="Jeep">Jeep</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Toyota Fortuner">Toyota Fortuner</option>
                  <option value="Honda Accord">Honda Accord</option>
                </select>
              </div>

              {/* Pick Up Location */}
              <div className="flex flex-col gap-6">
                <label
                  htmlFor="pickLocation"
                  className="flex items-center text-lg font-medium"
                >
                  <MapPin /> &nbsp; Pick Up Location{" "}
                  <b className="text-color-50">*</b>
                </label>
                <select
                  id="pickLocation"
                  className="rounded-[4px] border border-color-500 px-5 py-4 text-base font-normal"
                  onChange={handlePickUp}
                >
                  <option value={pickUp}>Pick Up Location</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Detroit">Detroit</option>
                  <option value="Chicago">Chicago</option>
                  <option value="San Francisco">San Francisco</option>
                </select>
              </div>

              {/* Drop Off Locations */}
              <div className="flex flex-col gap-6">
                <label
                  htmlFor="dropLocation"
                  className="flex items-center text-lg font-medium"
                >
                  <MapPin /> &nbsp; Drop-off Location{" "}
                  <b className="text-color-50">*</b>
                </label>
                <select
                  id="dropLocation"
                  className="rounded-[4px] border border-color-500 px-5 py-4 text-base font-normal"
                  onChange={handleDropOff}
                >
                  <option value={dropOff}>Drop-off Location</option>
                  <option value="Detroit">Detroit</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="New York">New York</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Chicago">Chicago</option>
                </select>
              </div>

              {/* Pick Up Date */}
              <div className="flex flex-col gap-6">
                <label
                  htmlFor="pickDate"
                  className="flex items-center text-lg font-medium"
                >
                  <Calendar /> &nbsp; Pick-up Date{" "}
                  <b className="text-color-50">*</b>
                </label>
                <input
                  type="date"
                  id="pickDate"
                  value={pickDate}
                  className="rounded-[4px] border border-color-500 px-4 py-[14px] text-base outline-none"
                  onChange={handlePickDate}
                />
              </div>

              {/* Drop-off Date */}
              <div className="flex flex-col gap-6">
                <label
                  htmlFor="dropDate"
                  className="flex items-center text-lg font-medium"
                >
                  <Calendar /> &nbsp; Drop-off Date{" "}
                  <b className="text-color-50">*</b>
                </label>
                <input
                  type="date"
                  id="dropDate"
                  value={dropDate}
                  className="rounded-[4px] border border-color-500 px-4 py-[14px] outline-none"
                  onChange={handleDropDate}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="self-end rounded-[4px] bg-color-50 px-4 py-4 text-lg font-medium text-white shadow-shadowDefault hover:shadow-shadowHover"
                onClick={openModal}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* ========== Modal ========== */}
      <div
        className={` ${modal ? "flex" : "hidden"} modal fixed left-[50%] top-[59%] z-[99999] mx-auto h-screen w-full max-w-[60rem] translate-x-[-50%] translate-y-[-56%] flex-col overflow-x-hidden overflow-y-scroll rounded-lg bg-neutral-200 pb-4`}
      >
        {/* Modal Title */}
        <div className="flex items-center justify-between bg-color-50 px-4 py-5">
          <h2 className="text-2xl font-bold text-white">Complete Booking</h2>
          <IconButton onClick={handleModal}>
            <X className="stroke-white" />
          </IconButton>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-6 bg-color-400 px-8 py-10">
          <h4 className="flex items-center text-xl font-semibold text-color-50">
            <Info /> &nbsp; Upon confirming your booking, you will receive:
          </h4>
          <p className="text-base font-medium text-color-200">
            Your booking voucher along with a toll-free customer support number.
            Wish you a wonderful journey and thank you for choosing Rent
            <span className="text-color-50">Wheel</span>.
          </p>
        </div>

        {/* Car Info */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#7878789f] bg-white p-10 lgSm:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="stroke-color-50" />{" "}
                <h5 className="text-base font-semibold">Pick-up Date & Time</h5>
              </div>
              <p className="font-medium">
                {pickDate}&nbsp;/ &nbsp;
                <input
                  type="time"
                  id=""
                  className="rounded-[4px] border border-color-500 px-2 py-[6px] outline-none"
                />
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="stroke-color-50" />{" "}
                <h5 className="text-base font-semibold">
                  Drop-off Date & Time
                </h5>
              </div>
              <p className="font-medium">
                {dropDate}&nbsp;/ &nbsp;
                <input
                  type="time"
                  id=""
                  className="rounded-[4px] border border-color-500 px-2 py-[6px] outline-none"
                />
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="stroke-color-50" />{" "}
                <h5 className="text-base font-semibold">Pick-up Location</h5>
              </div>
              <p className="font-medium"> {pickUp}</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="stroke-color-50" />{" "}
                <h5 className="text-base font-semibold">Drop-off Location</h5>
              </div>
              <p className="font-medium">{dropOff}</p>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <h5 className="text-xl font-semibold uppercase text-color-50">
              Car - <span>{carType}</span>
            </h5>

            <img
              src={imgUrl}
              alt={carType}
              className="max-w-[400px] object-contain"
            />
          </div>
        </div>

        {/* Personal Information */}
        <div className="flex flex-col gap-8 p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xl font-bold uppercase text-color-50">
              Personal Information
            </h3>
            <p
              className={`${ageWarning ? "block" : "hidden"} text-center font-medium text-red-500`}
            >
              Sorry, but our car rental services are only available to
              individuals aged 18 and above.
            </p>
            <p
              className={`${modalErrorMsg ? "block" : "hidden"} text-center font-medium text-red-500`}
            >
              Please fill all the required fields!
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-base font-medium">
                  First Name&nbsp; <b className="text-color-50">*</b>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  placeholder="Enter Your Name"
                  spellCheck="false"
                  className="rounded-[5px] border border-neutral-500 bg-transparent py-2 pl-[0.5rem] pr-[0.7rem] text-base font-normal text-neutral-800 outline-none"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mobileNumber" className="text-base font-medium">
                  Mobile No.&nbsp; <b className="text-color-50">*</b>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="tel"
                  required
                  aria-required="true"
                  placeholder="Enter Your Mobile Number"
                  className="rounded-[5px] border border-neutral-500 bg-transparent py-2 pl-[0.5rem] pr-[0.7rem] text-base font-normal text-neutral-800 outline-none"
                  value={mobileNumber}
                  onChange={handleMobileNumber}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-base font-medium">
                  Email&nbsp; <b className="text-color-50">*</b>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  aria-required="true"
                  className="rounded-[5px] border border-neutral-500 bg-transparent py-2 pl-[0.5rem] pr-[0.7rem] text-base font-normal text-neutral-800 outline-none"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="age" className="text-base font-medium">
                  Age&nbsp; <b className="text-color-50">*</b>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="18"
                  required
                  aria-required="true"
                  className="rounded-[5px] border border-neutral-500 bg-transparent py-2 pl-[0.5rem] pr-[0.7rem] text-base font-normal text-neutral-800 outline-none"
                  value={age}
                  onChange={handleAge}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-base font-medium">
                  Address&nbsp; <b className="text-color-50">*</b>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                  required
                  aria-required="true"
                  className="rounded-[5px] border border-neutral-500 bg-transparent py-2 pl-[0.5rem] pr-[0.7rem] text-base font-normal text-neutral-800 outline-none"
                  value={address}
                  onChange={handleAddress}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="zipCode" className="text-base font-medium">
                  Zip Code&nbsp; <b className="text-color-50">*</b>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zip-code"
                  placeholder="Enter Your Zip Code"
                  required
                  aria-required="true"
                  className="rounded-[5px] border border-neutral-500 bg-transparent py-2 pl-[0.5rem] pr-[0.7rem] text-base font-normal text-neutral-800 outline-none"
                  value={zipCode}
                  onChange={handleZipCode}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="cursor-pointer" />
                <p className="text-base font-medium">
                  Send me latest news, offers & updates.
                </p>
              </div>

              <Button
                className="w-fit bg-color-50 text-white shadow-shadowDefault hover:shadow-shadowHover"
                onClick={confirmBooking}
              >
                Book Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookCar;
