import React from "react";
import Styles from "./styled";
import Image from "next/image";
import {
  books,
  computers,
  naushnik,
  office,
  planshets,
  watches,
} from "../data";
import { Badge } from "antd";
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../redux/actions";
import { toast } from 'react-toastify';

const OfferSpesial = () => {

  const dispatch = useDispatch()

  const addToCard = (id, item) => {
    dispatch({ type: ADD_ITEM, data: id });
    const localDAta = JSON.parse(sessionStorage.getItem("countProducts")) || [];
    localDAta.unshift({id:item?.id, count:item?.count})
    sessionStorage.setItem("countProducts", JSON.stringify(localDAta))
    toast(
    <div>
      <p style={{fontWeight:"bold", fontSize:"18px"}} className="m-0">Товар добавлен в корзину</p>
      <div className="d-flex justify-content-start align-items-center m-0">
        <img style={{width:"100px"}} src={item.image.src} alt="" />
        <div>
          <p className="m-0">{item.name}</p>
          <p className="m-0 font-weight-bold" style={{fontWeight:"bold", fontSize:"16px"}}>{item.price} ₽</p>
        </div>
      </div>
      <Link href={"/basket"}>
        <button className="btn btn-danger w-100" style={{borderRadius:"0"}}>Перейти в корзину</button>
      </Link>
    </div>)
  }

  const products = useSelector((state) => state)
  return (
    <Styles>
      <div className="slider_my" id="special">
        <div className="container pb-5">
          <h3 className="pt-5 mb-4">Специальные предложения</h3>
          <div className="row">
            <div className="col-lg-6">
              <Badge.Ribbon text={computers[0].skidka + " %"} color="#ff4d4f">
                <div className="first_card p-3 mb-4">
                  <div className="row">
                    <div className="col-md-4">
                      <Link href={`view-item/${computers[0].id}`}>
                        <Image src={computers[0].image} className="cursor-pointer" />
                      </Link>
                    </div>
                    <div className="col-md-8 text-end mt-3">
                      <Link href={`view-item/${computers[0].id}`}>
                        <div className="cursor-pointer">
                          <h4>{computers[0].name}</h4>
                          <h4>{computers[0].price} ₽</h4>
                        </div>
                      </Link>
                      <button disabled={products?.product?.includes(computers[0].id)} onClick={() => addToCard(computers[0].id, computers[0])}>{products?.product?.includes(computers[0].id) ? "Added to card" : "Add to card"}</button>
                    </div>
                  </div>
                </div>
              </Badge.Ribbon>
              <div className="row" style={{ padding: "0 12px" }}>
                <div className="col-md-6">
                  <div className="row second_card p-3 mb-4" style={{ marginRight: "0px" }}>
                    <div className="col-lg-6">
                      <Link href={`view-item/${naushnik[0].id}`}>
                        <div className="cursor-pointer">
                          <h4>{naushnik[0].name}</h4>
                          <h4>{naushnik[0].price} ₽</h4>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link href={`view-item/${naushnik[0].id}`}>
                        <Image className="cursor-pointer" src={naushnik[0].image} />
                      </Link>
                    </div>
                    <button disabled={products?.product?.includes(naushnik[0].id)} onClick={() => addToCard(naushnik[0].id, naushnik[0])} className="w-100">{products?.product?.includes(naushnik[0].id) ? "Added to card" : "Add to card"}</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row third_card p-3" style={{ marginLeft: "0px" }}>
                    <div className="col-lg-6">
                      <Link href={`view-item/${watches[0].id}`}>
                        <div className="cursor-pointer">
                          <h4>{watches[0].name}</h4>
                          <h4>{watches[0].price} ₽</h4>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link href={`view-item/${watches[0].id}`}>
                        <Image className="cursor-pointer" src={watches[0].image} />
                      </Link>
                    </div>
                    <button disabled={products?.product?.includes(watches[0].id)} onClick={() => addToCard(watches[0].id, watches[0])} className="w-100">{products?.product?.includes(watches[0].id) ? "Added to card" : "Add to card"}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <Badge.Ribbon text={office[0].skidka + " %"} color="#ff4d4f">
                    <div className="fourth_card p-3 pt-4">
                      <Link href={`view-item/${office[0].id}`}>
                        <div className="cursor-pointer">
                          <h4 className="text-end">{office[0].name}</h4>
                          <h4 className="text-end">{office[0].price} ₽</h4>
                          <Image src={office[0].image} />
                        </div>
                      </Link>
                      <button disabled={products?.product?.includes(office[0].id)} onClick={() => addToCard(office[0].id, office[0])} className="w-100">{products?.product?.includes(office[0].id) ? "Added to card" : "Add to card"}</button>
                    </div>
                  </Badge.Ribbon>
                </div>
                <div className="col-md-6 ps-4">
                  <div className="row five_card px-3 pt-2 pb-3">
                    <div className="col-lg-6">
                      <Link href={`view-item/${planshets[0].id}`}>
                        <div className="cursor-pointer">
                          <h4>{planshets[0].name}</h4>
                          <h4>{planshets[0].price} ₽</h4>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link href={`view-item/${planshets[0].id}`}>
                        <Image className="cursor-pointer" src={planshets[0].image} />
                      </Link>
                    </div>
                    <button disabled={products?.product?.includes(planshets[0].id)} onClick={() => addToCard(planshets[0].id, planshets[0])} className="w-100">{products?.product?.includes(planshets[0].id) ? "Added to card" : "Add to card"}</button>
                  </div>
                  <div className="row six_card p-3 mt-4">
                    <div className="col-lg-6">
                      <Link  href={`view-item/${books[0].id}`}>
                        <div className="cursor-pointer">
                          <h4>{books[0].name}</h4>
                          <h4>{books[0].price} ₽</h4>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link href={`view-item/${books[0].id}`}>
                        <Image className="cursor-pointer" src={books[0].image} />
                      </Link>
                    </div>
                    <button disabled={products?.product?.includes(books[0].id)} onClick={() => addToCard(books[0].id, books[0])} className="w-100">{products?.product?.includes(books[0].id) ? "Added to card" : "Add to card"}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Styles >
  );
};
export default OfferSpesial;
