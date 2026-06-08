import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ProfileCard from "@/components/ui/profileCard/ProfileCard";
import TaskDesc from "@/components/ui/TaskDesc/TaskDesc";
import { priorityFlags, tasksHead } from "@/core/constants/global";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import React, { useState } from "react";

function DoneTasks() {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeTasks = useAppSelector((state) => state.taskSlice.items);
  const tasks = wholeTasks.filter((t) => t.projectId === selectedProject);
  const doneTasks = tasks.filter((t) => t.status === "done");
  const inprogressLength = doneTasks.length;
  const [showDone, setShowDone] = useState<boolean>(false);
  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const showPriorityIcon = (p: string) => {
    return priorityFlags.find((f) => f.title === p);
  };
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-between">
        <div className="w-full h-auto flex items-center justify-between">
          <div className="w-100 h-10 flex items-center gap-2">
            <div
              onClick={() => setShowDone(!showDone)}
              className="w-5 h-5 flex cursor-pointer items-center justify-center"
            >
              <Icon name="dropDown" />
            </div>
            <div className="bg-[#40C057] rounded-sm text-[#D3F9D8] font-medium w-24 h-8 flex items-center justify-center">
              Done
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
        {showDone && (
          <div className="w-full h-auto flex items-center justify-between mt-3">
            <div className="w-fit h-auto flex flex-col gap-3">
              {doneTasks.map((dt) => {
                const sendPriority = showPriorityIcon(dt.priority);
                return (
                  <React.Fragment key={dt.id}>
                    <div className="w-285 flex items-center justify-between">
                      <div className="w-fit h-fit flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#40C057] rounded-sm"></div>
                        <P className="text-[12px]">{dt.title}</P>
                      </div>
                      <div className="w-155 h-10 flex items-center justify-between gap-2">
                        <div className="w-150 h-10 flex items-center justify-between">
                          <ProfileCard />
                          <P className="text-[12px]">
                            {dt.startDate ?
                              format(new Date(dt.startDate), "d MMMM", {
                                locale: faIR,
                              }):(<span>not set</span>)}
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

export default DoneTasks;
