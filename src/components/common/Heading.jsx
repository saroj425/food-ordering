import React from "react";
import { Link } from "react-router-dom";

const Heading = ({ heading, title, subtitle }) => {
  return (
    <>
      <div className="container-fluid bg-light py-6 my-6 mt-0">
        <div className="container text-center animated bounceInDown">
          <h1 className="display-1 mb-4">{heading}</h1>
          <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
            <Link to="/" className="breadcrumb-item">
              {subtitle}
            </Link>
            <Link className="breadcrumb-item text-dark" aria-current="page">
              {title}
            </Link>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Heading;
