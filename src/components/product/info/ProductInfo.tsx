import {TruncatedText} from '../../../pages'
import { Star, StarOffIcon } from "lucide-react";
import useCalcuateRating from "../../../hooks/rating/useCalcuateRating";


type ProductInfoType = {
  title: string;
  rating?: {
    customerId: string,
    rating: number,
    review: string
  }[];
  price: number;
}

// const formatNumberWithCommas = (number: Number) => {
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };


function ProductInfo({title, rating, price}: ProductInfoType) {
  const {productRating} = useCalcuateRating(rating)

  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight"></h3>
        <TruncatedText text={title} wordLimit={10} type="p" />
      </div>

      {/* Rating */}
      <div className="">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {productRating === 0 && (
            <div className="flex items-center gap-5">
              <small className="text-sm font-medium leading-none">
                The product is not yet rated
              </small>
              <StarOffIcon />
            </div>
          )}
          {/* <Star className="" /> */}
        </h3>
      </div>

      {/* Price */}
      <div className="">
        <p className="leading-7 [&:not(:first-child)]:mt-6">{`₹${price.toLocaleString(
          "en-US"
        )}`}</p>
        {/* <p className="leading-7 [&:not(:first-child)]:mt-6">{`₹${formatNumberWithCommas(
          price
        )}`}</p> */}
      </div>
    </div>
  );
}

export default ProductInfo