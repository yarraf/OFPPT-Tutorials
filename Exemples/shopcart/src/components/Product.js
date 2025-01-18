


const Product = ({price,quantity,title})=>{
    return (<div>
    {title} - &#36;{price}
    {quantity ? ` x ${quantity}` : null}
  </div>)
}

export default Product;