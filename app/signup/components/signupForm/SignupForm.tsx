import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const signupSchema = z.object({
  userName: z.string().min(1, "وارد کردن نام کاربری الزامی است"),
  email: z
    .string()
    .min(1, "وارد کردن ایمیل الزامی است")
    .email("ایمیل وارد شده صحیح نیست"),
  password: z.string().min(1, "وارد کردن رمز عبور الزامی است"),
});
type signupFormData = z.infer<typeof signupSchema>;
function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
  const formHandler = (data: signupFormData) => {
    console.log(data);
    alert("signup");
  };
  return (
    <div className="w-160 h-119 bg-white shadow-2xl/30 absolute right-110 rounded-[20px] p-6 flex flex-col items-center justify-center">
      <P className="text-[32px]">به ثبت نام تسک منیجر خوش آمدید</P>
      <form
        onSubmit={handleSubmit(formHandler)}
        className="w-full h-85 flex flex-col items-center justify-center gap-3"
      >
        <div className="w-150 h-18 flex flex-col gap-1">
          <label htmlFor="userName" className="text-[14px]">
            نام کاربری
          </label>
          <Input
            id="userName"
            type="text"
            {...register("userName")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <div className="w-150 h-18 flex flex-col gap-1">
          <label htmlFor="email" className="text-[14px]">
            ایمیل
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <div className="w-150 h-18 flex flex-col gap-1">
          <label htmlFor="password" className="text-[14px]">
            رمز عبور
          </label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <div className="w-full h-10 font-medium flex items-center justify-start gap-2">
          <Input type="checkbox" className="cursor-pointer w-5 h-3" />
          <Button className="border-b w-fit cursor-pointer">
            قوانین و مقررات
          </Button>
          <P>را می‌پذیرم.</P>
        </div>
        <Button
          type="submit"
          className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ورود..." : "ثبت‌نام"}
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
