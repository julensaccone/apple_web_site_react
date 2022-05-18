//css
import "./Homepage.scss";

//data
import {
  primaryInsertionItems,
  gridInsertionItems,
  // navbarItems,
} from "./dataHomepage";
// import appleLogo from "../images/globalnav_apple_image__b5er5ngrzxqq_large.svg";
// import bag from "../images/globalnav_bag_image__yzte50i47ciu_large.svg";

//components
import Navbar from "./Navbar";
import Banner from "./Banner";
import PrimaryInsertion from "./PrimaryInsertion";
import GridInsertion from "./GridInsertion";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />

      {primaryInsertionItems.map((item) => {
        return <PrimaryInsertion key={item.id} {...item} />;
      })}
      <div className='gridInsertionContainer'>
        {gridInsertionItems.map((item) => {
          return <GridInsertion key={item.id} {...item} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
