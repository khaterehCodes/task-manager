import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const userInfoSchema = z.object({
  firstName: z.string().min(1, "وارد کردن نام الزامی است"),
  lastName: z.string().min(1, "وارد کردن نام خانوادگی الزامی است"),
  phone: z.string().min(11, "شماره موبایل باید ۱۱ رقم باشد"),
});

type userInfoType = z.infer<typeof userInfoSchema>;
function UserInformation() {
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
  const formHandler = () => {
    alert("اطلاعات شما با موفقیت ثبت شد");
  };
  return (
    <div className="w-89 h-129 flex flex-col items-start justify-between">
      <P className="text-[31px] font-bold">اطلاعات فردی</P>
      <div className="w-83 h-24 flex items-center justify-between">
        <div className="w-25 h-25 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center text-[35px] font-medium">
          KN
        </div>
        <div className="flex flex-col items-center gap-3">
          <Button className="w-53 h-12 rounded-lg border border-[#208D8E] text-[20px] font-medium text-[#208D8E] cursor-pointer">
            ویرایش تصویر پروفایل
          </Button>
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
            type="firstName"
            {...register("firstName")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-[14px]">
            نام خانوادگی
          </label>
          <Input
            id="lastName"
            type="lastName"
            {...register("lastName")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-[14px]">
            شماره موبایل{" "}
          </label>
          <Input
            id="phone"
            type="phone"
            {...register("phone")}
            className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
          />
        </div>
        <Button className="w-89 h-8 bg-[#208D8E] text-white font-extrabold text-[14px] rounded-md cursor-pointer">
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}

export default UserInformation;
