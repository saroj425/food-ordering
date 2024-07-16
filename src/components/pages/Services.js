import React from "react";
import Heading from "../common/Heading";
import { services } from "../data/Item";
import CommonHeading from "../common/CommonHeading";

export default function Services() {
  return (
    <>
      {/* <Heading title="Services" subtitle="Home" heading="Services" /> */}

      <div className="container-fluid service py-6">
        <div className="container">
          <CommonHeading title="Our Services" description="What We Offer" />
          <div className="row g-4">
            {services.map((val, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="bg-light rounded service-item">
                  <div className="service-content d-flex align-items-center justify-content-center p-4">
                    <div className="service-content-icon text-center">
                      {val.icon}
                      <h4 className="mb-3">{val.name}</h4>
                      <p className="mb-4">{val.discription}</p>
                      <a
                        href="#"
                        className="btn btn-primary px-4 py-2 rounded-pill"
                      >
                        {val.btn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
