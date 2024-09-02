import {AddToCart, ProductMedia} from '../../'
import {Heading} from '@/components'


type ProductDetailsInfoType = {
  title: string;
}


function ProductDetailsInfo({title }: ProductDetailsInfoType) {
  return (
    <div className="flex items-center gap-5">
      {/* Product Media */}
      <ProductMedia  />

      {/* Product Meta-Data */}
      <div className="flex flex-col gap-5">
        {/* Product Title */}
        <Heading title= {title} /> 

        {/* Product Action Button */}
        <div className="">
          {/* Rating & Price */}

          {/* Cart & Whishlist */}
          <div className="">
            <AddToCart />
          </div>
        </div>

        {/* ProductDescription */}
      </div>
    </div>
  );
}

export default ProductDetailsInfo