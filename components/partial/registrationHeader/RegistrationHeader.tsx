'use client'
import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import { usePathname,useRouter } from "next/navigation";

function RegistrationHeader() {
  const router = useRouter();
  const pathName = usePathname();
  const isLogin = pathName.startsWith("/login");
  const registerButtonHandler = () => {
    if (isLogin) {
      router.push("/signup");
    } else {
      router.push("/login");
    }
  };
  return (
    <div className="w-full h-30 flex items-center justify-center">
      <div className="w-7xl h-10 flex items-center justify-between">
        <P className="text-[32px] font-medium">تسک منیجر</P>
        <div className="w-55 h-full flex items-center justify-between cursor-pointer">
          <P className="font-bold">ثبت‌نام نکرده‌ای؟</P>
          <Button 
          onClick={registerButtonHandler}
          className="w-24 h-10 rounded-md cursor-pointer text-white text-[14px] font-extrabold bg-[#208D8E]">
            {isLogin ? " ثبت نام" : "ورورد"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationHeader;
