import { API_BASE_URL } from "../../App";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'


type CartPayload = {
    productId: string;
    quantity: number;
}


export const useUpdateProductQuantity = () => {

    const createUpdateProductQuantityRequest = async ({
      productId,
      quantity,
    }: CartPayload) => {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/cart/update-quantity?productId=${productId}&quantity=${quantity}`
      );

      return data;
    };

    const {
      data,
      mutate: update_Product_Quantity_Mutation,
      isPending,
      isSuccess,
      isError, 
      error
    } = useMutation({mutationFn: createUpdateProductQuantityRequest})

    return { isPending, update_Product_Quantity_Mutation, isSuccess, isError, error, data };
}

