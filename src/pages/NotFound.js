import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <h1>Sorry Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet
        aliquid provident voluptates dolore cum.
      </p>

      <p>
        Go to the <Link to="/"> Home Page</Link> .
      </p>
    </div>
  );
};

export default NotFound;
