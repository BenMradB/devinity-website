import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

import CTOImageBilel from "../images/bilel.jpeg";
import CTOImageYassine from "../images/yassine.jpg";
import CEOImageElyess from "../images/elyess.jpg";
import TeammateCard from "../components/TeammateCard";

const DemoProduct = () => {
  return (
    <>
      <NavBar />
      <div id="services" className="bg-gray-100 py-12">
        <section data-aos="zoom-in-down">
          <div className="my-4 py-4">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
              Our Team
            </h2>

            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900"></div>
            </div>
            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
              We are deeply committed to the growth and success of our clients.
            </h2>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row  flex-wrap justify-evenly">
              {/* <div className="bg-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.1] transition duration-1000 ease-in-out h-[600px] w-full"
                    src={CEOImageElyess}
                  />
                  <h2 className="font-semibold my-7 text-2xl text-center">
                    CEO , Sales and Marketing Manager
                  </h2>
                  <p className="text-md font-medium">
                    We develop high-quality, custom cross-platform mobile
                    applications that are robust and optimized for performance,
                    scalability, and accessibility.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.1] transition duration-1000 h-[600px] w-full ease-in-out"
                    src={CTOImageBilel}
                  />
                  <h2 className="font-semibold my-7 text-2xl text-center">
                    CTO , Web and Mobile Developer
                  </h2>
                  <p className="text-md font-medium">
                    We specialize in creating and optimizing high-quality,
                    custom websites for businesses and organizations of all
                    sizes. Building mobile-friendly and easy-to-use websites and
                    applications for clients.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.1] transition duration-1000 h-[600px] w-full ease-in-out"
                    src={CTOImageYassine}
                  />
                  <h2 className="font-semibold my-7 text-2xl text-center ">
                    CTO , Web and Mobile Developer
                  </h2>
                  <p className="text-md font-medium">
                    We provide domain registration and web hosting services to
                    individuals and organizations to enable them gain visibility
                    in the digital space.
                  </p>
                </div>
              </div> */}
              <TeammateCard
                icon={CEOImageElyess}
                title="Elyess Ben Rhouma"
                position="CEO , Sales and Marketing Manager"
                subTitle="We develop high-quality, custom cross-platform mobile
                    applications that are robust and optimized for performance,
                    scalability, and accessibility."
              />
              <TeammateCard
                icon={CTOImageBilel}
                title="Bilel Benmrad"
                position="CTO , Web and Mobile Developer"
                subTitle="We specialize in creating and optimizing high-quality,
                    custom websites for businesses and organizations of all
                    sizes. Building mobile-friendly and easy-to-use websites and
                    applications for clients."
              />
              <TeammateCard
                icon={CTOImageYassine}
                title="Yassine Ben Jeddou"
                position=" CTO , Web and Mobile Developer"
                subTitle="We provide domain registration and web hosting services to
                    individuals and organizations to enable them gain visibility
                    in the digital space."
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DemoProduct;
