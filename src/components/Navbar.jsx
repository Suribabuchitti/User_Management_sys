import React from "react";

function Navbar({ onAddUser, onOpenFilter }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>User Management Dashboard</h2>
      </div>

      <div className="nav-buttons">
        <button className="btn filter-btn" onClick={onOpenFilter}>
          Filter
        </button>

        <button className="btn add-btn" onClick={onAddUser}>
          + Add User
        </button>
      </div>
    </nav>
  );
}

export default Navbar;