import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { useCalendar } from "@/core/provider/CalendarContext";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

function CalendarHeader() {
  const { currentDate, prevMonth, nextMonth } = useCalendar();
  const todayFormat = format(currentDate, "EEEE ", { locale: faIR });
  return (
    <div className="w-55 h-6 flex items-center justify-between">
      <P className="text-[12px]">{todayFormat}</P>
      <div className="w-12 h-full flex items-center justify-between">
        <div onClick={prevMonth} className="cursor-pointer">
          <Icon name="prevMonth" />
        </div>
        <div onClick={nextMonth} className="cursor-pointer">
          <Icon name="nextMonth" />
        </div>
      </div>
      <div className="w-fit flex items-center justify-center">
        {format(currentDate, "MMMM yyyy", { locale: faIR })}
      </div>
    </div>
  );
}

export default CalendarHeader;
