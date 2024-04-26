import React, { useState } from "react";

// Component
import Container from "../Layout/Container";

// Icon
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Open the first accordion by default

  // Clicking on any other accordion closes the opened one and opens the clicked one
  const handleAccordion = (index) => {
    setActiveAccordion((a) => (a === index ? -1 : index));
  };

  return (
    <Container>
      <div className="flex flex-col gap-4">
        {/* Section Heading & description */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center text-3xl font-bold">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-center font-normal text-color-200 sm:max-w-[550px]">
            Explore frequently asked questions about our car rental service to
            make your experience smoother and hassle-free
          </p>
        </div>

        {/* ======== FAQ Container ======== */}
        <div className="flex flex-col gap-2 px-8 py-6 shadow-lg ring-black">
          {/* FAQ 1 */}
          <div className="flex flex-col gap-1 shadow-sm">
            <div
              className={`${
                activeAccordion === 0
                  ? "bg-color-50 text-white shadow-shadowDefault"
                  : ""
              } flex cursor-pointer items-center rounded-[6px] px-4 py-3 transition-all duration-500`}
              onClick={() => handleAccordion(0)}
            >
              <h2 className="text-base font-semibold md:text-lg">
                1. Question: How old do I need to be to rent a car?
              </h2>{" "}
              &nbsp;
              <span>
                <ChevronDown
                  className={`size-6 ${
                    activeAccordion === 0
                      ? "rotate-180 stroke-white"
                      : "stroke-color-50"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
            <div
              className={`${
                activeAccordion === 0
                  ? "max-h-[20rem] overflow-visible py-4"
                  : "max-h-0 overflow-hidden"
              }  px-6 text-color-200 transition-all duration-500`}
            >
              Answer: To rent a car, you typically need to be at least 18 years
              old.
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="flex flex-col gap-1 shadow-sm">
            <div
              className={`${
                activeAccordion === 1
                  ? "bg-color-50 text-white shadow-shadowDefault"
                  : ""
              } flex cursor-pointer items-center rounded-[6px] px-4 py-3 transition-all duration-500`}
              onClick={() => handleAccordion(1)}
            >
              <h2 className="text-base font-semibold md:text-lg">
                2. Question: What documents do I need to rent a car?
              </h2>{" "}
              &nbsp;
              <span>
                <ChevronDown
                  className={`size-6 ${
                    activeAccordion === 1
                      ? "rotate-180 stroke-white"
                      : "stroke-color-50"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
            <div
              className={`${
                activeAccordion === 1
                  ? "max-h-[20rem] overflow-visible py-4"
                  : "max-h-0 overflow-hidden"
              }  px-6 text-color-200 transition-all duration-500`}
            >
              Answer: You will need a valid driver's license, a credit card in
              your name for the deposit, and sometimes additional identification
              if necessary. International renters may require an International
              Driving Permit and passport.
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="flex flex-col gap-1 shadow-sm">
            <div
              className={`${
                activeAccordion === 2
                  ? "bg-color-50 text-white shadow-shadowDefault"
                  : ""
              } flex cursor-pointer items-center rounded-[6px] px-4 py-3 transition-all duration-500`}
              onClick={() => handleAccordion(2)}
            >
              <h2 className="text-base font-semibold md:text-lg">
                3. Question: What happens if I return the car late?
              </h2>{" "}
              &nbsp;
              <span>
                <ChevronDown
                  className={`size-6 ${
                    activeAccordion === 2
                      ? "rotate-180 stroke-white"
                      : "stroke-color-50"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
            <div
              className={`${
                activeAccordion === 2
                  ? "max-h-[20rem] overflow-visible py-4"
                  : "max-h-0 overflow-hidden"
              }  px-6 text-color-200 transition-all duration-500`}
            >
              Answer: Late returns may result in additional charges, usually
              calculated on an hourly or daily basis. We recommend you to return
              the car on time to avoid extra fees. If you anticipate being late,
              you can contact us to extend the rental duration.
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="flex flex-col gap-1 shadow-sm">
            <div
              className={`${
                activeAccordion === 3
                  ? "bg-color-50 text-white shadow-shadowDefault"
                  : ""
              } flex cursor-pointer items-center rounded-[6px] px-4 py-3 transition-all duration-500`}
              onClick={() => handleAccordion(3)}
            >
              <h2 className="text-base font-semibold md:text-lg">
                4. Question: What should I do in case of an accident or
                breakdown?
              </h2>{" "}
              &nbsp;
              <span>
                <ChevronDown
                  className={`size-6 ${
                    activeAccordion === 3
                      ? "rotate-180 stroke-white"
                      : "stroke-color-50"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
            <div
              className={`${
                activeAccordion === 3
                  ? "max-h-[20rem] overflow-visible py-4"
                  : "max-h-0 overflow-hidden"
              }  px-6 text-color-200 transition-all duration-500`}
            >
              Answer: In case of an accident, call emergency services
              immediately and then notify us. We will guide you on the necessary
              steps. For breakdowns, we will send our experts to offer roadside
              assistance, so feel free to contact us.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
