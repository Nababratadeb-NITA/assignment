/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { DiGhostSmall } from "react-icons/di";

const Navbar = ({ group, order, setGroup, setOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subgroup1Open, setSubgroup1Open] = useState(false);
  const [subgroup2Open, setSubgroup2Open] = useState(false);

  const toggleSubgroup1 = () => {
    setSubgroup1Open(!subgroup1Open);
    setSubgroup2Open(false);
  
  };

  const toggleSubgroup2 = () => {
    setSubgroup2Open(!subgroup2Open);
    setSubgroup1Open(false);
  };

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

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        <DiGhostSmall />
        Display
        <RiArrowDownSLine />
      </button>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <div className="manubtn">
          <div className="submenu">
            <a>Grouping</a>
            <button className="dropbtn" onClick={toggleSubgroup1}>
              {group}
              <RiArrowDownSLine />
            </button>
            <div>
              <button
                className={`submenu-content ${subgroup1Open ? "show" : ""}`}
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
          <div className="submenu">
            <a>Ordering</a>
            <button className="dropbtn"  onClick={toggleSubgroup2}>
              {order}
              <RiArrowDownSLine />
            </button>
            <div>
              <button
                className={`submenu-content ${subgroup2Open ? "show" : ""}`}
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
