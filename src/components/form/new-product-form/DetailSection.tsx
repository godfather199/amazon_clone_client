import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { useFormContext } from "react-hook-form";



function DetailSection() {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>

            <FormControl>
              <Input
                {...field}
                className="bg-white"
                placeholder="Enter a Title"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* Description */}
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Enter product description</FormLabel>

            <FormControl>
              <Textarea
                placeholder="Tell us a little bit about your product"
                className="resize-none"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* Price */}
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel >Price</FormLabel>

            <FormControl>
              <Input
                {...field}
                className="bg-white"
                placeholder="Enter a product price"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* Delivery Charges */}
      <FormField
        control={control}
        name="deliveryCharges"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel >Delivery Charges</FormLabel>

            <FormControl>
              <Input
                {...field}
                className="bg-white"
                placeholder="Enter Delivery Charges"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* In Stock */}
      <FormField
        control={control}
        name="in_Stock"
        render={({ field }) => (
          <FormItem className="">
            <FormLabel>In Stock Quantity</FormLabel>

            <FormControl>
              <Input
                {...field}
                className="bg-white"
                placeholder="Enter In Stock quantity"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default DetailSection;
