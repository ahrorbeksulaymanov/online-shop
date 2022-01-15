import { TiShoppingCart } from "react-icons/ti"
import Link from "next/link"
import { Button } from "reactstrap";
const EmptyBasket = () => {

    return (
        <div className="container mt-5">
            <h3>Корзина</h3>
            <div className="border border-2 text-center mb-5">
                <TiShoppingCart style={{fontSize:"255px", color:"9FAAB7"}} />
                <h2 className="text-secondary">В вашей корзине пусто? Не беда!</h2>
                <p className="text-secondary">Начните выбирать товары из широкого ассортимента нашего каталога.</p>
                <Link href="/">
                    <Button style={{ borderRadius:"0" }} className="w-100 bg-danger border-0">Перейти к покупкам</Button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyBasket;