import { useEffect, useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import classes from "./style.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoThreeBars } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link"
import { useSelector } from "react-redux";

function HeaderForShop() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
  }, [offset]);


  const products = useSelector((state) => state?.product)

  return (
    <div className={offset==0?classes.header_main_div:classes.header_main_div_onscroll}>
      <Navbar expand="md" container className="m-0 py-2">
        <Link href="/">
          <div className="d-flex justify-content-between cursor-pointer">
            <img
              src="https://aka-phone.netlify.app/images/logo.svg"
              alt="img error"
            />
            <div>
              <p className={classes.logoName}>AkaPhone</p>
              <p className={classes.logoText}>Качестенное по доступное цену</p>
            </div>
          </div>
        </Link>
        <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}} >{isOpen ? <GoThreeBars /> : <VscChromeClose />}</NavbarToggler>
        <Collapse
          navbar
          className={`${isOpen && "isOpen"} justify-content-between`}
          isOpen={isOpen}
        >
          <Nav className="me-auto" navbar className={classes.nav_links}>
            <NavItem>
              <a href="#special">Специальные предложения</a>
            </NavItem>
            <NavItem>
              <a href="#katalog">Каталог товаров</a>
            </NavItem>
          </Nav>
          <NavbarText >
            <div className="d-flex align-items-center">
              <div >
                <p className={classes.nav_number}>(93) 008 55 04</p>
                <a href="tel:+496170961709">
                  <button className="btn btn-outline-danger">Заказать звонок</button>
                </a>
              </div>
              <div className={classes.basket_icon_wrapper}>
                {
                  products && <span className={classes.basket_count}>{products.length}</span>
                }
                <Link href="/basket">
                  <HiOutlineShoppingBag className={classes.basket_icon} />
              </Link>
              </div>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default HeaderForShop;
