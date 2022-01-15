import styled from "styled-components";

const Styles = styled.div`
  .slider_my{
    background-color: rgb(239,239,239);
  }
  .ant-card-body{
    padding: 0;
  }
  .ant-card-body button{
    border: none;
    background-color: #ff4d4f;
    color: #fff;
    font-size: 16px;
  }
  .slide_img{
    width: 90% !important;
  }
  .ant-card:hover .slide_img{
    width: 105% !important;
  }
  .item-color{
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    color: #8c8c8c;
    margin-left: 15px;
  }
  .item-price{
    font-size: 18px;
    font-weight: 700;
    color: #ff4d4f;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  .swiper-button-prev{
    position: absolute;
    left: -0%;
    z-index: 10;
    color: #ff4d4f;
    z-index: 1000;
    
  }
  .swiper-button-prev::after{
    z-index:1000;
  }
`
export default Styles;