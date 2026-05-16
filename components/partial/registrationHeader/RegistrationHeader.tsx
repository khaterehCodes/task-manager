import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";

function RegistrationHeader() {
    return (
        <div className="w-full h-30 flex items-center justify-center">
            <div className="w-7xl h-10 flex items-center justify-between">
                <P className="text-[32px] font-medium">تسک منیجر</P>
                <div className="w-55 h-full flex items-center justify-between cursor-pointer">
                    <P className="font-bold">
                        ثبت‌نام نکرده‌ای؟
                    </P>
                    <Button className="w-24 h-10 rounded-md cursor-pointer text-white text-[14px] font-extrabold bg-[#208D8E]">
                        ثبت نام
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationHeader;