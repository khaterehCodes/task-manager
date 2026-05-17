"use client";

import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "وارد کردن ایمیل الزامی است")
    .email("ایمیل وارد شده صحیح نیست"),
});

type emailData = z.infer<typeof emailSchema>;

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<emailData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });
  const formHandler = (data: emailData) => {
    console.log(data);
    alert("forgot");
  };
  return (
    <div className="w-160 h-76 bg-white shadow-2xl/30 absolute right-110 bottom-60 rounded-[20px] p-6 flex flex-col items-center justify-center">
      <P className="text-[32px] font-extrabold">فراموشی رمز عبور</P>
      <form
        onSubmit={handleSubmit(formHandler)}
        className="w-full h-85 flex flex-col items-center justify-center gap-3"
      >
        <div className="w-150 h-18 flex flex-col gap-1">
          <label htmlFor="userName" className="text-[14px]">
            ایمیل خود را وارد کنید
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "در حال ارسال..." : "دریافت ایمیل بازیابی رمز عبور"}
        </Button>
        <Link href={"/login"}>
          <Button className="h-10 text-[#2999A1] font-extrabold cursor-pointer">
            بازگشت
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
