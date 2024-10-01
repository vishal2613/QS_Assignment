import React, { useState } from "react";
import DownArrow from "../../assets/icons/down.svg";
import DisplayIcon from "../../assets/icons/Display.svg";
import "./DisplayMenu.css";

const DisplayMenu = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img src={DisplayIcon} alt="Display" />
        <span className="label">Display</span>
        <img src={DownArrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="option">
            <label>Grouping:</label>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
              className="select"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="option">
            <label>Ordering:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;
