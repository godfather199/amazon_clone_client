import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useLoginUser } from '@/hooks/auth/useLoginUser';
import Field from '@/components/form/form-field/Field';
import { useEffect } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import {isAxiosError} from 'axios';
import { Form } from '@/components/ui/form';
import { Heading } from '@/components';
import { queryOptions, useQueryClient } from '@tanstack/react-query';




const loginFormSchema = z.object({
  email: z.string().email({ message: "**Enter a valid email" }),
  password: z
    .string({ required_error: "**Password is required" })
    .min(8, { message: "**Password must be 8 or more characters long" }),
});


export type LoginFormType = z.infer<typeof loginFormSchema>;


function LoginPage() {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  

  const { isPending, isSuccess, isError, error, data, login_Mutation } =
    useLoginUser();
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });



  // Post successfull login of user
  useEffect(() => {
    if (isSuccess) {
      form.reset();

      queryClient.setQueryData(["logged_In_User_State"], data?.userInfo);
      

      toast.success(data.msg, {
        duration: 1500,
        position: "bottom-center",
      });

      setTimeout(() => {
        navigate('/')
      }, 1800);
    }
  }, [isSuccess]);



  // Display error
  useEffect(() => {
    if (isError && isAxiosError(error)) {
      toast.error(error?.response?.data.message, {
        duration: 1500,
        position: "bottom-center",
      });
    }

  }, [isError, error]);
  
  

  const handle_Login_Form_Submit = async (values: LoginFormType) => {
    login_Mutation(values);
  };


  return (
    <div style={{ border: "3px solid green" }} className="h-[25rem]">
      <div className="flex flex-col items-center gap-[3rem]">
        <div className="">
          <Heading title='Login' />
        </div>

        {/* User login form */}
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handle_Login_Form_Submit)}
              className="flex flex-col gap-[2rem]"
            >
              {/* Email */}
              <Field
                name="email"
                label="Email"
                placeholder="Enter an email"
                type="text"
              />

              {/* Password */}
              <Field
                name="password"
                label="Password"
                placeholder="Enter a password"
                type="password"
              />

              <Button
                type="submit"
                disabled={isPending}
                className={`${
                  isPending ? " cursor-not-allowed" : " cursor-pointer"
                }`}
              >
                {isPending ? <Spinner /> : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;