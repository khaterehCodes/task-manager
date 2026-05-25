"use client";
import { addMonths, getDay, startOfMonth, subMonths } from "date-fns-jalali";
import { createContext, ReactNode, useContext, useState } from "react";

type CalendarPropsType = {
  children: ReactNode;
};

interface CalendarContextType {
  currentDate: Date;
  setCurrentDate: (value: Date) => void;
  selectedDate: Date | null;
  setSelectedDate: (value: Date | null) => void;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarContext = createContext<CalendarContextType>({
  currentDate: new Date(),
  setCurrentDate: () => {},
  selectedDate: null,
  setSelectedDate: () => {},
  prevMonth: () => {},
  nextMonth: () => {},
});

export const CalendarProvider = ({ children }: CalendarPropsType) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const firstDay = getDay(startOfMonth(currentDate));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        selectedDate,
        setSelectedDate,
        prevMonth,
        nextMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
