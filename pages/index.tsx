import Head from "next/head";
import { FC, useState, useEffect } from "react";
//import Link from "next/link";
import styles from "styles/index.module.scss";
import Image from "next/image";

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

  const serviceList: Array<Service> = [
    { name: "Cleaning & Housekeeping", img: "Photo@2x-2.png" },
    { name: "Electronics & Appliance Repairing", img: "Photo@2x-1.png" },
    { name: "Wellness & Grooming", img: "Photo@2x.png" },
    { name: "Plumbing & Electrical Fitting", img: "Photo@2x-5.png" },
    { name: "Automobile Servicing", img: "Photo@2x-4.png" },
    { name: "Painting", img: "Photo@2x-3.png" },
    { name: "Catering Service", img: "Photo@2x-8.png" },
    { name: "Event Photography", img: "Photo@2x-7.png" },
    { name: "Gardening", img: "Photo@2x-6.png" },
    { name: "Pickup & Delivery", img: "Photo@2x-9.png" },
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
      </Head>

      {/* Hero Section */}
      <div className={["w-screen p-8", styles.hero].join(" ")}>
        <div className="container mx-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left">
            <h1>We are Taskey!</h1>
            <p>
              Whether you stress over a broken wardrobe or believe in washing
              off worries with a pedicure, we have a Genie to suit your type! At
              Taskey, our aim is to make hassle-free home services available to
              you at the tap of a key. 
            </p>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-end my-8 sm:my-0">
            <img
              src="/icon-outline.svg"
              className="w-auto -mr-10 h-60 sm:h-96"
              alt="emblem"
            />
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className={["px-8 flex flex-col", styles.cta].join(" ")}>
        <div
          className={[
            "mx-auto py-8 flex flex-col text-center",
            styles.content,
          ].join(" ")}
        >
          <p>
            As we get set for our launch in <strong>August 2021</strong> , we
            are in the process of handpicking local home service experts who can
            be our Genies.We are looking for partners in the below mentioned
            categories. If you are a skilled worker in Cochin looking to scale
            your business, reach out to us!
          </p>

          <a
            href="tel:9020256525"
            className={[
              "my-8 self-center w-full rounded-full",
              styles.ctaBtn,
            ].join(" ")}
          >
            Call/ WhatsApp - 9020256525
          </a>
        </div>
      </div>

      {/* Services */}
      <div
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
              {/* <Image
        src={`/services/${service.img}`}
        alt={service.name}
        width={170}
        height={170}
      /> */}
              <img
                src={`/services/${service.img}`}
                alt={service.name}
                width={170}
                height={170}
              />
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
      </div>

      {/* Footer */}
      <footer
        className={[
          "w-full flex flex-row justify-center px-4 py-8",
          styles.footer,
        ].join(" ")}
      >
        <p className="text-black">© {todayDate} TASKEY. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
