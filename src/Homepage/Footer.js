import { useState } from "react";

let self = "#";

const MenuItem = ({ title, children }) => {
  const [displaySubMenu, setDisplaySubMenu] = useState(false);

  const handleDisplaySubMenu = () => {
    setDisplaySubMenu(!displaySubMenu);
  };

  return (
    <>
      <li className='menu-item-footer' onClick={handleDisplaySubMenu}>
        {displaySubMenu ? (
          <div>
            <span style={{ color: "black" }}>{title}</span>
            <span style={{ color: "black" }}>x</span>
          </div>
        ) : (
          <div>
            <span>{title}</span>
            <span>+</span>{" "}
          </div>
        )}
        {displaySubMenu && children}
      </li>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='upper-text'>
          <p>
            1. Apple Watch required. New subscribers only. $9.99/month after
            trial. Plan automatically renews until cancelled.
          </p>
          <p>A subscription is required for Apple Fitness+.</p>
          <p>
            Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later,
            watchOS 7.2 or later, and tvOS 14.3 or later.
          </p>
          <p>
            To get the newest features, make sure your devices are running the
            latest software version.
          </p>
          <p>
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>
        <div className='footer-desktop-list'>
          <div className='col1'>
            <ul className='shop-list'>
              <li className='footer-list-title'>Shop and Learn</li>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>iPod touch</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className='col2'>
            <ul className=' services-list'>
              <li className='footer-list-title'>Services</li>
              <li>Apple Music</li>
              <li>Apple TV+</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Arcade</li>
              <li>iCloud</li>
              <li>Apple One</li>
              <li>Apple Card</li>
              <li> Apple Books</li>
              <li>Apple Podcasts</li>
              <li>App Store</li>
            </ul>
            <ul className=' account-list'>
              <li className='footer-list-title'>Account</li>
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div className='col3'>
            <ul className=' apple-store-list'>
              <li className='footer-list-title'>Apple Store</li>
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Camp</li>
              <li> Apple Store App</li>
              <li>Refurbished and Clearance</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
          <div className='col4'>
            <ul className=' business-list'>
              <li className='footer-list-title'>For Business</li>
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
            <ul className=' education-list'>
              <li className='footer-list-title'>For Education</li>
              <li>Apple and Education</li>
              <li> Shop for K-12</li>
              <li>Shop for College</li>
            </ul>
            <ul className=' healthcare-list'>
              <li className='footer-list-title'>For Healthcare</li>
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
              <li>Health Records on iPhone</li>
            </ul>
            <ul className=' government-list'>
              <li className='footer-list-title'>For Government</li>
              <li>Shop for Government</li>
              <li>Shop for Veterans and Military</li>
            </ul>
          </div>
          <div className='col5'>
            <ul className=' apple-values-list'>
              <li className='footer-list-title'>Apple Values</li>
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Inclusion and Diversity</li>
              <li>Privacy</li>
              <li>Racial Equity and Justice</li>
              <li>Supplier Responsibility</li>
            </ul>
            <ul className=' about-list'>
              <li className='footer-list-title'>About Apple</li>
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
        {/* Mobile footer: */}
        <div className='footer-mobile-list'>
          <ul>
            <MenuItem title='Shop and Learn'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Store</li>
                </a>

                <a href={self}>
                  <li className='sub-menu-item-footer'>Mac</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>iPad</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>iPhone</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Watch</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>AirPods</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>TV & Home</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>iPod touch</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>AirTag</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Accessories</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Gift Cards</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='Services'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Music</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple TV+</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Fitness+</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple News+</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Arcade</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>iCloud</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple One</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Card</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Books</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Podcasts</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>App Store</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='Account'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Manage Your Apple ID</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Store Account</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>iCloud.com</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='Apple Store'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Find a Store</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Genius Bar</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Today at Apple</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Camp</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Store App</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>
                    SRefurbished and Clearance
                  </li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Financing</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Trade In</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Order Status</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Shopping Help</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='For Business'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple and Business</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Shop for Business</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='For Education'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple and Education</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Shop for K-12</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Shop for College</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='For Healthcare'>
              <a href={self}>
                <li className='sub-menu-item-footer'>Apple in Healthcare</li>
              </a>
              <a href={self}>
                <li className='sub-menu-item-footer'>Health on Apple Watch</li>
              </a>
              <a href={self}>
                <li className='sub-menu-item-footer'>
                  Health Records on iPhone
                </li>
              </a>
            </MenuItem>
            <MenuItem title='For Government'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Shop for Government</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>
                    Shop for Veterans and Military
                  </li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='Apple Values'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Accessibility</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Education</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Environment</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>
                    Inclusion and Diversity
                  </li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Privacy</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>
                    Racial Equity and Justice
                  </li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>
                    Supplier Responsibility
                  </li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title='About Apple'>
              <ul className='sub-menu-footer'>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Newsroom</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Apple Leadership</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Career Opportunities</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Investors</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Ethics & Compliance</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Events</li>
                </a>
                <a href={self}>
                  <li className='sub-menu-item-footer'>Contact Apple</li>
                </a>
              </ul>
            </MenuItem>
          </ul>
        </div>
        <div className='more'>
          More ways to shop:{" "}
          <a href={self} className='blue-link footer-link'>
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href={self} className='blue-link footer-link'>
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </div>
        <div className='sub-footer'>
          <div className='country-footer'>United States</div>
          <div className='copyright'>
            <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
          </div>
          <div className='links'>
            <span className='span-footer'>Privacy Policy</span>
            <span className='span-footer'>Terms of Use</span>
            <span className='span-footer'>Sales and Refunds</span>
            <span className='span-footer'>Legal</span>
            <span className='span-footer'>Site Map</span>
          </div>
          {/*<div>United States</div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
