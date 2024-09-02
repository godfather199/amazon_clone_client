import {NewProductForm} from '../../../../components'
import { Button } from "../../../../components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../../components/ui/dialog";
import { useState } from 'react';



function AddNewProduct() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open = {open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1 bg-red-300 w-[10rem]">
          <Plus /> Add Product
        </Button>
      </DialogTrigger>

      <DialogContent
        className="bg-white max-h-[35rem] overflow-y-scroll"
      >
        <DialogHeader>
          <DialogTitle asChild>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Add a New Product
            </h3>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        
        <NewProductForm setOpen = {setOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default AddNewProduct;
