"use client";
import AddTaskButton from "@/components/ui/addTaskButton/AddTaskButton";
import DoneCards from "./(components)/DoneCards";
import TodoCards from "./(components)/TodoCards";
import InProgressCards from "./(components)/InProgressCards";

function BoardView() {
  return (
    <div className="w-full h-148 p-5 relative">
      <div className="absolute bottom-5 left-5">
        <AddTaskButton />
      </div>
      <div className="w-full h-full flex items-center justify-center gap-30">
        <TodoCards />
        <DoneCards />
        <InProgressCards />
      </div>
    </div>
  );
}

export default BoardView;
