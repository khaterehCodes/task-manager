import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { priorityFlags } from "@/core/constants/global";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import React from "react";

function InProgressCards() {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeTasks = useAppSelector((state) => state.taskSlice.items);
  const tasks = wholeTasks.filter((t) => t.projectId === selectedProject);
  const inProgressTasks = tasks.filter((t) => t.status === "done");
  const wholeProjects = useAppSelector((state) => state.projectSlice.items);
  const currentProject = wholeProjects.find((p) => p.id === selectedProject);
  const showPriorityIcon = (p: string) => {
    return priorityFlags.find((f) => f.title === p);
  };
  return (
    <div className="w-63 h-147 flex flex-col gap-4">
      <div className="w-full h-10 rounded-2xl border-t-2 border-[#F92E8F] shadow-md/10 p-2">
        <P className="font-medium">Todo</P>
      </div>
      <div className="w-full h-auto flex flex-col gap-3">
        {inProgressTasks.map((ipt) => {
          const priorityIcon = showPriorityIcon(ipt.priority);
          return (
            <React.Fragment key={ipt.id}>
              <div className="w-full h-50 rounded-2xl shadow-lg/20 p-3 flex flex-col gap-2">
                <div className="w-full h-10 flex items-center justify-between">
                  <P className="text-[#534D60] text-[12px]">
                    {currentProject ? currentProject.name : ""}
                  </P>
                  <div className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center">
                    <P className="text-pink-500 text-[9px]">KN</P>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <P className="text-[12px]">{ipt.title}</P>
                  <Icon name="desc" />
                </div>
                <div className="h-10 flex items-center gap-1">
                  {priorityIcon ? (
                    <Icon name={priorityIcon.flag} />
                  ) : (
                    <Icon name="grayFlagL" />
                  )}
                  <P className="text-[12px] text-[#343434]">۵ مهر - فردا</P>
                  <div className="flex items-center gap-1">
                    <Icon name="littleTik" />
                    <P className="text-[#BDC0C6] text-[12px]">۲ / ۱۲</P>
                  </div>
                </div>
                <div className="w-full h-8 flex items-center gap-2">
                  <div className="w-10 h-5 rounded-[14px] p-3 bg-[#D0EBFF] text-[#228BE6] text-[12px] font-extrabold flex items-center justify-center">
                    درس
                  </div>
                  <div className="w-10 h-5 rounded-[14px] p-3 bg-[#F3D9FA] text-[#BE4BDB] text-[12px] font-extrabold flex items-center justify-center">
                    پروژه
                  </div>
                </div>
                <hr className="border-[#EFF0F0]" />
                <div className="w-full h-10 flex items-center justify-between">
                  <Icon name="changeStatus" />
                  <Icon name="more" />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default InProgressCards;
