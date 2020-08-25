import React from "react"

function Product(props){
    return(
        <div>
            <h4>{props.name}</h4>
            {/* To display the price as a Currency */}
            <p>{props.product.price.toLocaleString("en-AU", {style:"currency", currency:"AUD"})}</p>
            <p>{props.product.description}</p>
        </div>
    )
}

export default Product