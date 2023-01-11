import React from "react";
import "./clock1.scss";
import moment from "moment";

const Clock1 = () => {



  const dateTime = moment();


  return (
    <div className="clock-container">
      <div className="time">20:11</div>
      <div>
        <div className="date">August 13,2021</div>
        <div className="day">Friday Evening</div>
      </div>
    </div>
  );
};

export default Clock1;
