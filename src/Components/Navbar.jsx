/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { DiGhostSmall } from "react-icons/di";

const Navbar = ({ group, order, setGroup, setOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenusOpen, setSubmenusOpen] = useState({});

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest(".dropdown")) return;
      setIsOpen(false);
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleSubmenu = (submenuNumber) => {
    if (isOpen) {
      setSubmenusOpen((prevState) => ({
        ...prevState,
        [submenuNumber]: !prevState[submenuNumber],
      }));
    }
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        <DiGhostSmall />
        Display
        <RiArrowDownSLine />
      </button>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <div className="manubtn">
          <div className="submenu" onClick={() => toggleSubmenu(1)}>
            <a href="#">Grouping</a>
            <button className="dropbtn">
              {group}
              <RiArrowDownSLine />
            </button>
            <div>
              <button
                className={`submenu-content ${submenusOpen[1] ? "show" : ""}`}
              >
                <div className="grpsbtn">
                  <button onClick={() => {setGroup("status"); setIsOpen(false)}} className="subbtn">
                    Status
                  </button>
                  <button onClick={() => {setGroup("user"); setIsOpen(false)}} className="subbtn">
                    User
                  </button>
                  <button
                    onClick={() => {setGroup("priority"); setIsOpen(false)}}
                    className="subbtn"
                  >
                    Priority
                  </button>
                </div>
              </button>
            </div>
          </div>
          <div className="submenu" onClick={() => toggleSubmenu(2)}>
            <a href="#">Ordering</a>
            <button className="dropbtn">
              {order}
              <RiArrowDownSLine />
            </button>
            <div>
              <button
                className={`submenu-content ${submenusOpen[2] ? "show" : ""}`}
              >
                <div className="grpsbtn">
                  <button onClick={() => {setOrder("title"); setIsOpen(false)}} className="subbtn">
                    Title
                  </button>
                  <button onClick={() => {setOrder("priority"); setIsOpen(false) }} className="subbtn">Priority</button>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
