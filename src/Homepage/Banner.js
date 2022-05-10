import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";

import unicefLogo from "../images/unicef_logo_dark__ejvlglygb3ee_large_2x.png";

const Banner = () => {
  return (
    <div className='banner'>
      <img src={unicefLogo} alt='unicefLogo' />
      <div>
        <p>Donate to support families affected by the war in Ukraine</p>
        <IconContext.Provider value={{ color: "#06c" }}>
          <FiArrowUpRight />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Banner;
