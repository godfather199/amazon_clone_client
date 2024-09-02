import { useParams } from 'react-router-dom'
import {ProductDetailsInfo} from '../'
import { useProductById } from '@/hooks/product/useProductById'
import { ProductType } from '@/types/product'



function ProductDetails() {
  const {productId} = useParams()

  const {product, isLoading} = useProductById(productId as string)
  // console.log("Product details: ", product)
  
  return (
    <div className="">
      {/* Product Info */}
      <ProductDetailsInfo
        title={product?.title as string}
      />

      {/* Similar Product's Carousel */}
      {/* Customer Feedback */}
    </div>
  );
}

export default ProductDetails