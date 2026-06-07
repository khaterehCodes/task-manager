import { useCalendar } from "@/core/provider/CalendarContext";
import { addDays, addWeeks, endOfWeek, format, isSameDay } from "date-fns-jalali";
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
  const { setSelectedDate, setCurrentDate, selectedDate } = useCalendar();
  const selectDateHandler = (date: Date) => {
    setSelectedDate(date);
    setCurrentDate(date);
  };
  return (
    <div className="w-full h-full flex flex-col justify-around">
      {startDates.map((d) => {
        const date = d.getDate();
        const isSelected = selectedDate && isSameDay(selectedDate, date);
        return (
          <div key={d.id} onClick={() => selectDateHandler(date)} className="flex items-center justify-between">
            <P className="font-medium text-[20px]">{d.dayName}</P>
            <P className="font-medium text-[#868E96]">{format(date,'d MMMM')}</P>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarSideBar;
