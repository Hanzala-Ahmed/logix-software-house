import React from "react";
import Slider from "react-slick";
import Rating from "../../Components/Rating/Rating";
import "./RatingSlider.css";
import myImg from "../../Assets/myPhoto.png";
import MyHeading from "../../Components/Heading/MyHeading";

const RatingSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    centerPadding: "0px",
    speed: 1500,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="mainBox">
      <MyHeading text="OUR HAPPY CUSTOMERS" className="blackShadowText" />
        <div className="mainSlider">
          <Slider {...settings} className="slider">
            <div className="mainSlide">
              <div className="slideItems">
                <Rating
                  message="Very good communication and responsive. Very experienced
                      in building the website. Regarding the design and being
                      creative I felt this was an area lacking, but we got there
                      in the end."
                  rating="4.7"
                  image={myImg}
                />
              </div>
            </div>
            <div className="mainSlide">
              <div className="slideItems">
                <Rating
                  message="Very good communication and responsive. Very experienced
                      in building the website. Regarding the design and being
                      creative I felt this was an area lacking, but we got there
                      in the end."
                  rating="4.7"
                  image={myImg}
                />
              </div>
            </div>
            <div className="mainSlide">
              <div className="slideItems">
                <Rating
                  message="Very good communication and responsive. Very experienced
                      in building the website. Regarding the design and being
                      creative I felt this was an area lacking, but we got there
                      in the end."
                  rating="4.7"
                  image={myImg}
                />
              </div>
            </div>
            <div className="mainSlide">
              <div className="slideItems">
                <Rating
                  message="Very good communication and responsive. Very experienced
                      in building the website. Regarding the design and being
                      creative I felt this was an area lacking, but we got there
                      in the end."
                  rating="4.7"
                  image={myImg}
                />
              </div>
            </div>
            <div className="mainSlide">
              <div className="slideItems">
                <Rating
                  message="Very good communication and responsive. Very experienced
                      in building the website. Regarding the design and being
                      creative I felt this was an area lacking, but we got there
                      in the end."
                  rating="4.7"
                  image={myImg}
                />
              </div>
            </div>
            <div className="mainSlide">
              <div className="slideItems">
                <Rating
                  message="Very good communication and responsive. Very experienced
                      in building the website. Regarding the design and being
                      creative I felt this was an area lacking, but we got there
                      in the end."
                  rating="4.7"
                  image={myImg}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default RatingSlider;
