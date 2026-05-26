import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import Icon from "@/components/ui/icons/Icon";
import ModalHook from "@/core/hooks/modalHook/ModalHook";
import { CalendarNavType } from "@/core/types/global";

function ModalCalendar({ modalCalandar, setModalCalendar }: CalendarNavType) {
  return (
    <ModalHook openModal={modalCalandar}>
      <div className="w-116 h-38 bg-white p-5 flex flex-col rounded-lg justify-between">
        <div className="w-full h-10 flex items-center justify-start">
            <div 
            onClick={()=>setModalCalendar(false)}
            className="w-10 h-10 cursor-pointer flex items-center justify-center">
            <Icon name="closeCalendar"/>
            </div>
            <Input placeholder="نام تسک را وارد کنید" className="text-[20px] font-medium text-[#C8C8C8] outline-0"/>
        </div>
        <div className="w-full h-13 flex items-center justify-between">
            <div className="w-30 bg-olive-400 h-full"></div>
            <Button className="w-32 h-8 rounded-lg cursor-pointer text-[12px] text-white">
                ساختن تسک
            </Button>
        </div>
      </div>
    </ModalHook>
  );
}

export default ModalCalendar;
