"use client";
import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
const loginSchema = z.object({
  userName: z.string().min(1, "وارد کردن نام کاربری الزامی است"),
  password: z.string().min(4, "حداقل ۴ کاراکتر"),
});

type loginFormData = z.infer<typeof loginSchema>;
function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const formHandler = (data: loginFormData) => {
    console.log(data);
    router.push("/");
  };
  return (
    <div className="w-160 h-106 bg-white shadow-2xl/30 absolute top-10 right-110 rounded-[20px] p-6 flex flex-col items-center justify-center">
      <P className="text-[32px]">{"به تسک منیجر خوش برگشتی :)"}</P>
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
          {errors.userName && (
            <P className="text-red-500 text-[10px] block w-full">
              {errors.userName.message}
            </P>
          )}
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
          {errors.password && (
            <P className="text-red-500 text-[10px] block w-full">
              {errors.password.message}
            </P>
          )}
        </div>
        <Link
          href={"/forgot"}
          className="text-[12px] cursor-pointer w-full h-8 mt-3"
        >
          <P className="border-b w-fit">رمز عبور خود را فراموش کرده‌اید؟</P>
        </Link>
        <Button
          type="submit"
          className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ورود..." : "ورود"}
        </Button>
        <div className="w-42 h-6 flex items-center justify-center gap-2">
          <P className="font-medium">ثبت‌نام نکرده‌ای؟</P>
          <Link href={"/signup"}>
            <P className="text-[#208D8E] font-extrabold cursor-pointer">
              ثبت‌نام
            </P>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
