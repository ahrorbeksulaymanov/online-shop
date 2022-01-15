import React from "react";
import Styles from "./styled";
import Image from "next/image";
import { Tabs } from "antd";
import AllProductImg from "../../images/all_product.jpg"
import Laptop from "../../images/laptop.png"
import Office from "../../images/pffice.png"
import Book from "../../images/book.png"
import Phone from "../../images/phone.png"
import AllProducs from "./allProducts";
import Phones from "./phones";
import Computers from "./computers";
import OfficeProducts from "./office";
import Books from "./books";

const { TabPane } = Tabs;

const KactalogProducts = () => {

  return (
    <Styles>
      <div className="slider_my" id="katalog">
        <div className="container pb-5">
          <h3 className=" mb-4">Каталог товаров</h3>
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane tab={
                <div className="d-flex justify-content-between align-items-center">
                  <Image width={50} height={30} src={AllProductImg} />
                  <span className="ms-2">All products</span>
                </div>} key="1">
                <AllProducs />
              </TabPane>
              <TabPane tab={
                <div className="d-flex justify-content-between align-items-center">
                  <Image width={50} height={30} src={Phone} />
                  <span className="ms-2">Phones</span>
                </div>} key="2">
                <Phones />
              </TabPane>
              <TabPane tab={
                <div className="d-flex justify-content-between align-items-center">
                  <Image width={50} height={30} src={Laptop} />
                  <span className="ms-2">Computers</span>
                </div>} key="3">
                <Computers />
              </TabPane>
              <TabPane tab={
                <div className="d-flex justify-content-between align-items-center">
                  <Image width={50} height={35} src={Office} />
                  <span className="ms-2">Office</span>
                </div>} key="4">
                <OfficeProducts />
              </TabPane>
              <TabPane tab={
                <div className="d-flex justify-content-between align-items-center">
                  <Image width={50} height={35} src={Book} />
                  <span className="ms-2">Books</span>
                </div>} key="5 ">
                <Books />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default KactalogProducts;
