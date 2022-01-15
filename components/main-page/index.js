import classes from "./style.module.css";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import SmartWatch from "../../images/smart_watch.png"
import BackGroundWatch from "../../images/background_watch2.jpg"
// import BackGroundWatch from "../../images/background_watch.jpg"
import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

function MainPage() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className={classes.main_div}>
          <div className={classes.pasition_abs}>
              <div className={classes.pasition_color}></div>
              <img src={BackGroundWatch.src} />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="col-md-6" style={{ width: "75%" }}>
                <h3 className={classes.main_theme}>
                  Смартфоны и гаджеты для близких и друзей по доступной цене
                </h3>
                <p className={classes.main_title}>
                  В нашем магазине вы сможете найти качествунную продукцию по
                  досутпным ценам для вашего близкого человека
                </p>
                <a href="#katalog">
                  <Button
                    type="primary"
                    danger
                    style={{ width: "250px", height: "50px", fontSize: "18px" }}
                    className="mb-5"
                  >
                    Посмотреть каталог
                  </Button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 pt-4">
              <Swiper loop={true} className="mySwiper"
               autoplay={{
                 delay: 3000,
                 disableOnInteraction: false
               }}
               speed={800}
                >
                <SwiperSlide>
                  <div className={classes.slider_element}>
                     <Image src={SmartWatch} /><p style={{marginLeft:"200px"}} className={classes.slider_title} >Смарт часы AmazFit <HiOutlineArrowNarrowRight /></p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={classes.slider_element}>
                    <Image src={SmartWatch} /><p style={{marginLeft:"200px"}} className={classes.slider_title} >Смарт часы AmazFit <HiOutlineArrowNarrowRight /></p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={classes.slider_element}>
                    <Image src={SmartWatch} /><p style={{marginLeft:"200px"}} className={classes.slider_title} >Смарт часы AmazFit <HiOutlineArrowNarrowRight /></p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
