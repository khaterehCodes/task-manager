import ModalHook from "@/core/hooks/ModalHook";
import { ProjectsDetailProps } from "@/core/types/global";
import Icon from "../icons/Icon";
import P from "../customP/P";
import Button from "../customButton/Button";
import { useState } from "react";
import ShareButton from "../header/ShareButton";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import { deleteProject } from "@/core/redux/features/ProjectSlice";
import AddTaskModal from "../addTaskModal/AddTaskModal";
import ChangePName from "./ChangePName";

function MoreProjects({
  moreProjects,
  setMoreProjects,
  projectId,
}: ProjectsDetailProps) {
  const dispatch = useAppDispatch();
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [openChangePName, setOpenPName] = useState<boolean>(false);
  const deleteProjectHandler = () => {
    if (projectId) {
      dispatch(deleteProject(projectId));
    }
    setMoreProjects(false);
  };
  const createNewTask = () => {
    setNewTaskModal(!newTaskModal);
  };
  return (
    <div>
      <ModalHook openModal={moreProjects} setOpenModal={setMoreProjects}>
        <div className="w-46 h-51 bg-white flex flex-col items-center justify-between p-3 rounded-lg">
          <div
            onClick={() => createNewTask()}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="add" />
            <P className="text-[14px]">ساختن تسک جدید</P>
          </div>
          <div
            onClick={() => setOpenPName(true)}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="edit" />
            <P className="text-[14px]">ویرایش نام پروژه</P>
          </div>
          <div className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="link" />
            <P className="text-[14px]">کپی لینک</P>
          </div>
          <div
            onClick={() => deleteProjectHandler()}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="delete" />
            <P className="text-[14px] text-red-500">حذف</P>
          </div>
          <Button
            onClick={() => setOpenShare(!openShare)}
            className="font-medium flex items-center justify-center gap-1 cursor-pointer w-43 h-9 text-white rounded-md"
          >
            <Icon name="share" />
            اشتراک گذاری
          </Button>
        </div>
        <ShareButton openShare={openShare} setOpenShare={setOpenShare} />
      </ModalHook>
      <AddTaskModal
        newTaskModal={newTaskModal}
        setNewTaskModal={setNewTaskModal}
      />
      <ChangePName
        openChangePName={openChangePName}
        setOpenPName={setOpenPName}
        projectId={projectId}
      />
    </div>
  );
}

export default MoreProjects;
