import React, { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [bar, setBar] = useState(true);
  return (
    <section className="navbar bg-stone-900 text-white fixed z-[2] w-full">
      <div className="navbar-start">
        <a href="/">
          <img
            src="https://www.tropik.com.fj/wp-content/uploads/2019/03/twil_logo_brw.png"
            alt=""
            className="h-20 w-32"
          />
        </a>
      </div>
      <div className="navbar-end max-[974px]:hidden">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <a>About Us</a>
              </summary>
              <ul className="p-3 w-60 rounded-t-none z-[3] bg-stone-900">
                <li className="hover:text-[#E91E63]">
                  <a>Mission, Vision & Objectives</a>
                </li>
                <hr />
                <li className="hover:text-[#E91E63]">
                  <a>Our Board</a>
                </li>
                <hr />
                <li className="hover:text-[#E91E63]">
                  <a>Executive Management</a>
                </li>
                <hr />
                <li className="hover:text-[#E91E63]">
                  <a>Our Managers</a>
                </li>
                <hr />
                <li className="hover:text-[#E91E63]">
                  <a>Careers</a>
                </li>
                <hr />
                <li className="hover:text-[#E91E63]">
                  <a>Gallery</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a href="/sustainability-2">Sustainability</a>
          </li>
        </ul>
        <a className="btn mx-5 hover:bg-[#E91E63] hover:text-white">
          CONTACT US
        </a>
      </div>
      <div className="hidden max-[974px]:navbar-end max-[974px]:flex">
        <button className="w-14 h-14" onClick={() => setBar(!bar)}>
          {bar ? (
            <FontAwesomeIcon icon={faBars} className="w-10 h-10" />
          ) : (
            <div className="menu-dropdown-toggle relative">
              <FontAwesomeIcon icon={faX} className="w-10 h-10" />
              <ul className="menu menu-dropdown text-end rounded-box bg-stone-900 absolute w-72 right-0">
                <li>
                  <details open>
                    <summary>
                      <a>About Us</a>
                    </summary>
                    <ul className="p-3 w-60 rounded-t-none z-[5] bg-stone-900">
                      <li className="hover:text-[#E91E63]">
                        <a>Mission, Vision & Objectives</a>
                      </li>
                      <hr />
                      <li className="hover:text-[#E91E63]">
                        <a>Our Board</a>
                      </li>
                      <hr />
                      <li className="hover:text-[#E91E63]">
                        <a>Executive Management</a>
                      </li>
                      <hr />
                      <li className="hover:text-[#E91E63]">
                        <a>Our Managers</a>
                      </li>
                      <hr />
                      <li className="hover:text-[#E91E63]">
                        <a>Careers</a>
                      </li>
                      <hr />
                      <li className="hover:text-[#E91E63]">
                        <a>Gallery</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <hr />
                <li>
                  <a>Products</a>
                </li>
                <hr />
                <li>
                  <a>Sustainability</a>
                </li>
                <hr />
                <li className="p-2">
                  <a className="hover:bg-[#E91E63] hover:text-white">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </section>
  );
};

export default Header;
