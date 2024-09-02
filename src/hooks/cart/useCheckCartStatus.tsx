import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"



export const useCheckCartStatus = () => {
    const [isQueryEnabled, setIsQueryEnabled] = useState(false);

    useEffect(() => {
      setIsQueryEnabled(true);
    }, []);

    const getCheckCartStatusRequest = async (): Promise<boolean> => {
      const { data } = await axios.get(`/api/cart/status`);
      // console.log('Data: ', data.msg)

      return data.cartStatus;
    };

    const { data: cart_Status } = useQuery({
      queryKey: ["checkCartStatus"],
      queryFn: getCheckCartStatusRequest,
      enabled: isQueryEnabled,
      staleTime: Infinity,
    });

    return { cart_Status };
};