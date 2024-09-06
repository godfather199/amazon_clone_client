import {  FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';


type FieldType = {
    name: string;
    label: string;
    placeholder: string;
    type: string;
}



function Field({name, label, placeholder, type}: FieldType) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name= {name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input
              type = {type}
              {...field}
              className="bg-white"
              placeholder= {placeholder}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Field