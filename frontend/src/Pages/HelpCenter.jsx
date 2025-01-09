import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const HelpCenter = () => {
  const location = useLocation();
  const productName = location.state?.productName;
  const [selectedOption, setSelectedOption] = useState("");
  const [emailError, setEmailError] = useState("");

  // Auto-select the product option when navigating from product page
  useEffect(() => {
    if (productName) {
      setSelectedOption(productName);
    }
  }, [productName]);

  const handleButtonClick = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? "" : option));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    formData.append("access_key", "947616dd-f4eb-41a3-9c53-a0ae501f803e");
    formData.append("subject", selectedOption);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Request Sent!",
        text: "Message sent successfully!",
        icon: "success",
      });
    } else {
      console.log("Error", res);
    }
  };

  const defaultServiceText = "Service Support";

  return (
    <>
      <section className="max-padd-container mt-16">
        <section className="py-16" id="help-center">
          <div className="container mx-auto text-center">
            <h5 className="block tracking-normal font-semibold leading-snug text-blue-gray-900 mb-4 !text-base lg:!text-2xl">
              Customer Care
            </h5>
            <h1 className="block tracking-normal font-semibold leading-tight text-blue-gray-900 mb-4 !text-3xl lg:!text-5xl">
              We're Here For You!
            </h1>
            <p className="block leading-relaxed text-inherit mb-10 text-base lg:mb-20 mx-auto max-w-3xl !text-gray-500">
              You can raise a visa query, get help regarding our services, or ask any other questions you may have.
            </p>
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
              <form onSubmit={onSubmit} action="#" className="flex flex-col gap-4">
                <p className="block antialiased font-sans text-sm leading-normal text-inherit text-left !font-semibold !text-gray-600">
                  Select Options
                </p>
                <div className="flex gap-4">
                  <button
                    className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 text-xs py-3 px-6 rounded-lg border ${
                      selectedOption === "Visa inquiry"
                        ? "bg-secondary text-white"
                        : "border-gray-900 text-gray-900 hover:opacity-75"
                    }`}
                    type="button"
                    onClick={() => handleButtonClick("Visa inquiry")}
                  >
                    Visa inquiry
                  </button>
                  <button
                    className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 text-xs py-3 px-6 rounded-lg border ${
                      selectedOption === (productName || defaultServiceText)
                        ? "bg-secondary text-white"
                        : "border-gray-900 text-gray-900 hover:opacity-75"
                    }`}
                    type="button"
                    onClick={() => handleButtonClick(productName || defaultServiceText)}
                  >
                    {productName || defaultServiceText}
                  </button>
                </div>
                <input
                  type="hidden"
                  name="subject"
                  value={selectedOption}
                  readOnly
                />
                {/* Rest of the form remains the same */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                      Your Name
                    </p>
                    <input
                      placeholder="Your Name"
                      name="user-name"
                      className="w-full h-11 px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 focus:!border-gray-900 focus:!border-2"
                    />
                  </div>
                  <div>
                    <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                      Your Number
                    </p>
                    <input
                      type="number"
                      placeholder="XXXXXXXXXX"
                      name="user-number"
                      className="w-full h-11 px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 focus:!border-gray-900 focus:!border-2"
                    />
                  </div>
                </div>
                <div>
                  <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                    Your Email
                  </p>
                  <input
                    placeholder="name@email.com"
                    name="email"
                    className="w-full h-11 px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 focus:!border-gray-900 focus:!border-2"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>
                <div>
                  <p className="block antialiased font-sans text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900">
                    Your Message
                  </p>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    name="message"
                    className="w-full px-3 py-2.5 rounded-md !border !border-gray-300 text-gray-900 focus:!border-gray-900 focus:!border-2"
                  />
                </div>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 text-xs py-3 px-6 rounded-lg text-white bg-secondary shadow-md w-full hover:opacity-90"
                  type="submit"
                  disabled={!selectedOption}
                >
                  Send message
                </button>
              </form>
              <iframe
                width="100%"
                height={510}
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Al%20Sheebani%20Building,%20Office%202,%20Al%20Seba%20Street%20-%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%B4%D8%A7%D8%B7%D8%A6%20%D8%AC%D9%85%D9%8A%D8%B1%D8%A7%20-%20Dubai%20Marina%20-%20Dubai%20-%20United%20Arab%20Emirates+(Your%20Choice%20Tourism)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default HelpCenter;
