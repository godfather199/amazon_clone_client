import { useNavigate } from 'react-router-dom';
import {ImageSlider, ProductInfo} from '../'
import { ProductType } from '../../types/product';
import { Card, CardContent, CardFooter } from '../ui/card';

type ProductInfoType = {
  product: ProductType;
}


function Product({product}: ProductInfoType) {
  const navigate = useNavigate()
  
  // console.log("Product: ", product)


  const handle_Product_Details_Navigate = () => {
    navigate(`/product/${product._id}`)
  }


  return (
    <Card className="w-[20rem] border border-gray-300 rounded-lg shadow-lg">
      {/* Image slider */}
      <CardContent>
        <ImageSlider media={product?.productImages} />
      </CardContent>

      {/* Product Info */}
      <CardFooter
        onClick={handle_Product_Details_Navigate}
        className=" cursor-pointer"
      >
        <ProductInfo
          title={product?.title}
          rating={product?.feedback}
          price={product?.price}
        />
      </CardFooter>
    </Card>
  );
}

export default Product;
