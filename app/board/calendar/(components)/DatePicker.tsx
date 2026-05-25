"use client";
import { daysName } from "@/core/constants/global";
import { useTheme } from "@/core/provider/ThemeContext";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  startOfMonth,
  subMonths,
} from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React, { useState } from "react";

function DatePicker() {
  const { currentTheme } = useTheme();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });
  const firstDay = getDay(startOfMonth(currentDate));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  return (
    <table>
      <thead className="w-full h-10 flex items-center justify-between">
        {daysName.map((dayName) => (
          <React.Fragment key={dayName.id}>
            <tr>
              <th className="w-38 flex items-start" style={{ color: currentTheme }}>
                {dayName.day}
              </th>
            </tr>
          </React.Fragment>
        ))}
      </thead>
      <tbody className="w-full h-135 flex flex-wrap gap-x-3">
        {daysInMonth.map((day, index) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          return (
            <React.Fragment key={index}>
              <tr>
                {isSelected ? (
                  <td
                    onClick={() => setSelectedDate(day)}
                    className='w-38 h-25 border-2 cursor-pointer p-3 flex items-end justify-end'
                    style={{borderColor:currentTheme}}
                  >
                    {format(day, "d", { locale: faIR })}
                  </td>
                ) : (
                   <td
                    onClick={() => setSelectedDate(day)}
                    className='w-38 h-25 border border-[#AAAAAA] cursor-pointer p-3 flex items-end justify-end'
                  >
                   {format(day, "d", { locale: faIR })}
                  </td>
                )}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default DatePicker;
