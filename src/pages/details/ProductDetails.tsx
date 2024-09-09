import { useParams } from 'react-router-dom'
import {ProductDetailsInfo} from '../'
import { useProductById } from '@/hooks/product/useProductById'
import { ProductType } from '@/types/product'
import { useLoginUser } from '@/hooks/auth/useLoginUser'
import { useMutation, useQuery } from '@tanstack/react-query'



function ProductDetails() {
  const {productId} = useParams()
 
  const { data } = useQuery({
    queryKey: ["logged_In_User_State"],
    staleTime: Infinity,
  });
  // console.log("Product details: ", data);
  
  const {product, isLoading} = useProductById(productId as string)
  
  
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




