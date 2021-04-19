import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </div>
  );
}
// a태그는 누르면 다시 리로딩하기때문에 Link사용/ href=to로 사용된다.
export default Navigation;
