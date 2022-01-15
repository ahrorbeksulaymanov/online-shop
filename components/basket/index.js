import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_DATA, REMOVE_ITEM } from "../../redux/actions";
import { allProduct } from "../data";
import Swal from 'sweetalert2'

const BasketItems = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch()
    const [result, setresult] = useState([])
    const [allPrice, setallPrice] = useState(0)
    const [allSkidka, setallSkidka] = useState(0)
    const [itemCount, setitemCount] = useState([])
    
    useEffect(() => {
        const a = allProduct?.filter(({ id }) => products?.product?.includes(id));
        setresult(a)
        
        setitemCount(JSON.parse(sessionStorage.getItem("countProducts")).sort(function(a, b) {
            return parseFloat(a.id) - parseFloat(b.id);
        }))
        
    }, [products])

    function deleteToCard(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Deleted',
                    showConfirmButton: false,
                    timer: 1500
                  })
                 dispatch({ type: REMOVE_ITEM, data: id })
                 const localDAta = JSON.parse(sessionStorage.getItem("countProducts"));
                 const filteredData = localDAta.filter( i => i.id !== id)                
                 sessionStorage.setItem("countProducts", JSON.stringify(filteredData))
            }
          })
        
    }

    function clearBasket() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert them!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete all!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Deleted',
                    showConfirmButton: false,
                    timer: 1500
                  })
              dispatch({ type: CLEAR_DATA })
            }
          })
    }

    const checkOut = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Submited',
            showConfirmButton: false,
            timer: 1500
          })
    }

    useEffect(() => {
        let allPrices = 0;
        let all_skidka = 0;
        for (let index = 0; index < result.length; index++) {
            allPrices = allPrices + result[index]?.price * itemCount[index].count;
        }
        setallPrice(allPrices)
        for (let index = 0; index < result.length; index++) {
            all_skidka = all_skidka + result[index]?.skidka*result[index]?.price*0.01*itemCount[index].count;
        }
        setallSkidka(all_skidka)
    }, [result, itemCount])

    const countAdd = (itemId) => {
        const array = []
        itemCount.map(i => {
            if(i.id == itemId){
                array.push({id:itemId, count:i.count+1}) 
            }else{
                array.push(i) 
            }
        })
        setitemCount(array)
        sessionStorage.setItem("countProducts", JSON.stringify(array));
    }
    const countRemoved = (itemId) => {
        const array = []
        itemCount.map(i => {
            if(i.id == itemId && i.count > 1){
                array.push({id:itemId, count:i.count-1}) 
            }else{
                array.push(i) 
            }
        })
        setitemCount(array);
        sessionStorage.setItem("countProducts", JSON.stringify(array))
    }

    return (
        <div className="container mt-5">
            <div className="row my-4">
                <div className="col-md-9">
                    {
                        result && result?.map((item, index) => (
                            <div key={index} className="border p-2 d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex justify-content-start align-items-center" style={{width:"50%"}}>
                                    <img src={item.image.src} style={{width:"60px", height:"70px"}} />
                                    <div>
                                        <p className=" m-0">Category</p>
                                        <p className="fw-bold m-0">{item.name}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center" style={{width:"40%"}}>
                                    <span className="me-4" style={{ fontSize: "16px" }}>{item.price} ₽</span>
                                    <button onClick={() => countRemoved(item.id)} className="btn btn-light border" style={{ fontSize: "16px" }}>-</button>
                                    <span className="mx-2" style={{ fontSize: "16px" }}>{itemCount[index]?.count}</span>
                                    <button onClick={() => countAdd(item?.id)} className="btn btn-light border" style={{ fontSize: "16px" }}>+</button>
                                    <span className="ms-3" style={{ fontSize: "16px" }}>{item.price * itemCount[index]?.count} ₽</span>
                                </div>
                                <FaTrashAlt onClick={() => deleteToCard(item?.id)} style={{ fontSize: "22px", width:"10%" }} className="me-3 cursor-pointer" />
                            </div>
                        ))
                    }
                </div>
                <div className="col-md-3">
                    <div className="border p-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="" style={{ fontSize: "16px" }}>Стоимость:</span>
                            <span className="fw-bold" style={{ fontSize: "16px" }}>{allPrice} ₽</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="" style={{ fontSize: "16px" }}>Скидка:</span>
                            <span className="fw-bold" style={{ fontSize: "16px" }}>{allSkidka.toFixed(1)} ₽</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="" style={{ fontSize: "16px" }}>Всего к оплате::</span>
                            <span className="fw-bold" style={{ fontSize: "16px" }}>{allPrice - allSkidka} ₽</span>
                        </div>
                        <button style={{ borderRadius: "0" }} onClick={clearBasket} className="btn btn-danger w-100 my-2">Clear Card</button>
                        <button style={{ borderRadius: "0" }} onClick={checkOut} className="btn btn-success w-100">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasketItems;