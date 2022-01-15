import React, { useState, useEffect } from "react";
import Styles from "./styled";
import { Badge, Card } from "antd";
import { books } from "../data";
import { MdAddShoppingCart } from "react-icons/md";
import { Pagination } from 'antd';
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../redux/actions";
import { Button } from "reactstrap";
import { toast } from 'react-toastify';

const Books = () => {

    const [allData, setAllData] = useState(books)
    const [page, setpage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        if (page == 1) {
            setAllData(books.slice(0, 8))
        } else if (page == 2) {
            setAllData(books.slice(8, 15))
        }
    }, [page])

    const changePage = page => {
        setpage(page)
    };

    const addToCard = (id, item) => {
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
                <div className="row">
                    {
                        allData.map((item, index) => (
                            <div key={index} className="col-xl-3 col-md-4 col-sm-6 mb-3 card-big-div">
                                {
                                    item.skidka !== 0 ?
                                        <Badge.Ribbon text={item.skidka + " %"} color="#ff4d4f">

                                            <Card
                                                hoverable
                                                // style={{ width: 240 }}
                                                cover={
                                                    <>
                                                        <Link href={`view-item/${item.id}`}>
                                                            <div className="text-center">
                                                                <h5 className="text-center mt-2">{item.name}</h5>
                                                                <img className="slide_img" src={item.image.src} />
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
                                        : <Card
                                            hoverable
                                            // style={{ width: 240 }}
                                            cover={
                                                <>
                                                    <Link href={`view-item/${item.id}`}>
                                                        <div className="text-center">
                                                            <h5 className="text-center mt-2">{item.name}</h5>
                                                            <img className="slide_img" src={item.image.src} />
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
                                }
                            </div>
                        ))
                    }
                    <div className="me-1 mt-3 d-flex justify-content-end">
                        <Pagination current={page} onChange={changePage} total={books.length} />
                    </div>
                </div>
            </div>
        </Styles>
    );
};
export default Books;
