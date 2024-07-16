import React from "react";
import { faces, features } from "../data/Item";
import Heading from "../common/Heading";
import CommonHeading from "../common/CommonHeading";

export default function About() {
  return (
    <>
      {/* <Heading title="About" subtitle="Home" heading="About Us" /> */}
      <div className="container-fluid py-6">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
              <img
                src="assets/img/about.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
              <CommonHeading
                title="About Us"
                description="Trusted By 200 + satisfied clients"
              />
              <p className="mb-4">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor iesdein
                reprehendeerit in voluptate velit esse cillum dolore.
              </p>
              <div className="row g-4 text-dark mb-5">
                {features.map((val, index) => (
                  <div key={index} className="col-sm-6">
                    {val.icon} {val.text}
                  </div>
                ))}
              </div>
              <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
                About Us<i className="fas fa-arrow-right ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid faqt py-6">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="row g-4">
                {faces.map((val, index) => (
                  <div
                    className="col-sm-4 wow bounceInUp"
                    data-wow-delay="0.3s"
                    key={index}
                  >
                    <div className="faqt-item bg-primary rounded p-4 text-center">
                      {val.icon}
                      <h1
                        className="display-4 fw-bold"
                        data-toggle="counter-up"
                      >
                        {val.counter}
                      </h1>
                      <p className="text-dark text-uppercase fw-bold mb-0">
                        {val.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
              <div className="video">
                <button
                  type="button"
                  className="btn btn-play"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                >
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
