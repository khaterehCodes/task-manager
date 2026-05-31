import React, { useState } from "react";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import P from "../customP/P";
import NewWorkSpace from "./NewWorkSpace";
import NewProject from "./NewProject";
import { useWorkSpace } from "@/core/provider/WorkSpaceContext";
import { useAppDispatch, useAppSelector } from "@/core/hooks/ReduxHook";
import { selectProject } from "@/core/redux/features/ProjectSlice";
import { selectWorkSpace } from "@/core/redux/features/WorkSpaceSlice";
import MoreDetails from "./MoreDetails";
import MoreProjects from "./MoreProjects";

function DropDown() {
  const dispatch = useAppDispatch();
  const workSpaceItems = useAppSelector((state) => state.workSpace.items);
  const projects = useAppSelector((state) => state.projectSlice.items);
  const { openWorkSpace, setOpenWorkSpace } = useWorkSpace();
  const [showTodos, setShowTodos] = useState<string[]>([]);
  const [newProject, setNewProject] = useState<boolean>(false);
  const [moreWorkSpace, setMoreWorkSpace] = useState<boolean>(false);
  const [moreProjects, setMoreProjects] = useState<boolean>(false);
  const toggleTodos = (id: string) => {
    setShowTodos((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <>
      <div className="w-69 h-auto flex items-center justify-center flex-col mt-6 gap-5">
        <div className="w-full h-10 bg-[#F6F7F9] rounded-sm p-2 flex items-center gap-2">
          <Icon name="search" />
          <Input
            type="text"
            placeholder="جستجو کنید"
            className="text-[#AAAAAA] text-[12px] w-[80%] h-full outline-0"
          />
        </div>
        <div
          onClick={() => setOpenWorkSpace(!openWorkSpace)}
          className="w-full h-8 bg-[#D3D3D3] rounded-md flex items-center justify-center gap-1 cursor-pointer"
        >
          <Icon name="add" />
          <P className="text-[12px]">ساختن ورک‌اسپیس جدید</P>
        </div>
        <div className="w-full h-auto flex flex-col gap-1">
          {workSpaceItems.map((item) => (
            <React.Fragment key={item.id}>
              <div
                onClick={() => toggleTodos(item.id)}
                className="w-full h-10 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <P className="font-medium cursor-pointer">{item.name}</P>
                </div>
                <div
                  className="w-10 h-full flex items-center justify-center cursor-pointer"
                  onClick={() => setMoreWorkSpace(!moreWorkSpace)}
                >
                  <Icon name="more" />
                </div>
              </div>
              {showTodos.includes(item.id) && (
                <>
                  <div className="w-[80%] h-auto flex flex-col gap-3">
                    {projects
                      .filter((p) => p.workSpaceId === item.id)
                      ?.map((pro) => (
                        <React.Fragment key={pro.id}>
                          <div
                            onClick={() => dispatch(selectProject(pro.id))}
                            className="w-62 h-8 mr-6 cursor-pointer flex items-center justify-between hover:bg-[#FAFAFA] hover:rounded-sm"
                          >
                            <P className="font-medium">{pro.name}</P>
                            <div
                              className="w-10 h-full flex items-center justify-center cursor-pointer"
                              onClick={() => setMoreProjects(!moreProjects)}
                            >
                              <Icon name="more" />
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                  <div
                    onClick={() => {
                      setNewProject(!newProject);
                      dispatch(selectWorkSpace(item.id));
                    }}
                    className="w-full h-9 border-2 border-[#208D8E] rounded-md text-[#208D8E] flex items-center justify-center cursor-pointer text-[14px]"
                  >
                    ساختن پروژه جدید
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <NewWorkSpace />
      <NewProject newProject={newProject} setNewProject={setNewProject} />
      <MoreDetails
        openWorkSpace={moreWorkSpace}
        setOpenWorkSpace={setMoreWorkSpace}
      />
      <MoreProjects moreProjects={moreProjects} setMoreProjects={setMoreProjects}/>
    </>
  );
}

export default DropDown;
