import React from "react"
import Styles from "./styled";
import Logo from "../../images/logo.svg"
import { FaTelegram, FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import Link from "next/link"

const Footer = () => {
    return (
        <Styles>
            <div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xl-2 col-sm-4 col-md-2 col-6 text-center responsiv-div">
                            <div className="mb-3 d-flex justify-content-center">
                                <Link href="/">
                                    <div className="footer-logo d-flex align-items-center justify-content-center cursor-pointer">
                                        <img src={Logo.src} />
                                    </div>
                                </Link>
                            </div>
                            <h5 style={{ fontWeight: "900" }} className="text-light mb-0">Aka Phone</h5>
                            <p>Качестенное по доступное цену</p>
                        </div>
                        <div className="col-xl-2 col-sm-4 col-md-2 col-6 text-center responsiv-div">
                            <a href="#" className="text-light mb-2 hover-underline">О нас</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Каталог продуктов</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Доставка</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Контакты</a>
                        </div>
                        <div className="col-xl-2 col-sm-4 col-md-2 col-6 text-center responsiv-div">
                            <a href="#" className="text-light mb-2 hover-underline">Смартфоны</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Смарт Часы</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Планшеты</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Камеры</a><br />
                            <a href="#" className="text-light mb-2 hover-underline">Аксессуары</a>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-8 col-8 text-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8941.74054285075!2d69.18900205270931!3d41.27957616663733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1cca2ef94e255a19!2zNDHCsDE2JzUyLjAiTiA2OcKwMTEnMjIuMSJF!5e0!3m2!1sen!2s!4v1641309023530!5m2!1sen!2s" style={{ border: "0", width: "100%", height: "200px" }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-xl-2 col-sm-4 col-md-2 col-4 text-end">
                            <span className="text-light mb-2">Наш телефон</span><br />
                            <a href="tel:+496170961709" className="text-light mb-2" style={{ fontWeight: "700", fontSize: "17px" }}>+998 93 008 55 04</a><br />
                            <span className="text-light mb-2">Наш E-mail</span><br />
                            <a target="_blank" href="mailto:ahrorsulaymanov2@gmail.com" className="text-light mb-2" style={{ fontWeight: "700", fontSize: "17px", wordBreak:"break-all" }}>ahrorsulaymanov2@gmail.com</a><br />
                            <span className="text-light mb-2">Наш адрес</span><br />
                            <a href="#" className="text-light mb-2" style={{ fontWeight: "700", fontSize: "17px" }}>Улица Фарход, дом 7</a>
                            <div className="d-flex align-items-center justify-content-end">
                                <a target="_blank" href="https://t.me/sulaymanov_a" className="text-white telegram-link d-flex align-items-center justify-content-center">
                                    <FaTelegram style={{ fontSize: "20px" }} />
                                </a>
                                <a target="_blank" href="https://api.instagram.com/ahror_sulaymanov_" className="text-white mx-2 instagram-link d-flex align-items-center justify-content-center">
                                    <AiFillInstagram style={{ fontSize: "20px" }} />
                                </a>
                                <a target="_blank" href="https://www.facebook.com/profile.php?id=100075078620164" className="text-white facebook-link d-flex align-items-center justify-content-center">
                                    <FaFacebook style={{ fontSize: "20px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    );
}
export default Footer;