import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <ul className="bg-danger d-flex" style={{ listStyle: "none" }}>
          <li className="mx-1 px-3 py-3 bg-for-nab">
            <Link className="bg-for-na py-3 px-3" to="/">
              Home
            </Link>
          </li>
          <li className="mx-1 px-3 py-3 bg-for-nab">
            <Link className="bg-for-na  py-3 px-3" to="/about">
              About
            </Link>
          </li>
          <li className="mx-1 px-3 py-3 bg-for-nab">
            <Link className="bg-for-na py-3 px-3" to="/crud">
              Crud
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
