import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export type CartPayloadType = {
  productId: string;
  quantity: number;
};


export const useCreateNewCart = () => {
  const createNewCartRequest = async ({
    productId,
    quantity,
  }: CartPayloadType) => {
    const { data } = await axios.post(
      `/api/cart/create?productId=${productId}&quantity=${quantity}`
    );

    return data;
  };

  const {
    data,
    mutate: create_New_Cart,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({ mutationFn: createNewCartRequest });

  return { isPending, create_New_Cart, isSuccess, isError, error, data };
}



