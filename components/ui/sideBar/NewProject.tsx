import ModalHook from "@/core/hooks/ModalHook";
import { NewProjectType } from "@/core/types/global";
import P from "../customP/P";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import { useAppDispatch, useAppSelector } from "@/core/hooks/ReduxHook";
import { addProject } from "@/core/redux/features/ProjectSlice";
import React from "react";

function NewProject({
  newProject,
  setNewProject,
  projectName,
  setProjectName,
}: NewProjectType) {
  const dispatch = useAppDispatch();
  const workSpaceId = useAppSelector(
    (state) => state.workSpace.selectedWorkSpaceId,
  );
  const addProjectHandler = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (!projectName.trim()) return;
    if (!workSpaceId) {
      return;
    }
    dispatch(
      addProject({
        id: Date.now().toString(),
        name: projectName,
        workSpaceId,
      }),
    );
    setProjectName("");
    setNewProject(false);
  };
  return (
    <>
      <ModalHook openModal={newProject}>
        <div className="w-125 h-67 rounded-lg p-5 bg-white flex flex-col items-center justify-evenly">
          <div className="w-113 h-8 flex items-center">
            <div
              onClick={() => setNewProject(false)}
              className="w-7 h-7 cursor-pointer flex items-center justify-center"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold w-[90%] flex items-center justify-center">
              ساختن پروژه جدید‌
            </P>
          </div>
          <form
            onSubmit={addProjectHandler}
            className="w-104 h-auto flex items-start justify-center flex-col gap-10"
          >
            <div>
              <label htmlFor="project" className="text-[14px]">
                نام پروژه
              </label>
              <Input
                value={projectName}
                name="project"
                className="w-104 h-10 p-2 rounded-md border border-[#AAAAAA] outline-0"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold"
            >
              ادامه
            </Button>
          </form>
        </div>
      </ModalHook>
    </>
  );
}

export default NewProject;
