import {CategorySection, DetailSection, ImageSection} from '../../'
import { Form } from "../../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from '../../ui/button';
import { useAddNewProduct } from '../../../hooks/product/useAddNewProduct';
import { useEffect } from 'react';
import { useToast } from '../../ui/toast/use-toast';
import { AxiosError } from 'axios';
import { Spinner } from '../../ui/spinner';




const productFormSchema = z.object({
  title: z.string().min(5, { message: "**Must be 5 or more characters long" }),

  description: z.string().min(20, {
    message: "**Description must be at least 20 characters.",
  }),

  price: z.coerce
    .number()
    .gte(100, "**Price must be greater than 100"),
    
    deliveryCharges: z.coerce
    .number()
    .gte(50, "**Delivery Charges must be greater than 50"),
    
    in_Stock: z.coerce
    .number()
    .gte(2, "**In stock must be greater than 2"),

  category: z
    .string({
      required_error: "**Select a product category",
    }),

  imageInfo: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= 5000000, "Max file size is 5MB.")
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/webp"].includes(file.type),
          "Only .jpg, .jpeg, .png, .webp formats are allowed."
        )
    )
    .min(4, "You must select at least 4 images."),
});



export type ProductFormType = z.infer<typeof productFormSchema>

type NewProductFormType = {
  setOpen: (data: boolean) => void
}


function NewProductForm({setOpen}: NewProductFormType) {
  const { createNewproduct, isSuccess, isPending, isError, error, data } =
    useAddNewProduct();
  
  const {toast} = useToast()

  const form = useForm<ProductFormType>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      deliveryCharges: 0,
      in_Stock: 0,
      imageInfo: [],
      category: ''
    },
  });

  // Post successfull creation of product
  useEffect(() => {
    if(isSuccess) {
      form.reset()

      toast({ description: data.msg});

      const wait = () => new Promise((resolve) => setTimeout(resolve, 800))
      
      wait().then(() => setOpen(false));
    }
    
  }, [isSuccess])


  // Display error
  useEffect(() => {
    if (isError) {
      const error2 = error as AxiosError;

      toast({ description: error2.response?.data.message });

      const wait = () => new Promise((resolve) => setTimeout(resolve, 800))
      
      wait().then(() => setOpen(false));
    }

  }, [isError])


  const handle_Product_Form_Submit = (info: ProductFormType) => {
    // console.log('Info: ', info)
    const formData = new FormData();

    formData.append("title", info.title);
    formData.append("description", info.description);
    formData.append("price", info.price.toString());
    formData.append("deliveryCharges", info.deliveryCharges.toString());
    formData.append("in_Stock", info.in_Stock.toString());
    formData.append("category", info.category);

    info.imageInfo.forEach((item) => {
      formData.append('imageInfo', item)
    })

    // console.log("Form data: ", formData)

    createNewproduct(formData)
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handle_Product_Form_Submit)}
        className="flex flex-col gap-[2rem]"
      >
        <DetailSection />
        <CategorySection />
        <ImageSection />

        <Button
          type="submit"
          disabled={isPending}
          className={`${isPending ? " cursor-not-allowed" : " cursor-pointer"}`}
        >
          {isPending ? <Spinner /> : "Submit Product"}
        </Button>
      </form>
    </Form>
  );
}

export default NewProductForm



