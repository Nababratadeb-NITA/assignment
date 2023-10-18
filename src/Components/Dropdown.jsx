import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
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

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleSubgroup1}>
        Grouping
      </button>
      {subgroup1Open && (
        <div className="dropdown-content">
          <button>Status</button>
          <button>Users</button>
          <button>Priority</button>
        </div>
      )}

      <button className="dropdown-btn" onClick={toggleSubgroup2}>
        Ordering
      </button>
      {subgroup2Open && (
        <div className="dropdown-content">
          <button>Priority</button>
          <button>Title</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
