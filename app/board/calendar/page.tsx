"use client";
import ProtectedRoute from "@/core/provider/ProtectedRoute";
import DatePicker from "./(components)/DatePicker";

function Calendar() {
  return (
    <ProtectedRoute role="user">
      <div className="w-full h-screen flex items-start justify-center overflow-y-auto">
        <div className="w-[96%] h-145 flex items-center justify-center">
          <DatePicker />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Calendar;
