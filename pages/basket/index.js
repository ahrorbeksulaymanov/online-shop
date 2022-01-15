import React from "react";
import { useSelector } from "react-redux";
import BasketItems from "../../components/basket";
import EmptyBasket from "../../components/basket/freeBasket";
import Head from "next/head";

const BasketDates = () => {

    const products = useSelector((state) => state?.product);

    return (
        <div className="container mt-5 pt-5">
            <Head>
                <title>The best electrical equipment shop</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            {
                products.length !== 0 ?
                    <BasketItems /> : <EmptyBasket />
            }
        </div>
    )
}
export default BasketDates;