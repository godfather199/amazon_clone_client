import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";
  



function UpdateSelectQuantity({ quantity }: { quantity: number }) {
  const [counter, setCounter] = useState<number>(quantity);

  const handle_Update_Counter = (info: number) => {
    setCounter(info)
  }


  return (
    <Select
      value={`${counter}`}
      onValueChange={(value) => handle_Update_Counter(Number(value))}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Qty: ${counter}`} />
      </SelectTrigger>

      <SelectContent>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <SelectItem key={item} value={`${item}`}>
            {`Qty: ${item}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default UpdateSelectQuantity;