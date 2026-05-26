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
import ModalCalendar from "./ModalCalendar";

function DatePicker() {
  const { currentTheme } = useTheme();
  const { currentDate, selectedDate, setSelectedDate } = useCalendar();
  const [modalCalandar, setModalCalendar] = useState<boolean>(false);
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });
  const clickCell = (day: any) => {
    setSelectedDate(day);
    setModalCalendar(!modalCalandar);
  };
  return (
    <>
      <table>
        <thead className="w-full h-10 flex items-center justify-between">
          {daysName.map((dayName) => (
            <React.Fragment key={dayName.id}>
              <tr>
                <th
                  className="w-38 flex items-start"
                  style={{ color: currentTheme }}
                >
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
                      onClick={() => clickCell(day)}
                      className="w-38 h-25 border-2 cursor-pointer p-3 flex items-end justify-end"
                      style={{ borderColor: currentTheme }}
                    >
                      {format(day, "d", { locale: faIR })}
                    </td>
                  ) : (
                    <td
                      onClick={() => clickCell(day)}
                      className="w-38 h-25 border border-[#AAAAAA] cursor-pointer p-3 flex items-end justify-end"
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
      <ModalCalendar
        modalCalandar={modalCalandar}
        setModalCalendar={setModalCalendar}
      />
    </>
  );
}

export default DatePicker;
