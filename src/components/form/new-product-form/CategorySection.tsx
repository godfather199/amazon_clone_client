import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"



 function CategorySection() {
    const { control } = useFormContext();

  return (
    <div className="">
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>

            <Select onValueChange={field.onChange} >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Product categories" />
                </SelectTrigger>
              </FormControl>

              <SelectContent className="bg-white">
                {[
                  "Mobile",
                  "Men's Fashion",
                  "Women's Fashion",
                  "Books",
                  "Electronics",
                ].map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}


export default CategorySection