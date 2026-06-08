import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ProfileCard from "@/components/ui/profileCard/ProfileCard";
import TaskDesc from "@/components/ui/TaskDesc/TaskDesc";
import { priorityFlags, tasksHead } from "@/core/constants/global";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React, { useState } from "react";

function InProgressTasks() {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeTasks = useAppSelector((state) => state.taskSlice.items);
  const tasks = wholeTasks.filter((t) => t.projectId === selectedProject);
  const inprogressTasks = tasks.filter((t) => t.status === "in-progress");
  const inprogressLength = inprogressTasks.length;
  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [showinprogress, setInprogress] = useState<boolean>(false);
  const showPriorityIcon = (p: string) => {
    return priorityFlags.find((f) => f.title === p);
  };
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-between">
        <div className="w-full h-auto flex items-center justify-between">
          <div className="w-100 h-10 flex items-center gap-2">
            <div
              onClick={() => setInprogress(!showinprogress)}
              className="w-5 h-5 flex cursor-pointer items-center justify-center"
            >
              <Icon name="dropDown" />
            </div>
            <div className="bg-[#FD7E14] rounded-sm text-white font-medium w-24 h-8 flex items-center justify-center">
              In progress
            </div>
            <P className="text-[12px]">{inprogressLength} تسک</P>
          </div>
          <div className="w-155 h-10 flex items-center justify-between">
            {tasksHead.map((th) => (
              <P key={th.id} className="font-medium">
                {th.title}
              </P>
            ))}
          </div>
        </div>
        {showinprogress && (
          <div className="w-full h-auto flex items-center justify-between mt-3">
            <div className="w-fit h-auto flex flex-col gap-3">
              {inprogressTasks.map((ipt) => {
                const sendPriority = showPriorityIcon(ipt.priority);
                return (
                  <React.Fragment key={ipt.id}>
                    <div className="w-285 flex items-center justify-between">
                      <div className="w-fit h-fit flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#FD7E14] rounded-sm"></div>
                        <P className="text-[12px]">{ipt.title}</P>
                      </div>
                      <div className="w-155 h-10 flex items-center justify-between gap-2">
                        <div className="w-150 h-10 flex items-center justify-between">
                          <ProfileCard />
                          <P className="text-[12px]">
                            {ipt.startDate ? (
                              format(new Date(ipt.startDate), "d MMMM", {
                                locale: faIR,
                              })
                            ) : (
                              <span>not set</span>
                            )}
                          </P>
                          <div className="w-18 flex items-center justify-center">
                            {sendPriority ? (
                              <Icon name={sendPriority.flag} />
                            ) : (
                              <Icon name="grayFlagL" />
                            )}
                          </div>
                          <div
                            onClick={() => setOpenDesc(!openDesc)}
                            className="w-5 h-5 cursor-pointer"
                          >
                            <Icon name="desc" />
                          </div>
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
      <TaskDesc openDesc={openDesc} setOpenDesc={setOpenDesc} />
    </>
  );
}

export default InProgressTasks;
