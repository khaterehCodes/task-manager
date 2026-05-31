'use client'
import AddTaskButton from "@/components/ui/addTaskButton/AddTaskButton";

function ListView() {
  return (
    <div className="w-full h-148 p-5 relative">
      <div className="absolute bottom-5 left-5">
        <AddTaskButton />
      </div>
    </div>
  );
}

export default ListView;
