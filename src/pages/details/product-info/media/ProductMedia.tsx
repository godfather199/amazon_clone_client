import { ProductType } from "@/types/product";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";



function ProductMedia() {
  const { productId } = useParams();
  const queryClient = useQueryClient();

  const product: any = queryClient.getQueryData(["productById", productId]);

  return (
    <div className="">
      <img
        src={product?.productImages[0]?.url}
        alt=""
        className="w-[30rem] h-[20rem] object-contain"
      />
    </div>
  );
}

export default ProductMedia


