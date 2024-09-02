import { Plus, Minus } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { useState } from "react";



function UpdateQuantityButton() {
  const [counter, setCounter] = useState(0);

  const handle_Increment_Quantity = (
    e: React.ChangeEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setCounter((prev) => prev + 1);
};

const handle_Decrement_Quantity = (e: React.ChangeEvent<HTMLButtonElement>) => {
  e.stopPropagation();
  setCounter((prev) => prev - 1);
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
