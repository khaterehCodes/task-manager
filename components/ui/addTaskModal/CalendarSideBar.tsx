import { useCalendar } from "@/core/provider/CalendarContext";
import {
  addDays,
  addWeeks,
  endOfWeek,
  format,
  isSameDay,
} from "date-fns-jalali";
import P from "../customP/P";

const startDates = [
  { id: 1, dayName: "امروز", getDate: () => new Date() },
  { id: 2, dayName: "کمی بعد", getDate: () => new Date() },
  { id: 3, dayName: "فردا", getDate: () => addDays(new Date(), 1) },
  {
    id: 4,
    dayName: "این آخر هفته",
    getDate: () => endOfWeek(new Date(), { weekStartsOn: 6 }),
  },
  { id: 5, dayName: "هفته‌ی آینده", getDate: () => addWeeks(new Date(), 1) },
  {
    id: 6,
    dayName: "آخرهفته‌ی آینده",
    getDate: () => endOfWeek(addWeeks(new Date(), 1), { weekStartsOn: 6 }),
  },
  { id: 7, dayName: "دو هفته دیگر", getDate: () => addWeeks(new Date(), 2) },
  { id: 8, dayName: "۴ هفته دیگر", getDate: () => addWeeks(new Date(), 4) },
];

function CalendarSideBar() {
  const { endDate, setCurrentDate, startDate, setRange } = useCalendar();
  const selectDateHandler = (date: Date) => {
    const isToday = new Date();
    if (isSameDay(date, isToday)) {
      setRange(isToday, null);
    } else {
      setRange(isToday, date);
    }
    setCurrentDate(date);
  };
  return (
    <div className="w-full h-full flex flex-col justify-around">
      {startDates.map((d) => {
        const date = d.getDate();
        const isSelected = endDate && isSameDay(endDate, date);
        const isTodaySelect =
          !endDate && startDate && isSameDay(startDate, date) && d.id === 1;
        return (
          <div
            key={d.id}
            onClick={() => selectDateHandler(date)}
            className={`flex items-center justify-between ${isSelected || isTodaySelect ? "bg-gray-100" : "hover:bg-gray-50"}`}
          >
            <P className="font-medium text-[20px]">{d.dayName}</P>
            <P className="font-medium text-[#868E96]">
              {format(date, "d MMMM")}
            </P>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarSideBar;
