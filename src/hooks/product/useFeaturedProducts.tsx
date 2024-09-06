import axios from "axios"
import { useEffect, useState } from "react"
import { API_BASE_URL } from "../../App"
import { ProductType } from "../../types/product"
import { useQuery } from "@tanstack/react-query"



export const useFeaturedProducts = () => {
    const [isQueryEnabled, setIsQueryEnabled] = useState(false);

    useEffect(() => {
      setIsQueryEnabled(true);
    }, []);

    const getSellerProductsRequest = async (): Promise<ProductType[]> => {
      const { data } = await axios.get(`/api/product/featured`);
      // console.log('Data: ', data)

      return data.random_Products;
    };

    const { data: featured_Products, isLoading } = useQuery({
      queryKey: ["featuredProducts"],
      queryFn: getSellerProductsRequest,
      // enabled: isQueryEnabled,
      // staleTime: Infinity,
    });

    

    return { featured_Products, isLoading };
};



// this is the setup => const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       gcTime:  1000 * 60 * 60 * 24,
//       retry: false,
//       refetchOnWindowFocus: false,
//       staleTime: 1000 * 60 * 60 * 24, 
//     },
//   },
// }) => but on doing this =>   const { data: featured_Products, isLoading } = useQuery({
//   queryKey: ["featuredProducts"],
//   queryFn: getSellerProductsRequest,
//   enabled: isQueryEnabled,
//   staleTime: Infinity,
// }); => not returning fresh data