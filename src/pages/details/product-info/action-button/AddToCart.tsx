import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/toast/use-toast";
import { CartPayloadType, useCreateNewCart } from "@/hooks/cart/useCreateNewCart";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



function AddToCart() {
  const params = useParams()
  const queryClient = useQueryClient();
  const {toast} = useToast()


  const inquire_Cache: any = queryClient.getQueryData(["checkCartStatus"]);

  const {data, isPending, create_New_Cart, isSuccess} = useCreateNewCart()


  // Post successfull cart creation
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["checkCartStatus"] });

      toast({ description: data?.msg });
    }
  }, [isSuccess]);


  const handle_Cart_Button = async () => {
    if(inquire_Cache) {
      const productId = params.productId as string

      const cart_Payload: CartPayloadType = {
        productId,
        quantity: 1
      }

      create_New_Cart(cart_Payload)
    }
    else {}
  }


  return (
    <Button
      size="lg"
      disabled={isPending}
      className={` ${
        isPending ? "cursor-not-allowed" : "cursor-pointer"
      } border-2 border-blue-500 text-blue-500 font-bold text-lg shadow-lg`}
      onClick={handle_Cart_Button}
    >
      {isPending ? <Spinner /> : "Add To Cart"}
    </Button>
  );
}

export default AddToCart;



