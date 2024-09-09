import axios from "axios"
import { useEffect, useState } from "react"
import { API_BASE_URL } from "../../App"
import { useQuery } from "@tanstack/react-query"



export const useFetchUserCart = () => {
    // const [isQueryEnabled, setIsQueryEnabled] = useState(false);

    // useEffect(() => {
    //   setIsQueryEnabled(true);
    // }, []);


    const getUserCartRequest = async () => {
      const { data } = await axios.get(`/api/cart/user-cart`);
      // console.log('Data: ', data)

      return data.cart.cartItems
    };

    const { data: user_Cart, isLoading } = useQuery({
      queryKey: ["userCart"],
      queryFn: getUserCartRequest,
      // enabled: isQueryEnabled,
      // staleTime: Infinity,
    });

    

    return { user_Cart, isLoading };
};



