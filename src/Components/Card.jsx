import React from "react";
import "./Card.css";

import { RxShadowOuter } from "react-icons/rx";
import { CiCircleCheck, CiCircleMore } from "react-icons/ci";
import { PiCircleDuotone } from "react-icons/pi";
import { BsThreeDots} from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiSignal2,BiSignal3,BiSignal4 } from "react-icons/bi";


const Card = (el) => {
  const isUserAvailable = el.data.userAvb;

  const statusClass = isUserAvailable ? "online" : "offline";

  function truncateString(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    console.log("words : ",words);
    console.log("text : ", text);

    return text;
  }
  const truncatedString = truncateString(el.data.title, 5); 
  
  const renderPriorityIcon = (priority) => {
    const priorityIcons = {
      0: <BsThreeDots className="picon" />,
      1: <HiOutlineClipboardList className="picon" />,
      2: <BiSignal4 className="picon" />,
      3: <BiSignal3 className="picon" />,
      4: <BiSignal2 className="picon" />,
    };
  
    return priorityIcons[priority] || null;
  };
  

  console.log("card:",el);
  return (
    <div className="card">
      <div className="card-content">
        <div className="avatar">
          <div className="avat">
            <div className="card-avatar">
              <img
                src="https://imgs.search.brave.com/d13gMNyry1MbXWRGgBid_XwL8WolAayNSKGHd4WtlKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE4LzAzLzM1/LzM2MF9GXzExODAz/MzUwNl91TXJobnJq/QldCeFZFOXNZR1Rn/Qmh0OFM1bGlWbkll/WS5qcGc"
                alt="Avatar"
              />
            </div>
            <div className={`status-indicator ${statusClass}`}></div>
          </div>

          <div className="card-id">ID: {el.data.id}</div>
        </div>
        
        <div className="title">
          {el.data.status === "Backlog" && <RxShadowOuter className="icon" />}
          {el.data.status === "In progress" && <CiCircleMore className="icon" />}
          {el.data.status === "Todo" && <CiCircleCheck className="icon" />}
        <div className="card-title">{truncatedString}</div>
        </div>
        <div className="card-tags">
        {renderPriorityIcon(el.priority)}
          <PiCircleDuotone /> {" "}
          {el.data.tag.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
