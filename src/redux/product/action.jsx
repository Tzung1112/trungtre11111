import { ADD_PRODUCT } from "./constant"

export const addProduct=(product)=>({
    type:ADD_PRODUCT,
    payload:product
})