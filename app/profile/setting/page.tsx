import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import { themes } from "@/core/constants/global";

function Setting() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[88%] h-auto">
        <div className="w-100 h-105 flex flex-col">
          <P className="text-[32px] font-bold">تنظیمات</P>
          <div className="w-full h-15 bg-yellow-300 flex flex-col">
            <P className="text-[14px]">انتخاب تم</P>
            <div>
              {themes.map((c) => (
                <Button key={c.id} className="w-5 h-5 rounded-full">
                  {c.selected && <div></div>}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
