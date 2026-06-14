import ModalHook from "@/core/hooks/ModalHook";
import { ChangePNameType } from "@/core/types/global";
import React, { useState } from "react";
import Icon from "../icons/Icon";
import P from "../customP/P";
import Input from "../customInput/Input";
import Button from "../customButton/Button";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import { editProject } from "@/core/redux/features/ProjectSlice";

function ChangePName({
  openChangePName,
  setOpenPName,
  projectId,
}: ChangePNameType) {
  const [projectName, setProjectName] = useState<string>("");
  const dispatch = useAppDispatch();
  const editProjectName = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (!projectName.trim() || !projectId) return;
    dispatch(
      editProject({
        id: projectId,
        name: projectName,
      }),
    );
    setProjectName("");
    setOpenPName(false);
  };
  return (
    <div>
      <ModalHook openModal={openChangePName}>
        <div className="w-125 h-67 rounded-lg p-5 bg-white flex flex-col items-center justify-evenly">
          <div className="w-113 h-8 flex items-center">
            <div
              onClick={() => setOpenPName(false)}
              className="w-7 h-7 cursor-pointer flex items-center justify-center"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold w-[90%] flex items-center justify-center">
              ویرایش نام پروژه
            </P>
          </div>
          <form
            onSubmit={editProjectName}
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
              className="w-full h-10 rounded-md text-white cursor-pointer text-[14px] font-extrabold"
            >
              تایید
            </Button>
          </form>
        </div>
      </ModalHook>
    </div>
  );
}

export default ChangePName;
