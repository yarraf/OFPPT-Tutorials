import React from "react"
import Cart from "../components/Cart"
import { getCartProducts, getTotal } from "../reducers";
import { connect } from "react-redux";
import { checkout } from "../actions";




const CartContainer = ({products, total, checkout})=>(
    <Cart products={products} total={total} onCheckoutClicked={()=>checkout(products)}/>
)



const mapStateTpProps = state =>({
products:getCartProducts(state),
total:getTotal(state)
})
export default connect(mapStateTpProps,{checkout}) (CartContainer);