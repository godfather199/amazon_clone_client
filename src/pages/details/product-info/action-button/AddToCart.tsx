import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/toast/use-toast";
import { useAddProductCart } from "@/hooks/cart/useAddProductCart";
import { CartPayloadType, useCreateNewCart } from "@/hooks/cart/useCreateNewCart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";



function AddToCart() {
  const params = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient();

  const [isAdded, setIsAdded] = useState<boolean>(false)

  // const inquire_Cache: any = queryClient.getQueryData(["checkCartStatus"]);
  // console.log("Cache: ", inquire_Cache)

  const logged_In_User: any = queryClient.getQueryData([
    "logged_In_User_State",
  ]);
  // console.log("AddToCart: ", logged_In_User?.cart?.cartItems[0])

  const {data, isPending, create_New_Cart, isSuccess} = useCreateNewCart()

  const {
    data: new_Product,
    isPending: new_Product_Pending,
    isSuccess: new_Product_Success,
    add_New_Product,
  } = useAddProductCart();


  // Check if item is already added
  useEffect(() => {
    setIsAdded(
      logged_In_User?.cart?.cartItems?.find(
        (item: any) => item?.productId === params.productId
      )
    );
  }, []);


  // Post successfull cart creation
  useEffect(() => {
    if (isSuccess || new_Product_Success) {
      // queryClient.invalidateQueries({ queryKey: ["checkCartStatus"] });
      const updated_Cart = isSuccess
        ? data.new_Cart.cartItems
        : new_Product.updated_Cart.cartItems;

      queryClient.setQueryData(['logged_In_User_State'], (oldData: any) => {
        if(!oldData) {
          return
        }

        return {
          ...oldData,
          cart: {
            cartItems: updated_Cart
          }
        }
      })

      setIsAdded(true)

      toast.success(data?.msg || new_Product?.msg, {
        duration: 1500,
        position: 'bottom-center'
      })
    }
  }, [isSuccess, new_Product_Success]);



  const handle_Cart_Button = async () => {
    if(isAdded) {
      navigate('/cart')
      return
    }

    // if(inquire_Cache === "Not Found") {
    const productId = params.productId as string
    const cart_Payload: CartPayloadType = {
      productId,
      quantity: 1,
    };

    if (!logged_In_User?.cart?.cartItems?.[0] && await check_Cart_Status()) {
      create_New_Cart(cart_Payload);
    } else {
      add_New_Product(cart_Payload)
    }
  }


  const check_Cart_Status = async (): Promise<Boolean> => {
    const { data } = await axios.get(`/api/cart/status`);
      console.log('Data: ', data.msg)

      return data.cartStatus === "Not Found"
  }



  return (
    <Button
      size="lg"
      disabled={isPending || new_Product_Pending}
      className={` ${
        isPending || new_Product_Pending
          ? "cursor-not-allowed"
          : "cursor-pointer"
      } ${
        isAdded
          ? "bg-blue-500 text-white"
          : "border-2 border-blue-500 text-blue-500"
      }  font-bold text-lg shadow-lg`}
      onClick={handle_Cart_Button}
    >
      {isPending ? (
        <Spinner />
      ) : (
        <>{isAdded ? "Added To Cart" : "Add To Cart"}</>
      )}
    </Button>
  );
}

export default AddToCart;



