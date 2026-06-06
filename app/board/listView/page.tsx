"use client";
import AddTaskButton from "@/components/ui/addTaskButton/AddTaskButton";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import { useState } from "react";
import TodoTasks from "./(components)/TodoTasks";
import InProgressTasks from "./(components)/InProgressTasks";
import DoneTasks from "./(components)/DoneTasks";
import ProtectedRoute from "@/core/provider/ProtectedRoute";

function ListView() {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeProjects = useAppSelector((state) => state.projectSlice.items);
  const currentProject = wholeProjects.find((p) => p.id === selectedProject);
  const [showTasks, setShowTasks] = useState<boolean>(false);
  if (!selectedProject) {
    return <P>به تسک منیجر خوش آمدید</P>;
  }
  return (
    <ProtectedRoute role="user">
      <div className="w-full h-148 p-5 relative">
        <div className="absolute bottom-5 left-5">
          <AddTaskButton />
        </div>
        <div className="w-full h-140">
          <div className="w-full h-10 flex items-center justify-start gap-2">
            <div
              onClick={() => setShowTasks(!showTasks)}
              className="w-5 h-5 cursor-pointer flex items-center justify-center"
            >
              <Icon name="dropDown" />
            </div>
            <P className="text-[20px] font-extrabold">
              {currentProject ? currentProject.name : ""}
            </P>
          </div>
          {showTasks && (
            <div className="mr-3 mt-2">
              <TodoTasks />
              <InProgressTasks />
              <DoneTasks />
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default ListView;
