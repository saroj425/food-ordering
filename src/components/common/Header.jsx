import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Item";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  console.log(totalItems);
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container-fluid nav-bar sticky-top">
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg py-4">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary fw-bold mb-0">
                J.K<span className="text-dark">Catterers</span>
              </h1>
            </Link>
            <button
              onClick={() => setShow(!show)}
              className="navbar-toggler py-2 px-3"
              type="button"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className={
                show ? "navbar-collapse show" : "collapse navbar-collapse"
              }
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                {navList.map((nav, index) => (
                  <div key={index}>
                    <Link to={nav.path} className="nav-item nav-link">
                      {nav.text}
                    </Link>
                  </div>
                ))}
              </div>
              <button className="btn-search btn btn-primary btn-md-square rounded-circle d-none d-lg-inline-flex">
                <i className="fas fa-search"></i>
              </button>
              <Link
                to="/cart"
                className="btn-cart btn btn-primary btn-md-square ms-4 rounded-circle d-none d-lg-inline-flex"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="btn-sm rounded-circle btn-danger d-none d-lg-inline-flex">
                  {totalItems}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
