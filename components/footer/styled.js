import styled from "styled-components";

const Styles = styled.div`
    background-color:#062B40 !important;
    color:#fff;
    .footer-logo{
        width:70px;
        height:70px;
        background-color:#fff;
        border-radius:50%;
        border:4px solid #3A68DF;
        text-align: center !important;
    }
    .facebook-link{
        height:35px;
        width:35px;
        border-radius:50%;
        background-color:#4267B2;
    }
    .telegram-link{
        height:35px;
        width:35px;
        border-radius:50%;
        background-color:#0088CC;
    }
    .instagram-link{
        height:35px;
        width:35px;
        border-radius:50%;
        background-color:#E1306C;
    }
    .hover-underline{
        &:hover{
            text-decoration: underline;
        }
    }
    @media screen and (max-width: 576px) {
        .responsiv-div{
            display: none;
        }
    }
`
export default Styles;