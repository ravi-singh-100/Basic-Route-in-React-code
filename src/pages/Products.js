import { Fragment } from "react"
import { Link } from "react-router-dom"

const PRODUCT_DUMMY=[{
id:'p1',
title:'product-1'
},{
    id:'p2',
    title:'product-2'
},{
    id:'p3',
    title:'product-3'
}]
function ProductsPage(){
return (
    <Fragment>
<h1> THis is Product page</h1>
<ul>
{PRODUCT_DUMMY.map((prod)=><li key={prod.id}>
 <Link to={`/products/${prod.id}`}> {prod.title}</Link>  
    </li>)}
</ul>
    </Fragment>
)
}
export default ProductsPage