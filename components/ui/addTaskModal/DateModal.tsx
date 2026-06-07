"use client";
import { daysName } from "@/core/constants/global";
import { useCalendar } from "@/core/provider/CalendarContext";
import { useTheme } from "@/core/provider/ThemeContext";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  isWithinInterval,
  startOfMonth,
} from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React from "react";

function DateModal() {
  const { currentTheme } = useTheme();
  const { currentDate, setRange, startDate, endDate } = useCalendar();
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const clickCell = (day: any) => {
    if (!startDate || (startDate && endDate)) {
      setRange(day, null);
    } else {
      if (day < startDate) {
        setRange(day, null);
      } else {
        setRange(startDate, day);
      }
    }
  };
  return (
    <div className="w-150">
      <table>
        <thead className="w-full h-15 flex items-center justify-between p-1">
          {daysName.map((dayName) => (
            <React.Fragment key={dayName.id}>
              <tr>
                <th className="w-22 flex items-start font-medium text-[#868E96] text-[16px]">
                  {dayName.day}
                </th>
              </tr>
            </React.Fragment>
          ))}
        </thead>
        <tbody className="w-full h-90 flex flex-wrap gap-x-4">
          {daysInMonth.map((day, index) => {
            const isStart = startDate && isSameDay(day, startDate);
            const isEnd = endDate && isSameDay(day, endDate);
            const inRange =
              startDate &&
              endDate &&
              isWithinInterval(day, { start: startDate, end: endDate });
            let calClass =
              "w-16 h-12 flex items-center justify-center cursor-pointer transition-all";
            let calStyle: React.CSSProperties = {};
            if (isStart || isEnd) {
              calClass += "rounded-full text-white";
              calStyle = { backgroundColor: currentTheme };
            } else if (inRange) {
              calClass += "bg-opacity-20";
              calStyle = { backgroundColor: `${currentTheme}33` };
            }
            return (
              <React.Fragment key={index}>
                <tr>
                  <td
                    onClick={() => clickCell(day)}
                    className={calClass}
                    style={calStyle}
                  >
                    {format(day, "d", { locale: faIR })}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DateModal;
