import React, { useState, useEffect } from "react";
import { navbarItems, navbarItemsMobile } from "./dataHomepage";

import appleLogo from "../images/globalnav_apple_image__b5er5ngrzxqq_large.svg";
import bag from "../images/globalnav_bag_image__yzte50i47ciu_large.svg";

const NavbarItem = ({ imagePath, linkUrl, name }) => {
  return (
    <li className='navbarItemOnlyDesktop'>
      <a href={linkUrl}>
        <img src={imagePath} alt={name} />
      </a>
    </li>
  );
};
const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  return (
    <>
      <nav className={isActive ? "navbar-active" : ""}>
        <ul>
          <li className='navbarItemOnlyMobile'>
            <div
              className={isActive ? "open" : "hamburger"}
              onClick={ToggleClass}
            >
              <span className='hamburger__top-bun'></span>
              <span className='hamburger__bottom-bun'></span>
            </div>
          </li>
          <li>
            <a href='/'>
              <img src={appleLogo} alt='appleLogo' />
            </a>
          </li>
          {navbarItems.map((item) => {
            return <NavbarItem key={item.id} {...item} />;
          })}
          <li className={isActive ? "hide-bag" : ""}>
            <a href='/'>
              <img src={bag} alt='bag' />
            </a>
          </li>
        </ul>
      </nav>
      {/* UNCOMMENT TO SEE THE BOX OF THE CART. 
      (for now is there's only the box static, 
      TODO: shift the box to the right and make the box appear only when the bag icon on the navbar is clicked)*/}
      {/* <BagBox /> */}
      <Menu isActive={isActive} />
    </>
  );
};

const BagBox = () => {
  return (
    <div className='bag-box'>
      <div className='preview-articles'>Your back is empty</div>
      <ul className='bag-list-options'>
        <li>Bag</li>
        <li>Saved items</li>
        <li>Orders</li>
        <li>Account</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};
const Menu = ({ isActive }) => {
  return (
    <div className={isActive ? "drop-down-menu-active" : "drop-down-menu"}>
      <div className='search-bar-container'>
        <div className='search-bar'>Search Apple.com</div>
      </div>
      <ul>
        {navbarItems
          .filter((item) => item.id !== 13)
          .map((item) => {
            return <li>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};
export default Navbar;
