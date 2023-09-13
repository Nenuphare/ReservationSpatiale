import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/logo.png" alt="logo du site" className="img"/>
          </div>
          <div className="item">
            <Link className ="link" to="#packs">Nos packs</Link>
          </div>
          <div className="item">
            <Link className ="link" to="#reserver">Réserver</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">Travel Space</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/"></Link>
          </div>
          <div className="icons">
          <Link className ="link" to="/login">
            <PersonOutlineOutlinedIcon/>
          </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;