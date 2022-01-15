import styled from "styled-components";

const Styles = styled.div`
  .first_card{
    background-image: linear-gradient(to left, #0d4eb1, #2053c3, #3258d6, #445ce8, #5860f9);
  }
  h4{
    font-weight: 700;
    color: #fff;
  }
  button{
    border: 1.5px solid #fff;
    background-color: transparent;
    color: #fff;
    width: 180px;
    height: 50px;
    transition: 0.3s;
  }
  button:hover{
    background-color: #fff;
    color:#000;
    box-shadow: 0 0 20px #fff;
  }
  .second_card{
    background-image: linear-gradient(to right top, #ff9350, #ff844c, #ff734a, #ff614b, #ff4d4d);
    min-height:230px;
  }
  .third_card{
    background-image: linear-gradient(to right top, #17a436, #11ab30, #0ab129, #04b81f, #00be0f);
    min-height:230px;
  }
  .fourth_card{
    background-image: linear-gradient(to bottom, #007219, #258f1e, #43ad21, #62cb22, #82ea1f);
   }
   .five_card{
    background-image: linear-gradient(to bottom, #6c0072, #81028e, #9509ab, #a914ca, #bc1fea);
   }
   .six_card{
    background-image: linear-gradient(to right bottom, #6c0072, #77008c, #7f00a9, #810ec8, #7e1fea);
   }

   @media only screen and (max-width: 768px){
    .second_card{
      margin:20px 0 0 0 !important;
    }
    .third_card{
      margin:20px 0 0 0 !important;
    }
    .fourth_card{
      margin:20px 0 0 0 !important;
    }
    .five_card{
      margin:20px 0 0 0 !important;
    }
    .six_card{
      margin:20px 0 0 0 !important;
    }
    button{
    width: 100%;
  }
   }
`
export default Styles