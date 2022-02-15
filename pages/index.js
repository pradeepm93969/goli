import MainLayout from "../src/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fade } from "react-reveal";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import ContactUsForm from "../src/components/ContactUs/ContactUsForm";

export default function Home() {
  return (
    <div className="bg-secondary-50">
      <main className="flex items-center justify-center w-full min-h-screen">
        <Fade top>
          <div className="card m-5 lg:card-side shadow-md">
            <div className="bg-white lg:w-1/2 flex flex-col">
              <Fade left>
                <div className="p-10 text-primary-500 font-semibold text-4xl lg:text-5xl">
                  GOLI
                </div>
                <div className="px-10 text-slate-700 font-semibold text-lg lg:text-xl">
                  One stop solution for all your pharmacy needs.
                </div>
              </Fade>

              <div className="grid">
                <Swiper
                  spaceBetween={0}
                  autoHeight={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="flex flex-col">
                      <Image
                        src="/img/hero-slide1.jpg"
                        alt="Order Medicine"
                        height="300"
                        width="400"
                      />
                      <div className="text-primary-500 text-md mt-2">
                        Order Medicine
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col">
                      <Image
                        src="/img/hero-slide2.jpg"
                        alt="Upload Prescription"
                        height="300"
                        width="400"
                      />
                      <div className="text-primary-500 text-md mt-2">
                        Upload Prescription
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col">
                      <Image
                        src="/img/hero-slide3.jpg"
                        alt="Fast Delivery"
                        height="300"
                        width="400"
                      />
                      <div className="text-primary-500 text-md mt-2">
                        Fast Delivery
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="card-body lg:w-1/2 bg-white lg:border-l ">
              <h2 className="card-title mt-auto mx-auto">
                We will be here soon. New and fresh!
              </h2>
              <div className="mx-auto shadow-md my-4 px-4 py-4 bg-slate-50 w-full sm:w-3/5">
                <ContactUsForm />
              </div>
              <div className="card-actions text-sm mx-auto">
                Copyright - Goli © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </Fade>
      </main>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="Goli Pharamacy : Online medicine and healthcare products"
      description="Goli Pharmacy is one of most trusted online pharmacy and medical stores offering pharmaceutical and healthcare products"
      keywords="pharmacy, medical stores, online pharmacy, best online pharmacy, online medical store, online medicine store, online medical shop"
    >
      {page}
    </MainLayout>
  );
};
