import styled from "styled-components";

const Styles = styled.div`
  .ant-card-body {
    padding: 0;
    height: 20% !important;
  }
  .ant-card-cover{
    height: 80% !important;
  }
  .ant-card{
    height: 90% !important;
  }
  .ant-ribbon-wrapper{
    height: 100% !important;
  }
  .ant-card-body button {
    border: none;
    background-color: #ff4d4f;
    color: #fff;
    font-size: 16px;
  }
  .slide_img {
    width: 85% !important;
    overflow: hidden;
    object-fit: cover;
    max-height:250px;
  }
  .item-color {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    color: #8c8c8c;
    margin-left: 15px;
  }
  .item-price {
    font-size: 18px;
    font-weight: 700;
    color: #ff4d4f;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  .card-big-div{
    height: 400px !important;
    margin-bottom: 15px;
  }

`;

export default Styles;
