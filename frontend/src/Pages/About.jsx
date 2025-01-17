import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Aboutimg from "../assets/tour_3_upscaled.webp";
import swissotel from "../assets/partners/swissotel.png";
import roda from "../assets/partners/roda.png";
import anantara from "../assets/partners/anantara.png";
import pullman from "../assets/partners/pullman.webp";
import premier_inn from "../assets/partners/premier_inn.png";
import cityP from "../assets/partners/cityP.png";
import rotana from "../assets/partners/rotana.png";
import crownplaza from "../assets/partners/crowneplaza.png";
import jannah from "../assets/partners/jannah.png";
import rosegrp from "../assets/partners/rosegrp.png";
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
                      At our tourism agency, we believe in crafting
                      unforgettable experiences. Our dedicated team is
                      passionate about exploring new destinations and ensuring
                      every journey is memorable and enriching for you.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                        Travel Desk
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Your Choice Star Tourism currently has 15 Travel Desk
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                        Tour Packages
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Our seasoned Travel Consultants are here to help you
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                        Accommodation
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Having established partnerships with numerous hotels
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                        Transportation
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        We provide seamless airport transfers & transportation.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                        MICE
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        We can customize an appealing package for any Dubai City
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                        Air Ticketing and Visa
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        We provide flight booking services and various visa
                        options
                      </p>
                    </div>
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

      <section className="w-full overflow-hidden relative">
        {/* Left gradient overlay with softer color */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 z-10"
          style={{
            background:
              "linear-gradient(to right, rgb(248, 246, 251) 50%, rgba(248, 246, 251, 0))",
          }}
        ></div>

        {/* Right gradient overlay with softer color */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 z-10"
          style={{
            background:
              "linear-gradient(to left, rgb(248, 246, 251) 50%, rgba(248, 246, 251, 0))",
          }}
        ></div>

        <div className="relative w-full">
          <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite]">
            {/* First set of logos */}
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
                <img src={emaar} alt="emaar" className="h-20 object-contain" />
              </div>
              <div className="inline-flex items-center justify-center mx-4 w-40">
                <img src={dutch} alt="dutch" className="h-28 object-contain" />
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
                <img src={emaar} alt="emaar" className="h-20 object-contain" />
              </div>
              <div className="inline-flex items-center justify-center mx-4 w-40">
                <img src={dutch} alt="dutch" className="h-28 object-contain" />
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
      </section>

      <section className="max-padd-container py-12 mb-16 mt-20 hotel-partners bg-white">
        <Title
          title1={"Hotel "}
          title2={"Partners"}
          titleStyles={"pb-10"}
          para6Styles={"!block"}
        />
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
            <a
              href="https://www.swissotel.com/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={swissotel} alt="" className="h-24 object-contain" />
            </a>
            <a
              href="https://www.rodaalmuroojresidencesdubai.com/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={roda} alt="" className="h-24 object-contain" />
            </a>
            <a
              href="https://www.anantara.com/en/downtown-dubai"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={anantara} alt="" className="h-24 object-contain" />
            </a>
            <a
              href="https://pullmandubaidowntown.com/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={pullman} alt="" className="h-14 object-contain" />
            </a>
            <a
              href="https://mena.premierinn.com/en/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={premier_inn} alt="" className="h-14 object-contain" />
            </a>
            <a
              href="https://www.citypremieredubai.com/en/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={cityP} alt="" className="h-20 object-contain" />
            </a>
            <a
              href="https://www.rotana.com/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={rotana} alt="" className="h-36 object-contain" />
            </a>
            <a
              href="https://www.ihg.com/crowneplaza/hotels/us/en/dubai/dxbmr/hoteldetail"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={crownplaza} alt="" className="h-20 object-contain" />
            </a>
            <a
              href="https://www.jannah-hotels.com/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={jannah} alt="" className="h-24 object-contain" />
            </a>
            <a
              href="https://www.rosehotelsgroup.com/hotels-apartments/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={rosegrp} alt="" className="h-10 object-contain" />
            </a>
            <a
              href="https://stayleva.com/leva-hotel-mazaya-centre/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={leva} alt="" className="h-24 object-contain" />
            </a>
            <a
              href="https://donatellodubai.com/"
              target="_blank"
              className="flex justify-center items-center border border-solid 
  border-gray-200 shadow-sm h-24 rounded-2xl bg-primary"
            >
              <img src={donatello} alt="" className="h-24 object-contain" />
            </a>
          </div>
        </div>
      </section>

      <section className="max-padd-container py-16 my-16">
        <Title
          title1={"Our "}
          title2={"Testimonials"}
          titleStyles={"pb-10"}
          para7Styles={"!block"}
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
