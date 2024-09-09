import {Product} from '@/components'
import {
  UpdateQuantityButton,
  DeleteButton,
  WhishlistButton,
  UpdateSelectQuantity,
} from "@/pages";
import ProductSkeleton from "@/layout/ProductSkeleton";
import { ProductType } from "@/types/product";



type CartPayloadType = {
  productId: ProductType;
  quantity: number;
}


type CartItemType = {
  isLoading: boolean;
  products: CartPayloadType[];
}




function CartItem({isLoading, products}: CartItemType) {
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
        <div className="flex flex-col">
          {products && (
            <>
              {products?.map(({ productId: product, quantity }) => (
                <div
                  style={{ border: "3px solid red" }}
                  className="flex items-center justify-center gap-8 w-[40rem]"
                >
                  <Product key={product?._id} product={product} />

                  <div className="flex items-center justify-center">
                    {/* <UpdateQuantityButton quantity={quantity} /> */}
                    <UpdateSelectQuantity quantity={quantity} />

                    <div className="">
                      <DeleteButton />
                      <WhishlistButton />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CartItem;
