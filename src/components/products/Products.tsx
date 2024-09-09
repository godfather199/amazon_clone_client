import {Product} from '../'
import ProductSkeleton from '../../layout/ProductSkeleton'
import { ProductType } from '@/types/product'

type ProductsType = {
  isLoading: boolean;
  products: ProductType[] | undefined
}


function Products({isLoading, products}: ProductsType) {

  return (
    <div className="">
      {isLoading ? (
        <div className="grid grid-cols-3 gap-5">
          {Array(4)
            .fill("")
            .map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {products && (
            <>
              {products?.map((product) => (
                <Product key={product?._id} product={product} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Products

