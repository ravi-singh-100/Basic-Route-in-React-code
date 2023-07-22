import { useParams } from "react-router-dom";
import { Fragment } from "react";
const ProductsDetail=()=>{
    const params=useParams();
    return(
        <Fragment>
<h1>ProductsDetail page</h1>
<p>{params.productId}</p>
        </Fragment>

    )
}
export default ProductsDetail;