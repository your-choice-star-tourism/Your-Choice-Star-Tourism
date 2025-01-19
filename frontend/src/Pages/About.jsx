import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Aboutimg from "../assets/tour_3_upscaled.webp";
import swissotel from "../assets/partners/swissotel.png";
import roda from "../assets/partners/roda.png";
import anantara from "../assets/partners/anantara.png";
import pullman from "../assets/partners/extralogo.png";
import premier_inn from "../assets/partners/premier_inn.png";
import cityP from "../assets/partners/cityP.png";
import rotana from "../assets/partners/emiratesgrand.png";
import jannah from "../assets/partners/mena.png";
import rosegrp from "../assets/partners/mercure.png";
import leva from "../assets/partners/leva.png";
import donatello from "../assets/partners/donatello.png";
import yasisland from "../assets/partners/yas island.png";
import dubaiparks from "../assets/partners/dubai parks.png";
import imglogo from "../assets/partners/imglogo.png";
import globalvillage from "../assets/partners/global village.png";
import laperle from "../assets/partners/la perle.png";
import motf from "../assets/partners/motf.png";
import emaar from "../assets/partners/emaar.png";
import dutch from "../assets/partners/dutch.png";
import csdubai from "../assets/partners/csdubai.png";
import skydive from "../assets/partners/skydive.png";
import alarab from "../assets/partners/alarab.png";
import aquaventure from "../assets/partners/aquaventure.webp";
import {
  FaHotel,
  FaCar,
  FaCarSide,
  FaHandshake,
  FaPlane,
  FaPassport,
  FaWaterLadder,
  FaShip,
  FaTicket,
  FaVanShuttle,
} from "react-icons/fa6";
import limo from "../assets/features/limo.png"
import jetski from "../assets/features/jetski.png"
import Title from "../components/Title";
import { ElfsightWidget } from "react-elfsight-widget";

const About = () => {
  return (
    <>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 mt-16">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    About Us
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-secondary text-4xl font-semibold font-manrope leading-normal lg:text-start text-center">
                      Uniting You with the World of Travel
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      We are a Dubai-based company dedicated to providing
                      exceptional travel services to the Middle East and
                      international markets. Despite the challenges of a
                      competitive industry, we have built a strong reputation
                      for delivering personalized experiences and maintaining
                      high customer satisfaction. Our mission is simple: to
                      create unforgettable journeys at competitive prices while
                      ensuring unparalleled service quality.
                    </p>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      At Your Choice Star Tourism, we collaborate with
                      experienced partners to curate a seamless travel
                      experience for our customers. From luxury travel to unique
                      adventures, our services are tailored to suit your
                      preferences. Our focus on quality and innovation has
                      enabled us to consistently exceed customer expectations.
                    </p>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our success is rooted in our unwavering commitment to
                      excellence, innovation, and customer-centric values.
                      Whether you're exploring the UAE or embarking on an
                      international adventure, our team is here to bring your
                      dream trips to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src={Aboutimg}
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section Container */}
      <section className="bg-white my-16 py-16 overflow-hidden">
        {/* what we do */}
        <section className="max-padd-container mb-16 pb-16">
          <Title
            title1={"What "}
            title2={"We Do"}
            titleStyles={"pb-10"}
            para9Styles={"!block"}
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-primary hover:border-secondary cursor-not-allowed transition-all duration-200 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Travel Desk
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Your Choice Star Tourism currently has multiple Travel Desk
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-primary hover:border-secondary cursor-not-allowed transition-all duration-200 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Accommodation
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Having established partnerships with numerous hotels
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-primary hover:border-secondary cursor-not-allowed transition-all duration-200 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Tour Packages
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Our seasoned Travel Consultants are here to help you
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-primary hover:border-secondary cursor-not-allowed transition-all duration-200 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Transportation
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  We provide seamless airport transfers & transportation.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-primary hover:border-secondary cursor-not-allowed transition-all duration-200 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  MICE
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  We can customize an appealing package for any Dubai City
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 bg-primary hover:border-secondary cursor-not-allowed transition-all duration-200 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Air Ticketing and Visa
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  We provide flight booking services and various visa options
                </p>
              </div>
            </div>
          </div>

          {/* icons */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-[1px]">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaHotel className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Hotels</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaVanShuttle className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Transfers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaCar className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Car Rentals</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <img src={limo} className="w-6 h-6"/>
                </Link>
              </div>
              <div className="mt-2 font-semibold">Limousine</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaHandshake className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">MICE</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaPlane className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Air Tickets</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaPassport className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Visa</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <img src={jetski} className="w-6 h-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Water Sports</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaShip className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Yacht</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-secondary rounded-full p-4 flex items-center justify-center">
                <Link to={"/Tours"}>
                  <FaTicket className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-2 font-semibold">Excursions</div>
            </div>
          </div>
        </section>

        {/* Service Partners Slider */}
        <section className="max-padd-container">
          <Title
            title1={"Service "}
            title2={"Partners"}
            titleStyles={"pb-10"}
            para6Styles={"!block"}
          />
        </section>
        <div className="w-full overflow-hidden relative">
          {/* Left gradient overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10"
            style={{
              background:
                "linear-gradient(to right, rgb(248, 246, 251) 50%, rgba(248, 246, 251, 0))",
            }}
          ></div>

          {/* Right gradient overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-10 z-10"
            style={{
              background:
                "linear-gradient(to left, rgb(248, 246, 251) 50%, rgba(248, 246, 251, 0))",
            }}
          ></div>

          <div className="relative w-full bg-primary">
            <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite]">
              {/* First set of service logos */}
              <div className="flex items-center shrink-0">
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={yasisland}
                    alt="yasisland"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={dubaiparks}
                    alt="dubaiparks"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={imglogo}
                    alt="imglogo"
                    className="h-14 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={globalvillage}
                    alt="globalvillage"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={laperle}
                    alt="la perle"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img src={motf} alt="motf" className="h-24 object-contain" />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={emaar}
                    alt="emaar"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={dutch}
                    alt="dutch"
                    className="h-28 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={csdubai}
                    alt="csdubai"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={aquaventure}
                    alt="aquaventure"
                    className="h-10 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={skydive}
                    alt="skydive"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={alarab}
                    alt="alarab"
                    className="h-28 object-contain"
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center shrink-0">
                {/* Duplicate all the above logo divs exactly */}
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={yasisland}
                    alt="yasisland"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={dubaiparks}
                    alt="dubaiparks"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={imglogo}
                    alt="imglogo"
                    className="h-14 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={globalvillage}
                    alt="globalvillage"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={laperle}
                    alt="la perle"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img src={motf} alt="motf" className="h-24 object-contain" />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={emaar}
                    alt="emaar"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={dutch}
                    alt="dutch"
                    className="h-28 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={csdubai}
                    alt="csdubai"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={aquaventure}
                    alt="aquaventure"
                    className="h-10 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={skydive}
                    alt="skydive"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={alarab}
                    alt="alarab"
                    className="h-28 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Partners Slider */}
        <section className="max-padd-container">
          <Title
            title1={"Hotel "}
            title2={"Partners"}
            titleStyles={"pb-10 mt-16"}
            para7Styles={"!block"}
          />
        </section>
        <div className="w-full overflow-hidden relative">
          {/* Left gradient overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10"
            style={{
              background:
                "linear-gradient(to right, rgb(248, 246, 251) 50%, rgba(248, 246, 251, 0))",
            }}
          ></div>

          {/* Right gradient overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-10 z-10"
            style={{
              background:
                "linear-gradient(to left, rgb(248, 246, 251) 50%, rgba(248, 246, 251, 0))",
            }}
          ></div>

          <div className="relative w-full bg-primary py-4">
            <div className="flex whitespace-nowrap animate-[scrollReverse_40s_linear_infinite]">
              {/* First set of hotel logos */}
              <div className="flex items-center shrink-0">
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={swissotel}
                    alt="swissotel"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img src={roda} alt="roda" className="h-16 object-contain" />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={anantara}
                    alt="anantara"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={pullman}
                    alt="pullman"
                    className="h-12 object-contain -ms-2"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={premier_inn}
                    alt="premier inn"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={cityP}
                    alt="cityP"
                    className="h-14 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={rotana}
                    alt="rotana"
                    className="h-14 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={jannah}
                    alt="jannah"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={rosegrp}
                    alt="rosegrp"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img src={leva} alt="leva" className="h-20 object-contain" />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={donatello}
                    alt="donatello"
                    className="h-20 object-contain"
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center shrink-0">
                {/* Duplicate all the above hotel logo divs exactly */}
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={swissotel}
                    alt="swissotel"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img src={roda} alt="roda" className="h-16 object-contain" />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={anantara}
                    alt="anantara"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={pullman}
                    alt="pullman"
                    className="h-12 object-contain -ms-2"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={premier_inn}
                    alt="premier inn"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={cityP}
                    alt="cityP"
                    className="h-14 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={rotana}
                    alt="rotana"
                    className="h-14 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={jannah}
                    alt="jannah"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={rosegrp}
                    alt="rosegrp"
                    className="h-20 object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img src={leva} alt="leva" className="h-20 object-contain" />
                </div>
                <div className="inline-flex items-center justify-center mx-4 w-40">
                  <img
                    src={donatello}
                    alt="donatello"
                    className="h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-padd-container py-16 my-16">
        <Title
          title1={"Our "}
          title2={"Testimonials"}
          titleStyles={"pb-10"}
          para8Styles={"!block"}
        />
        <ElfsightWidget widgetID="0e24f282-eafa-4887-9860-b8e48524feb7" />
      </section>

      <section className="max-padd-container bg-white">
        <Footer />
      </section>
    </>
  );
};

export default About;
