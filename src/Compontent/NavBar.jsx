import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { useModal } from "../modalContext";


const NavBar = () => {
  const {openModal} = useModal();
  const [menu, setMenu] = useState(false);

  const toggelMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="container nav-container bg-light p-3 ">
      <div className="row">
        {/* Left section */}
        <div className="col-6">
          <h3 className="logo text-primary text-start">My-Notebook</h3>
        </div>

        {/* Right section - Search Bar */}
        <div className="col-6">
          <div className={menu ? " right-mob " : "right-sec"}>
            <ul className="myNav ml-4">
              <li className="nav-item">
                <a href="#"  className="nav-link text-black">
                  All Notes
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={openModal} className="nav-link text-black">
                  Create Note
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Find Your Notebook"
              />
              <button className="btn btn-outline-primary fw-bold">Search</button>
            </form>
          </div>
          <div className="right-btn ">
            <FaHamburger
              size={30}
              className="text-primary"
              onClick={toggelMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
