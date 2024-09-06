import { API_BASE_URL } from "../../App";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'


type LoginType = {
    email: string;
    password: string;
}



export const useLoginUser = () => {

    const createLoginUserRequest = async (
      loginPayload: LoginType
    ) => {
      // console.log('Data: ', productFormData)
      // return

      const { data } = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        loginPayload
      );

      return data
    };

    const {
      data,
      mutate: login_Mutation,
      isPending,
      isSuccess,
      isError,
      error,
    } = useMutation({
      mutationFn: createLoginUserRequest,
    });

    return { isPending, login_Mutation, isSuccess, isError, error, data };
}

