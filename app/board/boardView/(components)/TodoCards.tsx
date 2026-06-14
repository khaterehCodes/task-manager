import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { priorityFlags } from "@/core/constants/global";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React, { useState } from "react";
import ColumnDetails from "./ColumnDetails";
import ProfileCard from "@/components/ui/profileCard/ProfileCard";
import { useCalendar } from "@/core/provider/CalendarContext";
import TaskDesc from "@/components/ui/TaskDesc/TaskDesc";

function TodoCards() {
  const { endDate } = useCalendar();
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeTasks = useAppSelector((state) => state.taskSlice.items);
  const tasks = wholeTasks.filter((t) => t.projectId === selectedProject);
  const todoTasks = tasks.filter((t) => t.status === "todo" && !t.archive);
  const wholeProjects = useAppSelector((state) => state.projectSlice.items);
  const currentProject = wholeProjects.find((p) => p.id === selectedProject);
  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const showPriorityIcon = (p: string) => {
    return priorityFlags.find((f) => f.title === p);
  };
  return (
    <>
      <div className="w-63 h-147 flex flex-col gap-4">
        <div className="w-full h-10 rounded-2xl border-t-2 border-[#F92E8F] shadow-md/10 p-2 flex items-center justify-between">
          <P className="font-medium">Todo</P>
          <div
            onClick={() => setShowDetail(!showDetail)}
            className="cursor-pointer"
          >
            <Icon name="more" />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-3">
          {todoTasks.map((tt) => {
            const priorityIcon = showPriorityIcon(tt.priority);
            return (
              <React.Fragment key={tt.id}>
                <div className="w-full h-50 rounded-2xl shadow-lg/20 p-3 flex flex-col gap-2">
                  <div className="w-full h-10 flex items-center justify-between">
                    <P className="text-[#534D60] text-[12px]">
                      {currentProject ? currentProject.name : ""}
                    </P>
                    <ProfileCard />
                  </div>
                  <div className="flex items-center gap-2">
                    <P className="text-[12px]">{tt.title}</P>
                    <div
                      onClick={() => {
                        setSelectedTask(tt);
                        setOpenDesc(!openDesc);
                      }}
                      className="w-5 h-5 cursor-pointer"
                    >
                      <Icon name="desc" />
                    </div>
                  </div>
                  <div className="h-10 flex items-center gap-1">
                    {priorityIcon ? (
                      <Icon name={priorityIcon.flag} />
                    ) : (
                      <Icon name="grayFlagL" />
                    )}
                    <P className="text-[12px] text-[#343434]">
                      {tt.startDate &&
                        format(new Date(tt.startDate), "d MMMM", {
                          locale: faIR,
                        })}
                    </P>
                    <div className="flex items-center gap-1">
                      <Icon name="littleTik" />
                      <P className="text-[#BDC0C6] text-[12px]">
                        {endDate
                          ? format(endDate, "d MMMM", { locale: faIR })
                          : "بدون ددلاین"}
                      </P>
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
      <ColumnDetails
        setShowDetail={setShowDetail}
        showDetail={showDetail}
        columnStatus="todo"
      />
      <TaskDesc
        openDesc={openDesc}
        setOpenDesc={setOpenDesc}
        selectedTask={selectedTask}
      />
    </>
  );
}

export default TodoCards;
