import React, { useEffect, useRef, useState } from "react";
import Styles from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Card, Badge } from 'antd';
import { MdAddShoppingCart } from "react-icons/md";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { BiChevronLeftSquare } from "react-icons/bi"
import { BiChevronRightSquare } from "react-icons/bi"
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM } from "../../redux/actions";
import { Button } from "reactstrap";
import { phones } from "../data";
import { ToastContainer, toast } from 'react-toastify';

SwiperCore.use([Pagination, Navigation]);

const FirstPage = () => {

  const dispatch = useDispatch()

  const [width, setWidth] = useState(0);
  const [slideItem, setslideItem] = useState(4);
  const [phoneData, setphoneData] = useState([]);

  const handleResize = () => setWidth(window.innerWidth);
  const sliderRef = React.createRef()

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  useEffect(() => {
    handleResize()
    setphoneData(phones)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (width < 992 && width > 768) {
      setslideItem(3)
    } else if (width < 768 && width > 500) {
      setslideItem(2)
    } else if (width < 500) {
      setslideItem(1)
    } else {
      setslideItem(4)
    }
  }, [width])

  function addToCard(id, item) {
    dispatch({ type: ADD_ITEM, data: id });
    const localDAta = JSON.parse(sessionStorage.getItem("countProducts")) || [];
    localDAta.unshift({id:item?.id, count:item?.count})
    sessionStorage.setItem("countProducts", JSON.stringify(localDAta))
    toast(
      <div>
        <p style={{ fontWeight: "bold", fontSize: "18px" }} className="m-0">Товар добавлен в корзину</p>
        <div className="d-flex justify-content-start align-items-center m-0">
          <img style={{ width: "100px" }} src={item.image.src} alt="" />
          <div>
            <p className="m-0">{item.name}</p>
            <p className="m-0 font-weight-bold" style={{ fontWeight: "bold", fontSize: "16px" }}>{item.price} ₽</p>
          </div>
        </div>
        <Link href={"/basket"}>
          <button className="btn btn-danger w-100" style={{ borderRadius: "0" }}>Перейти в корзину</button>
        </Link>
      </div>)
  }

  const products = useSelector((state) => state)

  return (
    <Styles>
      <div className="slider_my">
        <div className="container pb-5">
          <h3 className="pt-5 mb-4">Горячие за неделью</h3>
          <Swiper
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            speed={800}
            slidesPerView={slideItem}
            spaceBetween={30}
            navigation={{
              // Both prevEl & nextEl are null at render so this does not work
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current

                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
          >
            {phoneData.map((item, index) => (
              <SwiperSlide key={index} ref={sliderRef}>
                {
                  item.skidka !== 0 ?
                    <Badge.Ribbon text={item.skidka + " %"} color="#ff4d4f">
                      <Card
                        hoverable
                        // style={{ width: 240 }}
                        cover={
                          <>
                            <Link href={`view-item/${item.id}`}>
                              <div>
                                <h5 className="text-center mt-2">{item.name}</h5>
                                <Image className="slide_img" src={item.image} />
                              </div>
                            </Link>
                          </>
                        }
                      >
                        <Link href={`view-item/${item.id}`}>
                          <div>
                            <p className="item-color">Белый, серый, синий</p>
                            <p className="item-price">{item.price}  ₽</p>
                          </div>
                        </Link>
                        <Button style={{ borderRadius: "0" }} disabled={products?.product?.includes(item.id)} onClick={() => addToCard(item.id, item)} className="w-100">{products?.product?.includes(item.id) ? "Added to card" : "Add to card"} <MdAddShoppingCart className="ms-2" /></Button>
                      </Card>
                    </Badge.Ribbon>
                    :
                    <Card
                      hoverable
                      // style={{ width: 240 }}
                      cover={
                        <Link href={`view-item/${item.id}`}>
                          <div>
                            <h5 className="text-center mt-2">{item.name}</h5>
                            <Image className="slide_img" src={item.image} />
                          </div>
                        </Link>
                      }
                    >
                      <Link href={`view-item/${item.id}`}>
                        <div>
                          <p className="item-color">Белый, серый, синий</p>
                          <p className="item-price">{item.price}  ₽</p>
                        </div>
                      </Link>
                      <Button style={{ borderRadius: "0" }} disabled={products?.product?.includes(item.id)} onClick={() => addToCard(item.id, item)} className="w-100">{products?.product?.includes(item.id) ? "Added to card" : "Add to card"} <MdAddShoppingCart className="ms-2" /></Button>
                    </Card>
                }
              </SwiperSlide>
            ))}
            <div className="text-end d-flex justify-content-end">
              <div ref={navigationPrevRef} ><BiChevronLeftSquare style={{ fontSize: "33px", color: "#ff7875", cursor: "pointer" }} /></div>
              <div ref={navigationNextRef} ><BiChevronRightSquare style={{ fontSize: "33px", color: "#ff7875", cursor: "pointer" }} /></div>
            </div>
          </Swiper>
        </div>
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Styles>
  );
};
export default FirstPage;