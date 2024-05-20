import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Jobzilla</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/JobSearch">Job Search</Link>
          </li>
          <li>
            <Link to="/JobListings">Job Listings</Link>
          </li>

          <li>
            <Link to="/TermsofService">Terms of Service</Link>
          </li>
          <li>
            <Link to="/Privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;