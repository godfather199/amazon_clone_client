import axios from "axios"
import { useEffect, useState } from "react"
import { ProductType } from "../../types/product"
import { useQuery } from "@tanstack/react-query"



export const useProductById = (productId: string) => {
    const [isQueryEnabled, setIsQueryEnabled] = useState(false);

    useEffect(() => {
      setIsQueryEnabled(true);
    }, []);

    const getProductByIdRequest = async (
      productId: string
    ): Promise<ProductType> => {
      const { data } = await axios.get(`/api/product/${productId}`);
      // console.log('Data: ', data)

      return data.product;
    };

    const { data: product, isLoading } = useQuery({
      queryKey: ["productById", productId],
      queryFn: ({ queryKey }) => {
        const [, productId] = queryKey; 
        return getProductByIdRequest(productId as string);
      },
      enabled: isQueryEnabled,
      staleTime: Infinity,
    });

    return { product, isLoading };
};