import React, { useState } from "react";
import Heading from "../common/Heading";
import { menu } from "../data/Item";
import CommonHeading from "../common/CommonHeading";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, getCartTotal } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (item) => {
    console.log(item);
    let totalPrice = qty * item.price;
    const tempProduct = {
      ...item,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  const [menuItem, setMenuItem] = useState(menu);
  const filterItems = (category) => {
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);

    // for all data show
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
  };
  return (
    <>
      {/* <Heading title="Menu" subtitle="Home" heading="Menu" /> */}
      <div className="container-fluid menu bg-light py-6 my-6">
        <div className="container">
          <CommonHeading
            title="Our Menu"
            description="Most Popular Food in the World"
          />
          <div className="tab-className text-center">
            <ul
              className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active"
                  onClick={() => filterItems("all")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    All Items
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
                  onClick={() => filterItems("starter")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Starter
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
                  onClick={() => filterItems("maincourse")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Main Course
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
                  onClick={() => filterItems("drinks")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Drinks
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
                  onClick={() => filterItems("offers")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Offers
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill"
                  onClick={() => filterItems("ourspecials")}
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Our Spesial
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {menuItem.map((item, key) => (
                    <div
                      className="col-lg-6 wow bounceInUp"
                      data-wow-delay="0.1s"
                      key={key}
                    >
                      <div className="menu-item d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded-circle"
                          src={item.img}
                          alt="img"
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                            <h4>{item.name}</h4>
                            <h4 className="text-primary">${item.price}</h4>
                          </div>
                          <div className="d-flex">
                            <p className="mb-0 col-md-6">{item.content}</p>
                            <Link onClick={() => handleAddToCart(item)}>
                              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                                {item.btn}
                              </small>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
