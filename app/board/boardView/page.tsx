"use client";
import AddTaskButton from "@/components/ui/addTaskButton/AddTaskButton";
import DoneCards from "./(components)/DoneCards";
import TodoCards from "./(components)/TodoCards";
import InProgressCards from "./(components)/InProgressCards";
import ProtectedRoute from "@/core/provider/ProtectedRoute";

function BoardView() {
  return (
    <ProtectedRoute role="user">
      <div className="w-full h-148 p-5 relative">
        <div className="absolute bottom-5 left-5 cursor-pointer">
          <AddTaskButton />
        </div>
        <div className="w-full h-full flex items-center justify-center gap-30">
          <TodoCards />
          <DoneCards />
          <InProgressCards />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default BoardView;
