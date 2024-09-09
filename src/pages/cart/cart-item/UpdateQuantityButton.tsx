import { Plus, Minus } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { useState } from "react";
import { useUpdateProductQuantity } from "@/hooks/cart/useUpdateProductQuantity";



function UpdateQuantityButton({ quantity }: { quantity: number }) {
  const [counter, setCounter] = useState<number>(quantity);

  const { isSuccess, update_Product_Quantity_Mutation, data } =
    useUpdateProductQuantity();


  const handle_Increment_Quantity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setCounter((prev) => prev + 1);

    
  };


  const handle_Decrement_Quantity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setCounter((prev) => prev > 1 ? prev - 1 : prev);
  };


  return (
    <div className="flex items-center justify-center">
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => handle_Decrement_Quantity(e)}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Label>{counter}</Label>

      <Button
        variant="outline"
        size="icon"
        onClick={(e) => handle_Increment_Quantity(e)}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default UpdateQuantityButton;
