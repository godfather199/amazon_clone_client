import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export type CartPayloadType = {
  productId: string;
  quantity: number;
};


export const useAddProductCart = () => {
  const createAddProductCartRequest = async ({
    productId,
    quantity,
  }: CartPayloadType) => {
    const { data } = await axios.put(
      `/api/cart/add?productId=${productId}&quantity=${quantity}`
    );

    return data;
  };

  const {
    data,
    mutate: add_New_Product,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({ mutationFn: createAddProductCartRequest });

  return { isPending, add_New_Product, isSuccess, isError, error, data };
}



