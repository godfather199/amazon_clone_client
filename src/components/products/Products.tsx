import { useLocation } from 'react-router-dom'
import {Product} from '../'
import { useFetchSellerProducts } from "../../hooks/product/useFetchSellerProducts"
import ProductSkeleton from '../../layout/ProductSkeleton'
import { useEffect, useState } from 'react'
import { useFeaturedProducts } from '@/hooks/product/useFeaturedProducts'
import { ProductType } from '@/types/product'

type ProductsType = {
  isLoading: boolean;
  products: ProductType[] | undefined
}


function Products({isLoading, products}: ProductsType) {
  const {pathname} = useLocation()

  const [productsLoading, setProductsLoading] = useState(false)
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([])

  const {isLoading: featuredProductLoading, featured_Products} = useFeaturedProducts(pathname)

  const {isLoading: sellerProductLoading, seller_Products} = useFetchSellerProducts(pathname)



  // Display products and loading indicator with refrence to pathname
  useEffect(() => {
    if(featuredProductLoading ) setProductsLoading(featuredProductLoading)

    if(sellerProductLoading) setProductsLoading(sellerProductLoading)
      
    if(featured_Products) setDisplayProducts(featured_Products)

    if(seller_Products) setDisplayProducts(seller_Products)
  }, [featuredProductLoading, featured_Products, sellerProductLoading, seller_Products])



  return (
    <div className="">
      {isLoading ? (
        <div className='grid grid-cols-3 gap-5'>
          {Array(4)
            .fill("")
            .map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-5'>
          {products?.map((product) => (
            <Product key={product?._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products

