import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>this is help page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus magnam
        doloremque distinctio cum dignissimos obcaecati?
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
