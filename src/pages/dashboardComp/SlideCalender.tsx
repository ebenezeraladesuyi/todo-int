// import React from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Day from "../../components/static/Day";


const SlideCalender = () => {

    const settings = {
        // autoplay: true,
        // autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 10,
      slidesToScroll: 1,
      rtl: true,
      responsive: [
        {
        breakpoint: 1000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
          {
          breakpoint: 770,
          settings: {
              slidesToShow: 9,
              slidesToScroll: 1,
          }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
          },
          {
              breakpoint: 475,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 400,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 350,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          }
      ]
    };



  return (
    <div className="w-[91%] lg:w-[61%] h-[100px] flex flex-col justify-center overflow-hidden pb-[10px] pt-2 bg-white">

        <h5 className="text-[14px] font-bold mb-[10px]">September 2023</h5>

        <div className="">

            <Slider {...settings} className="">

                <Day
                    day="Tue" 
                    date="2"
                    />
                <Day
                    day="Mon" 
                    date="1"
                    />
                <Day
                    day="Wed" 
                    date="10"
                    />
                <Day
                    day="Tue" 
                    date="9"
                    />
                <Day
                    day="Mon" 
                    date="8"
                    />
                    <Day
                        day="Sun" 
                        date="7"
                        />
                    <Day
                        day="Sat" 
                        date="6"
                        />
                    <Day
                        day="Fri" 
                        date="5"
                        />
                    <Day
                        day="Thur" 
                        date="4"
                        />
                    <Day
                        day="Wed" 
                        date="3"
                        />

            </Slider>
        </div>
        
    </div>
  )
}

export default SlideCalender;