import { API_BASE_URL } from "../../App";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'


export const useAddNewProduct = () => {

    const createNewProductRequest = async (
      productFormData: FormData
    ) => {
      // console.log('Data: ', productFormData)
      // return

      const { data } = await axios.post(
        `${API_BASE_URL}/api/product/add-product`,
        productFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data
    };

    const {
      data,
      mutate: createNewproduct,
      isPending,
      isSuccess,
      isError, 
      error
    } = useMutation({mutationFn: createNewProductRequest})

    return { isPending, createNewproduct, isSuccess, isError, error, data };
}

