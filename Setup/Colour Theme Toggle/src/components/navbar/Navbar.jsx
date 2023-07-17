/* eslint-disable no-unused-vars */
import "./nav.css";
import { BsFillPaletteFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <h2>
            Busy<span className="danger">Dev</span>
          </h2>
        </div>

        <div className="app-links">
          <div>
            <h4>
              <BsFillPaletteFill />
              <span>Change Colour</span>
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
