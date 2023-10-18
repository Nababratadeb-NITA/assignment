import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import "./App.css";
import SubCategory from "./Components/SubCategory";
import {
  groupByStatus,
  groupByPriority,
  groupByUser,
  orderByPriority,
  orderByTitle,
} from "./utils/index";

import { BsThreeDots, BsCircle, BsFillBugFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { PiCircleHalfFill } from "react-icons/pi";
import { GrAdd } from "react-icons/gr";
import { BiSignal2,BiSignal3,BiSignal4 } from "react-icons/bi";

function App() {
  const [data, setData] = useState({});
  const [group, setGroup] = useState(localStorage.getItem("group") || "status");
  const [order, setOrder] = useState(localStorage.getItem('order') || "title");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        let groupedData;
        if (group === "status") {
          groupedData = groupByStatus(data);
        } else if (group === "user") {
          groupedData = groupByUser(data);
        } else if (group === "priority") {
          groupedData = groupByPriority(data);
        }

        let orderedData;
        if (order === "priority") {
          orderedData = orderByPriority(groupedData);
        } else if (order === "title") {
          orderedData = orderByTitle(groupedData);
        }

        setData(orderedData);
      });
  }, [group, order]);

  useEffect(() => {
    localStorage.setItem("group", group);
    localStorage.setItem("order", order);
  }, [group, order]);


  const renderStatusIcon = (status) => {
    const statusIcons = {
      Todo: <BsCircle />,
      "In progress": <PiCircleHalfFill />,
      Backlog: <BsFillBugFill />,
    };
    return statusIcons[status] || null;
  };

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

  return (
    <div className="container">
      <Navbar group={group} setGroup={setGroup} order={order} setOrder={setOrder} />
      <div className="App">
        <SubCategory />
        <div className="mainContainer">
          {data &&
            Object.keys(data).map((status) => (
              <div className={status} key={status}>
                <div className="subm">
                  {group === "status" && (
                    <div className="substatus">
                      {renderStatusIcon(status)}
                      <h1 className="userName">
                        {status} <span>{data[status].length}</span>
                      </h1>
                    </div>
                  )}

                  {group === "user" && (
                    <div className="user-p">
                      <div className="img">
                        <div className="status-p online"></div>
                        <span className="initials">
                          {data[status][0]["userName"].substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="userName">
                        {data[status][0]["userName"]} <span>{data[status].length}</span>
                      </div>
                    </div>
                  )}

                  {group === "priority" && (
                    <div className="priority">
                      {renderPriorityIcon(data[status][0]["priority"])}
                      <h1 className="userName">{status === "0" && "No Priority"}  {status === "1" && "Urgent"} {status === "2" && "High"} {status === "3" && "Medium"} {status === "4" && "Low"}      {data[status].length}</h1>
                    </div>
                  )}
                  <div className="picon">
                    {" "}
                    <GrAdd /> <BsThreeDots />{" "}
                  </div>
                </div>

                {data[status].map((el) => (
                  <Card renderPriorityIcon={renderPriorityIcon} key={el.id} data={el} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
