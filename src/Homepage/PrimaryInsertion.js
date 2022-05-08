import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

const PrimaryInsertion = ({
  pre,
  title,
  subtitle,
  imagePath,
  imageTitle,
  dark,
}) => {
  if (!dark) {
    return (
      <section
        className='primary-insertion'
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <h6>{pre}</h6>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <div className='links-container'>
          <a className='blue-link  insertion-link' href='/'>
            Learn more
            <IconContext.Provider value={{ color: "#06c" }}>
              <IoIosArrowForward />
            </IconContext.Provider>
          </a>
          <a className='blue-link insertion-link' href='/'>
            Buy
            <IconContext.Provider value={{ color: "#06c" }}>
              <IoIosArrowForward />
            </IconContext.Provider>
          </a>
        </div>
      </section>
    );
  } else {
    return (
      <section className='dark-primary-insertion'>
        <div>
          <h6>{pre}</h6>
          <h1>{title || <img src={imageTitle} alt='imageTitle' />}</h1>
          <h4>{subtitle}</h4>
          <span className='links-container'>
            <a className='blue-link insertion-link dark-link' href='/'>
              Learn more
              <IconContext.Provider value={{ color: "#06c" }}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </a>
            <a className='blue-link insertion-link dark-link' href='/'>
              Buy
              <IconContext.Provider value={{ color: "#06c" }}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </a>
          </span>
        </div>
        {/* <img src={imagePath} alt='ipadair' /> */}
      </section>
    );
  }
};

export default PrimaryInsertion;
