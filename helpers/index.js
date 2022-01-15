import { useSelector } from "react-redux"

export const isAdded = async (itemId) => {
    const product = useSelector((state) => state)
    return product?.product?.includes(itemId)
}