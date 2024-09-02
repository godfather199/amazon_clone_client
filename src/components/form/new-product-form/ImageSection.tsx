import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "../../ui/input";
import { AspectRatio } from "../../ui/aspectRatio";


const ImageSection = () => {
  const { control, watch } = useFormContext();

  const existingImageUrls = watch("imageInfo");

  return (
    <div className="">
      <div className="">
        {existingImageUrls && existingImageUrls.length > 0 && (
          <div className="">
            {existingImageUrls.map((url, index) => (
              <AspectRatio key={index} ratio={16 / 7}>
                <img
                  //   style={{ border: "3px solid red" }}
                  src={URL.createObjectURL(url)}
                    className="h-[10rem] w-[20rem] object-cover"
                />
              </AspectRatio>
            ))}
          </div>
        )}

        <FormField
          control={control}
          name="imageInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload product images</FormLabel>

              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png, .webp"
                  multiple
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? Array.from(event.target.files) : []
                    )
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
