import { useCalendar } from "@/core/provider/CalendarContext";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import Icon from "../icons/Icon";
import P from "../customP/P";

function CurrentDate() {
  const { currentDate, prevMonth, nextMonth } = useCalendar();
  const todayFormat = format(currentDate, "EEEE ", { locale: faIR });
  return (
    <div className="w-full h-20 flex items-center justify-start gap-5">
      <div className="w-35 flex items-center justify-center">
        {format(currentDate, "MMMM yyyy", { locale: faIR })}
      </div>
      <div className="w-12 h-full flex items-center justify-between">
        <div onClick={prevMonth} className="cursor-pointer">
          <Icon name="prevMonth" />
        </div>
        <div onClick={nextMonth} className="cursor-pointer">
          <Icon name="nextMonth" />
        </div>
      </div>
      <P className="w-10">{todayFormat}</P>
    </div>
  );
}

export default CurrentDate;
