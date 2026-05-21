"use client";
import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const accountInfoSchema = z
  .object({
    email: z
      .string()
      .min(1, "وارد کردن ایمیل الزامی است")
      .email("ایمیل وارد شده معتبر نیست"),
    userName: z.string().min(1, "وارد کردن نام کاربری الزامی است"),
    currentPassword: z.string().min(1, "وارد کردن رمز عبور فعلی الزامی است"),
    password: z.string().min(1, "وارد کردن رمز عبور جدید الزامی است"),
    confirmNewPassword: z
      .string()
      .min(1, "وارد کردن تکرار رمز عبور جدید الزامی است"),
  })
  .refine((data) => data.password === data.confirmNewPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmNewPassword"],
  });
type accountData = z.infer<typeof accountInfoSchema>;
function AccountInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<accountData>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      email: "",
      userName: "",
      currentPassword: "",
      password: "",
      confirmNewPassword: "",
    },
  });
  const formHandler = () => {
    alert("اطلاعات حساب شما با موفقیت ثبت شد");
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[88%] h-auto">
        <div className="w-89 h-136 flex flex-col justify-between">
          <P className="text-[31px] font-bold">اطلاعات حساب</P>
          <form
            onSubmit={handleSubmit(formHandler)}
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="email">ایمیل</label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
              />
              {errors.email && (
                <P className="text-red-500 text-[10px] block w-full">
                  {errors.email.message}
                </P>
              )}
            </div>
            <div>
              <label htmlFor="userName">نام کاربری</label>
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
            <div>
              <label htmlFor="currentPassword">رمز عبور فعلی </label>
              <Input
                id="currentPassword"
                type="password"
                {...register("currentPassword")}
                className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
              />
              {errors.currentPassword && (
                <P className="text-red-500 text-[10px] block w-full">
                  {errors.currentPassword.message}
                </P>
              )}
            </div>
            <div>
              <label htmlFor="password">رمز عبور جدید</label>
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
            <div>
              <label htmlFor="confirmNewPassword">تکرار رمز عبور جدید</label>
              <Input
                id="confirmNewPassword"
                type="password"
                {...register("confirmNewPassword")}
                className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
              />
              {errors.confirmNewPassword && (
                <P className="text-red-500 text-[10px] block w-full">
                  {errors.confirmNewPassword.message}
                </P>
              )}
            </div>
            <Button className="w-89 h-8 bg-[#208D8E] text-white font-extrabold text-[14px] rounded-md cursor-pointer">
              ثبت تغییرات
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
