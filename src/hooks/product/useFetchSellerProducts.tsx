import axios from "axios"
import { useEffect, useState } from "react"
import { ProductType } from "../../types/product"
import { useQuery } from "@tanstack/react-query"



export const useFetchSellerProducts = () => {
    const [isQueryEnabled, setIsQueryEnabled] = useState(false);

    useEffect(() => {
      setIsQueryEnabled(true);
    }, []);

    // 1- This '/api/product/seller-products' should take "sellerId" as parameter
    const getSellerProductsRequest = async (): Promise<ProductType[]> => {
      const { data } = await axios.get(`/api/product/seller-products`);
      // console.log('Data: ', data.msg)

      return data.products;
    };

    const { data: seller_Products, isLoading } = useQuery({
      queryKey: ["fetchSellerProducts"],
      queryFn: getSellerProductsRequest,
      enabled: isQueryEnabled,
      staleTime: Infinity,
    });

    return { seller_Products, isLoading };
};