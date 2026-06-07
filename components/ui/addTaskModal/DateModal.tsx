"use client";
import { daysName } from "@/core/constants/global";
import { useCalendar } from "@/core/provider/CalendarContext";
import { useTheme } from "@/core/provider/ThemeContext";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  startOfMonth,
} from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React, { useState } from "react";

function DateModal() {
  const { currentTheme } = useTheme();
  const { currentDate, selectedDate, setSelectedDate } = useCalendar();
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });
  const clickCell = (day: any) => {
    setSelectedDate(day);
  };
  return (
    <div className="w-150">
      <table>
        <thead className="w-full h-15 flex items-center justify-between p-1">
          {daysName.map((dayName) => (
            <React.Fragment key={dayName.id}>
              <tr>
                <th
                  className="w-22 flex items-start font-medium text-[#868E96] text-[16px]"
                >
                  {dayName.day}
                </th>
              </tr>
            </React.Fragment>
          ))}
        </thead>
        <tbody className="w-full h-90 flex flex-wrap gap-x-4">
          {daysInMonth.map((day, index) => {
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            return (
              <React.Fragment key={index}>
                <tr>
                  {isSelected ? (
                    <td
                      onClick={() => clickCell(day)}
                      className="w-16 flex items-center justify-center h-10 border rounded-full cursor-pointer"
                      style={{ borderColor: currentTheme }}
                    >
                      {format(day, "d", { locale: faIR })}
                    </td>
                  ) : (
                    <td
                      onClick={() => clickCell(day)}
                      className="w-17 flex items-center justify-center h-10 font-medium text-[20px] cursor-pointer"
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
    </div>
  );
}

export default DateModal;
