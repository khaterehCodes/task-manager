import ModalHook from "@/core/hooks/ModalHook";
import { DatePropsType } from "@/core/types/global";
import Icon from "../icons/Icon";
import P from "../customP/P";
import CurrentDate from "./CurrentDate";
import DateModal from "./DateModal";
import Button from "../customButton/Button";
import CalendarSideBar from "./CalendarSideBar";

function ChooseDate({ openCal, setOpenCal }: DatePropsType) {
  return (
    <>
      <ModalHook openModal={openCal}>
        <div className="w-235 h-160 bg-white rounded-lg flex flex-col">
          <div className="w-full h-20 flex items-center justify-between gap-5 border-b border-[#E4E4E4]">
            <div className="w-1/2 h-10 border-l border-[#E8EAED] flex items-center justify-start gap-2 p-5">
              <Icon name="calendar" />
              <P className="font-medium text-[24px]">زمان شروع</P>
            </div>
            <div className="w-1/2 h-10 flex items-center justify-start gap-2">
              <Icon name="calendar" />
              <P className="font-medium text-[24px]">زمان پایان</P>
            </div>
          </div>
          <div className="w-full h-140 flex justify-center">
            <div className="w-75 h-full bg-[#F7F8F9] rounded-br-lg p-5">
              <CalendarSideBar />
            </div>
            <div className="w-160 h-full rounded-bl-lg flex flex-col text-[20px] font-medium">
              <CurrentDate />
              <DateModal />
              <div className="w-[90%] flex items-center justify-end">
                <Button
                  onClick={() => setOpenCal(false)}
                  className="w-32 h-8 rounded-sm cursor-pointer text-[12px] text-white"
                >
                  بستن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalHook>
    </>
  );
}

export default ChooseDate;
