import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/images/bg.png";

export default function HomePage() {
  return (
    <header style={HeaderStyle}>
      <div className="buttons text-center">
        <Link to="/prediction">
          <button className="primary-button">Prediction</button>
        </Link>
        <Link to="/report">
          <button className="primary-button" id="reg_btn">
            <span>Report</span>
          </button>
        </Link>
      </div>
      {/* <Link to="/">
        <button className="primary-button">Log out</button>
      </Link> */}
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
