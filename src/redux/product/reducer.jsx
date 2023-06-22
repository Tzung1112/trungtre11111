import { ADD_PRODUCT } from "./constant"

const initState={
    products:[],
}

const productReducer=(state=initState,action)=>{
    console.log(state)
    switch(action.type){
        case ADD_PRODUCT:
            return{
                ...state,
                products:[...state.products,action.payload]
            };
            default:
                return state;
    }
}
export default productReducer