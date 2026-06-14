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
  startDate: Date | null;
  endDate: Date | null;
  setRange: (start: Date | null, end: Date | null) => void;
  clickDateHandler: (date: Date) => void;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarContext = createContext<CalendarContextType>({
  currentDate: new Date(),
  setCurrentDate: () => {},
  selectedDate: null,
  setSelectedDate: (value: Date | null) => {},
  prevMonth: () => {},
  nextMonth: () => {},
  startDate: null,
  endDate: null,
  setRange: (start: Date | null, end: Date | null) => {},
  clickDateHandler: (date: Date) => {},
});

export const CalendarProvider = ({ children }: CalendarPropsType) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const setRange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };
  const clickDateHandler = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        selectedDate,
        setSelectedDate,
        startDate,
        endDate,
        clickDateHandler,
        setRange,
        prevMonth,
        nextMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
