"use client";
import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { useAuth } from "@/core/provider/AuthProvider";
import { useTheme } from "@/core/provider/ThemeContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const userInfoSchema = z.object({
  firstName: z.string().min(1, "وارد کردن نام الزامی است"),
  lastName: z.string().min(1, "وارد کردن نام خانوادگی الزامی است"),
  phone: z
    .string()
    .min(11, "شماره موبایل باید ۱۱ رقم باشد")
    .max(11, "شماره موبایل نباید بیشتر از ۱۱ رقم باشد")
    .refine((value) => value.startsWith("09"), {
      message: "شماره موبایل باید با ۰۹ شروع شود",
    }),
});

type userInfoType = z.infer<typeof userInfoSchema>;
function UserInformation() {
  const router = useRouter();
  const { profileInfo, user } = useAuth();
  const { currentTheme } = useTheme();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<userInfoType>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  });
  const formHandler = (data: any) => {
    profileInfo({ firstName: data.firstName, lastName: data.lastName });
    router.push("/board/listView");
    alert("اطلاعات شما با موفقیت ثبت شد");
  };
  const profileName =
    user?.firstName && user.lastName
      ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
      : ".";
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[88%] h-auto">
        <div className="w-89 h-129 flex flex-col items-start justify-between">
          <P className="text-[31px] font-bold">اطلاعات فردی</P>
          <div className="w-83 h-24 flex items-center justify-between">
            <div
              style={{ backgroundColor: currentTheme }}
              className="w-25 h-25 text-white rounded-full flex items-center justify-center text-[35px] font-medium"
            >
              {profileName}
            </div>
            <div className="flex flex-col items-center gap-3">
              <div
                style={{ borderColor: currentTheme, color: currentTheme }}
                className="w-53 h-12 rounded-lg border text-[20px] flex items-center justify-center font-medium cursor-pointer"
              >
                ویرایش تصویر پروفایل
              </div>
              <P className="text-[12px] text-[#8A8989]">
                این تصویر برای عموم قابل نمایش است.
              </P>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(formHandler)}
            className="flex flex-col gap-7"
          >
            <div>
              <label htmlFor="firstName" className="text-[14px]">
                نام
              </label>
              <Input
                id="firstName"
                type="text"
                {...register("firstName")}
                className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
              />
              {errors.firstName && (
                <P className="text-red-500 text-[10px] block w-full">
                  {errors.firstName.message}
                </P>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="text-[14px]">
                نام خانوادگی
              </label>
              <Input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
              />
              {errors.lastName && (
                <P className="text-red-500 text-[10px] block w-full">
                  {errors.lastName.message}
                </P>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="text-[14px]">
                شماره موبایل{" "}
              </label>
              <Input
                id="phone"
                type="tel"
                maxLength={11}
                {...register("phone")}
                className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
              />
              {errors.phone && (
                <P className="text-red-500 text-[10px] block w-full">
                  {errors.phone.message}
                </P>
              )}
            </div>
            <Button
              type="submit"
              className="w-89 h-8 bg-[#208D8E] text-white font-extrabold text-[14px] rounded-md cursor-pointer"
            >
              ثبت تغییرات
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
