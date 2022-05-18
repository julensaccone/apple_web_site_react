import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

const GridInsertion = ({
  id,
  pre,
  preImage,
  title,
  imageTitle,
  subtitle,
  position,
  color,
  link1,
  link2,
  linkColor,
  imagePath,
  widthImage,
}) => {
  console.log(imagePath);
  return (
    <div
      className='grid-cell'
      style={{
        backgroundImage: `url(${imagePath})`,
        color: color,
        justifyContent: position,
      }}
    >
      <h6>
        {pre ||
          (preImage && (
            <img
              src={preImage}
              alt='preImage'
              style={{ width: "15%", paddingBottom: "10px" }}
            />
          ))}
      </h6>
      <h1>
        {title || (
          <img
            src={imageTitle}
            alt='imageTitle'
            style={{
              width: widthImage,
            }}
          />
        )}
      </h1>
      <h4>{subtitle}</h4>
      <span className='links-container'>
        <a
          className='blue-link insertion-link dark-link'
          style={{ color: linkColor }}
          href='/'
        >
          {link1}
          <IconContext.Provider value={{ color: "#06c" }}>
            <IoIosArrowForward />
          </IconContext.Provider>
        </a>

        {link2 && (
          <a
            className='blue-link insertion-link dark-link'
            style={{ color: linkColor }}
            href='/'
          >
            {link2}
            <IconContext.Provider value={{ color: "#06c" }}>
              <IoIosArrowForward />
            </IconContext.Provider>
          </a>
        )}
      </span>
    </div>
  );
};

export default GridInsertion;
