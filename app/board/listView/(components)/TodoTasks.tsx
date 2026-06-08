import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ProfileCard from "@/components/ui/profileCard/ProfileCard";
import { priorityFlags, tasksHead } from "@/core/constants/global";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React, { useState } from "react";

function TodoTasks() {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeTasks = useAppSelector((state) => state.taskSlice.items);
  const tasks = wholeTasks.filter((t) => t.projectId === selectedProject);
  const todoTasks = tasks.filter((t) => t.status === "todo");
  const todosLength = todoTasks.length;
  const [showTodos, setShowTodos] = useState<boolean>(false);
  const showPriorityIcon = (p: string) => {
    return priorityFlags.find((f) => f.title === p);
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-between">
      <div className="w-full h-auto flex items-center justify-between">
        <div className="w-100 h-10 flex items-center gap-2">
          <div
            onClick={() => setShowTodos(!showTodos)}
            className="w-5 h-5 flex cursor-pointer items-center justify-center"
          >
            <Icon name="dropDown" />
          </div>
          <div className="bg-[#F92E8F] rounded-sm text-white font-medium w-15 h-8 flex items-center justify-center">
            To Do
          </div>
          <P className="text-[12px]">{todosLength} تسک</P>
        </div>
        <div className="w-155 h-10 flex items-center justify-between">
          {tasksHead.map((th) => (
            <P key={th.id} className="font-medium">
              {th.title}
            </P>
          ))}
        </div>
      </div>
      {showTodos && (
        <div className="w-full h-auto flex items-center justify-between mt-3">
          <div className="w-fit h-auto flex flex-col gap-3">
            {todoTasks.map((tt) => {
              const sendPriority = showPriorityIcon(tt.priority);
              return (
                <React.Fragment key={tt.id}>
                  <div className="w-285 flex items-center justify-between">
                    <div className="w-fit h-fit flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#F92E8F] rounded-sm"></div>
                      <P className="text-[12px]">{tt.title}</P>
                    </div>
                    <div className="w-155 h-10 flex items-center justify-between gap-2">
                      <div className="w-150 h-10 flex items-center justify-between">
                        <ProfileCard />
                        <P className="text-[12px]">
                          {tt.startDate &&
                            format(new Date(tt.startDate), "d MMMM", {
                              locale: faIR,
                            })}
                        </P>
                        <div className="w-18 flex items-center justify-center">
                          {sendPriority ? (
                            <Icon name={sendPriority.flag} />
                          ) : (
                            <Icon name="grayFlagL" />
                          )}
                        </div>
                        <Icon name="desc" />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoTasks;
