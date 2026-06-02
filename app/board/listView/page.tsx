"use client";
import AddTaskButton from "@/components/ui/addTaskButton/AddTaskButton";
import P from "@/components/ui/customP/P";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import React from "react";

function ListView() {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeTasks = useAppSelector((state) => state.taskSlice.items);
  const tasks = wholeTasks.filter((t) => t.projectId === selectedProject);
  console.log(tasks);
  if (!selectedProject) {
    return <P>به تسک منیجر خوش آمدید</P>;
  }
  return (
    <div className="w-full h-148 p-5 relative">
      <div className="absolute bottom-5 left-5">
        <AddTaskButton />
      </div>
      <div className="w-full h-140 bg-pink-400">
        {tasks.map((t) => (
          <React.Fragment key={t.id}>{t.title}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ListView;
