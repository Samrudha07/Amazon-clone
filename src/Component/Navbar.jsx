import React from "react";
import "../Styles/Nav.css";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

import Box1 from "../Images/Box-1.jpg";
import Box2 from "../Images/Box-5.jpg";
import Box3 from "../Images/Box-7.jpg";
import Box4 from "../Images/Box-4.jpg";

import Boat1 from "../Images/Boat-1.jpg";
import Boat2 from "../Images/Boat-2.jpg";
import Boat3 from "../Images/Boat-3.jpg";
import Boat4 from "../Images/Boat-4.jpg";

function Navbar() {
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <CiLocationOn />
              <p className="add-second">India</p>
            </div>
          </div>
          <div className="nav-search">
            <select name="" id="" className="search-select">
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search amazon"
              className="search-input"
            />
            <div className="search-icon">
              <CiSearch />
            </div>
          </div>
          <div className="nav-signin border">
            <p>
              <span> Sign in</span>
            </p>
            <p className="nav-second">
              Account & List <MdOutlineArrowDropDown />
            </p>
          </div>
          <div className="nav-return border">
            <p>
              <span> Returns</span>
            </p>
            <p className="nav-second">& Orders</p>
          </div>

          <div className="nav-cart border">
            <MdAddShoppingCart
              className="cart-name"
              style={{ fontSize: "30px" }}
            />
            Cart
          </div>
        </div>
        <div className="panel">
          <div className="">
            <FaBars className="panel-all" />
            ALL
          </div>

          <div className="panel-options">
            <p>Fresh</p>
            <p>MX Player</p>
            <p>Sell</p>
            <p>Best Sellers</p>
            <p>Today's Deal</p>
            <p>Mobiles</p>
            <p>Electronics</p>
            <p>Customer</p>
          </div>

          <div className="panel-deals">Shop Deals in Electronics</div>
        </div>
      </header>
      <div className="hero-section">
        <div className="hero-msg">
          You are on amazon.com You can also shop on Amazon India for millions
          of Product with fast Local Delevery.
          <a>Click here go to the amazon.in</a>
        </div>
      </div>
      <div className="shop-section" style={{ height: "130vh" }}>
        <div className="box2 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box1} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box2} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box3} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box4} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box1 box ">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box1} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box2} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box3} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2>Revamp your home</h2>
            <img src={Box4} alt="" className="box-img" />
            <p>Explore All</p>
          </div>
        </div>
      </div>
      <div className="sign-in-panel">
        <div className="sing-text">See personalized recommendations</div>

        <button className="sign-in-button ">Sign in</button>
        <div className="sign-customer">
          New Customer? <a>Start here</a>
        </div>
      </div>
      <footer>
        <div className="foot-panel1">Back to Top</div>
        <div className="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>About Amazon</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Connect with Us</p>
            <a>About Amazon</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a>About Amazon</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a>About Amazon</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo"></div>
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a>Condition of Use</a>
            <a>Privacy Notice</a>
            <a>Your adds Privacy Choices</a>
          </div>
          <div className="copy-righ-page">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
