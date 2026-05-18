"use client";
import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const confirmPasswordSchema = z.object({
  password: z.string().min(1, "وارد کردن رمز عبور جدید الزامی است"),
  confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
});
type confirmPasswordData = z.infer<typeof confirmPasswordSchema>;
function ConfirmPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<confirmPasswordData>({
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <div className="w-160 h-88 bg-white shadow-2xl/30 absolute top-15 right-110 rounded-[20px] p-6 flex flex-col items-center justify-center">
      <P className="text-[32px] font-extrabold">تغییر رمز عبور</P>
      <form className="w-full h-85 flex flex-col items-center justify-center gap-3">
        <div className="w-150 h-18 flex flex-col gap-1">
          <label htmlFor="password" className="text-[14px]">
            رمز عبور جدید را وارد کنید
          </label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <div className="w-150 h-18 flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-[14px]">
            تکرار رمز عبور
          </label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold"
          disabled={isSubmitting}
        >
         اعمال تغییرات
        </Button>
      </form>
    </div>
  );
}

export default ConfirmPasswordForm;
