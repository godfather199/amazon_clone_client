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

