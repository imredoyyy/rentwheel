import React, { useState } from "react";

import Container from "../Layout/Container";
import Pagination from "../components/Pagination";
import Button from "../General/Button";

// Icon
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSubmitMsg, setShowSubmitMsg] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit"); // Change false to "Submit"

  const handleContactName = (e) => {
    setContactName(e.target.value);
  };
  const handleContactEmail = (e) => {
    setContactEmail(e.target.value);
  };
  const handleContactMessage = (e) => {
    setContactMessage(e.target.value);
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();

    if (contactName === "" || contactEmail === "" || contactMessage === "") {
      setShowErrorMsg(true); // Show error message
    } else {
      setShowErrorMsg(false); // Hide error message
      setShowSubmitMsg(true); // Show submit message
      setSubmitBtnText("Success");
      // Reset form
      setContactName("");
      setContactEmail("");
      setContactMessage("");

      const showSubmitMsgIntervalId = setTimeout(() => {
        setShowSubmitMsg(false); // Hide submit message
        setSubmitBtnText("Submit"); // Revert button text to original
        clearTimeout(showSubmitMsgIntervalId);
      }, 2000);
    }
  };
  return (
    <>
      <Pagination name="Contact" />
      <Container className="mt-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center gap-8 md:items-start">
            <h1 className="text-center text-3xl font-bold capitalize md:text-left">
              Have further inquiries?
              <br /> Feel free to contact us.
            </h1>
            <p className="max-w-[470px] text-center text-base font-normal text-color-200 md:text-left">
              Got questions? Don't hesitate to reach out! Whether you need more
              information or assistance, feel free to contact us.
            </p>
            <ul className="flex flex-col items-center gap-3 md:items-start">
              <li className="flex w-fit cursor-pointer items-center gap-2 text-lg font-medium text-color-200 transition-colors duration-300 hover:text-color-50 hover:[&_svg]:stroke-color-50">
                <Phone className="size-6" /> <span>+123456789</span>
              </li>
              <li className="flex w-fit cursor-pointer items-center gap-2 text-lg font-medium text-color-200 transition-colors duration-300 hover:text-color-50 hover:[&_svg]:stroke-color-50">
                <Mail className="size-6" /> <span>support@rentwheeel.com</span>
              </li>
              <li className="flex w-fit items-center gap-2 text-lg font-medium text-color-200 transition-colors duration-300 hover:text-color-50 hover:[&_svg]:stroke-color-50">
                <MapPin className="size-6" /> <span>New York, USA</span>
              </li>
            </ul>
          </div>

          <form className="flex flex-col gap-6">
            <div>
              <p
                className={`text-center text-base font-medium text-red-500 ${showErrorMsg ? "block" : "hidden"}`}
              >
                All fields are required!
              </p>
              <p
                className={`text-center text-base font-medium text-green-500 ${showSubmitMsg ? "block" : "hidden"}`}
              >
                Message sent successfully!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contactName" className="font-medium">
                  Name <b className="text-color-50">*</b>
                </label>
                <input
                  type="name"
                  id="contactName"
                  name="name"
                  required
                  aria-required="true"
                  className="rounded-md border border-color-200 py-3 pl-2 pr-4 text-base font-normal outline-none placeholder:text-color-200"
                  placeholder="Enter Your Name"
                  value={contactName}
                  onChange={handleContactName}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contactEmail" className="font-medium">
                  Email <b className="text-color-50">*</b>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  required
                  aria-required="true"
                  className="rounded-md border border-color-200 py-3 pl-3 pr-4 text-base font-normal outline-none placeholder:text-color-200"
                  placeholder="Enter Your Email"
                  value={contactEmail}
                  onChange={handleContactEmail}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contactDesc" className="font-medium">
                  Tell us about <b className="text-color-50">*</b>
                </label>
                <textarea
                  id="contactDesc"
                  rows="5"
                  required
                  aria-required="true"
                  className="resize-y rounded-md border border-color-200 py-2 pl-3 pr-4 text-base font-normal outline-none placeholder:text-color-200"
                  placeholder="Your message here..."
                  value={contactMessage}
                  onChange={handleContactMessage}
                ></textarea>
              </div>
              <Button
                className="bg-color-50 text-white shadow-shadowDefault hover:shadow-shadowHover"
                onClick={handleSubmitContactForm}
              >
                {submitBtnText}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
