import { useEffect, useState } from "react";


type RatingType = {
    customerId: string;
    rating: number;
    review: string;
};


const useCalcuateRating = (rating: RatingType[] | undefined) => {
    const [productRating, setProductRating] = useState(0)

    useEffect(() => {
      if (rating?.length === 0) {
        setProductRating(0);
      }
    }, []);


    return {productRating}
}



export default useCalcuateRating