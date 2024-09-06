import axios from "axios"
import { useEffect, useState } from "react"
import { ProductType } from "../../types/product"
import { useQuery } from "@tanstack/react-query"



export const useCategoryProducts = (category: string) => {
    // const [isQueryEnabled, setIsQueryEnabled] = useState(false);

    // useEffect(() => {
    //   setIsQueryEnabled(true);
    // }, []);

    const getCategoryProductsRequest = async (category: string): Promise<ProductType[]> => {
      const { data } = await axios.get(`/api/product/category?category=${category}`);
      // console.log('Data: ', data.msg)

      return data.products;
    };

    const { data: products, isLoading } = useQuery({
      queryKey: ["category", category],
      queryFn: ({ queryKey }) => {
        const [, category] = queryKey;
        return getCategoryProductsRequest(category as string);
      },
      //   enabled: isQueryEnabled,
        staleTime: 1000 * 60 * 60 * 5,
    });

    return { products, isLoading };
};