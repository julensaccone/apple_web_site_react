import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import { navbarItems } from "./dataHomepage";
//navbarItemsMobile

import appleLogo from "../images/globalnav_apple_image__b5er5ngrzxqq_large.svg";
import bag from "../images/globalnav_bag_image__yzte50i47ciu_large.svg";
import searchLens from "../images/search-icon-navbar.svg";

let self = "#";

const NavbarItem = ({ imagePath, linkUrl, name }) => {
  // console.log(imagePath);
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
  const [isBagActive, setBagActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  // const [isSearchMobileActive, setIsSearchMobileActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const toggleBag = () => {
    setBagActive(!isBagActive);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    setBagActive(false);
  };

  // const toggleSearchMobile = () => {
  //   setIsSearchMobileActive(!isSearchMobileActive);
  // };

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
      <nav
        className={isActive ? "navbar-active" : isSearchActive ? "hide" : ""}
      >
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
            <a href={self}>
              <img src={appleLogo} alt='appleLogo' />
            </a>
          </li>
          {navbarItems.map((item) => {
            return <NavbarItem key={item.id} {...item} />;
          })}
          <li onClick={toggleSearch} className='navbarItemOnlyDesktop'>
            <img src={searchLens} alt='searchLens' />
          </li>
          <li className={isActive ? "hide-bag" : "bag-icon"}>
            <div onClick={toggleBag}>
              <img src={bag} alt='bag' />
            </div>
          </li>
        </ul>
      </nav>
      <SearchField
        isSearchActive={isSearchActive}
        toggleSearch={toggleSearch}
      />
      <BagBox isBagActive={isBagActive} />
      <Menu isActive={isActive} />
    </>
  );
};

const SearchField = ({ isSearchActive, toggleSearch }) => {
  return (
    <>
      <div
        className={
          isSearchActive ? "search-container" : "search-container hide"
        }
      >
        <div className='link-search'>
          <a href={self}>
            <img src={searchLens} alt='searchLens' />
          </a>
          <div className='search-bar'>
            <form action=''>
              <input type='text' placeholder='Search apple.com' />
            </form>
          </div>
          <div className='link-close'>
            <div onClick={toggleSearch}>
              <IconContext.Provider value={{ color: "#fff", size: 25 }}>
                <IoCloseOutline />
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <div className='quick-links'>
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href={self}>Visiting an Apple FAQz</a>
            </li>
            <li>
              <a href={self}>AirPods</a>
            </li>
            <li>
              <a href={self}>AirTag</a>
            </li>
            <li>
              <a href={self}>AppleCare+</a>
            </li>
            <li>
              <a href={self}>Gift cards</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={toggleSearch}
        class={isSearchActive ? "overlay show" : "overlay"}
      ></div>
    </>
  );
};
const BagBox = ({ isBagActive }) => {
  return (
    <div className='bag-box-container'>
      <div className={isBagActive ? "bag-box" : "hide-bag-box"}>
        <div className='preview-articles'>Your bag is empty</div>
        <ul className='bag-list-options'>
          <li>Bag</li>
          <li>Saved items</li>
          <li>Orders</li>
          <li>Account</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

const Menu = ({ isActive, isSearchMobileActive, toggleSearchMobile }) => {
  return (
    <div className={isActive ? "drop-down-menu-active" : "drop-down-menu"}>
      <div className='search-bar-container'>
        <div className='search-bar' onClick={toggleSearchMobile}>
          <img src={searchLens} alt='searchLens' /> <p>Search Apple.com</p>
        </div>
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
