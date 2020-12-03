import Head from "next/head";
import { FC, useState, useEffect } from "react";
//import Link from "next/link";
import styles from "styles/index.module.scss";
import Image from "next/image";
import Slider from "react-slick";

interface Service {
  name: string;
  img: string;
}

const Home: FC = () => {
  const [todayDate, setDate] = useState("2020");
  useEffect(() => {
    let todayDate: number = new Date().getFullYear();
    setDate(todayDate.toString());
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    touchMove: true,
  };

  const serviceList: Array<Service> = [
    {
      name: "Cleaning & Housekeeping",
      img:
        "https://images.unsplash.com/photo-1601160458000-2b11f9fa1a0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      name: "Electronics & Appliance Repairing",
      img:
        "https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80",
    },
    {
      name: "Wellness & Grooming",
      img:
        "https://images.unsplash.com/photo-1599387737838-660b75526801?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80",
    },
    { name: "Plumbing & Electrical Fitting", img: "/services/Photo@2x-5.png" },
    {
      name: "Automobile Servicing",
      img:
        "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Painting",
      img:
        "https://www.tourisme-saint-cyprien.com/sites/default/files/styles/ogimage/public/sit/images/L6613LAR066V5148V9/AdobeStock-302770002.jpg?itok=Y-v9Gc4H",
    },
    {
      name: "Catering Service",
      img:
        "https://images.pexels.com/photos/6270/woman-flowers-holidays-girl-6270.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Event Photography",
      img:
        "https://images.unsplash.com/photo-1593055786307-4ea24359c1e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80",
    },
    {
      name: "Gardening",
      img:
        "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1362&q=80",
    },
    { name: "Pickup & Delivery", img: "/services/Photo@2x-9.png" },
  ];

  return (
    <div className={["flex flex-col", styles.home].join(" ")}>
      <Head>
        <title>Taskey</title>
        <link rel="icon" href="/icon.svg" />
        <meta
          name="description"
          content="Whether you stress over a broken wardrobe or believe in washing off worries with a pedicure, we have a Genie to suit your type!  At Taskey, our aim is to make hassle-free home services available to you at the tap of a key. 
	"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      {/* Hero Section */}
      <div
        className={[
          "w-screen h-screen p-8 text-center sm:text-left",
          styles.hero,
        ].join(" ")}
      >
        <div className="container mx-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
            {/* <h1>We are Taskey!</h1> */}
            <img
              src="/logo-white.svg"
              className="mb-8"
              alt="Taskey"
              width={350}
              height="auto"
            />
            <p className="mb-4">
              Whether you stress over a broken wardrobe or believe in washing
              off worries with a pedicure, we have a Genie to suit your type! At
              Taskey, our aim is to make hassle-free home services available to
              you at the tap of a key. 
            </p>

            <div className={["mx-auto flex flex-col", styles.cta].join(" ")}>
              <p>
                As we get set for our launch in <strong>August 2021</strong>, we
                are in the process of handpicking local home service experts who
                can be our Genies.We are looking for partners in the below
                mentioned categories. If you are a skilled worker in Cochin
                looking to scale your business, reach out to us!
              </p>

              <a
                href="tel:9020256525"
                className={[
                  "mt-8 mb-10 self-center w-full rounded-full px-4 text-center",
                  styles.ctaBtn,
                ].join(" ")}
              >
                Call/ WhatsApp - 9020256525
              </a>
            </div>
          </div>

          <div
            className={[
              "w-full sm:h-screen sm:w-1/2 flex flex-col justify-center sm:my-0",
              ,
              styles.services,
            ].join(" ")}
          >
            <Slider {...settings}>
              {serviceList.map((service, i) => {
                return (
                  <div
                    className={[
                      "w-1/2 sm:w-1/5 p-8 flex flex-col justify-center flex-wrap items-center",
                      styles.service,
                    ].join(" ")}
                    key={i}
                  >
                    <div
                      className={[styles.thumb, "rounded-full mx-auto"].join(
                        " "
                      )}
                    >
                      <img
                        src={`${service.img}`}
                        alt={service.name}
                        width={170}
                        height={170}
                      />
                    </div>
                    <div
                      className={[
                        "py-2 mt-2 text-center flex flex-col justify-start items-center",
                        styles.title,
                      ].join(" ")}
                    >
                      <h2>{service.name}</h2>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* Call to action */}
        {/* <div className={["px-8 flex flex-col", styles.cta].join(" ")}></div> */}
      </div>

      {/* Services */}
      {/* <div
        className={[
          "w-screen p-8 flex flex-row flex-wrap",
          styles.services,
        ].join(" ")}
      >
        {serviceList.map((service, i) => {
          return (
            <div
              className={[
                "w-1/2 sm:w-1/5 p-8 flex flex-col justify-center flex-wrap items-center",
                styles.service,
              ].join(" ")}
              key={i}
            >
              <div className={[styles.thumb].join(" ")}>
                <img
                  src={`${service.img}`}
                  alt={service.name}
                  width={170}
                  height={170}
                />
              </div>

              <div
                className={[
                  "py-2 text-center flex flex-col justify-center items-center",
                  styles.title,
                ].join(" ")}
              >
                <h2>{service.name}</h2>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* Footer */}
      {/* <footer
        className={[
          "w-full flex flex-row justify-center px-4 py-8",
          styles.footer,
        ].join(" ")}
      >
        <p className="text-black">© {todayDate} TASKEY. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
