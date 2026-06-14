import ModalHook from "@/core/hooks/ModalHook";
import { WorkSpaceDtailProps } from "@/core/types/global";
import P from "../customP/P";
import Icon from "../icons/Icon";
import ShareButton from "../header/ShareButton";
import { useState } from "react";
import Button from "../customButton/Button";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import {
  changeWorkSpaceColor,
  deleteWorkSpace,
  editWorkSpaceName,
} from "@/core/redux/features/WorkSpaceSlice";
import NewProject from "./NewProject";
import { addProject } from "@/core/redux/features/ProjectSlice";
import ChangeWSName from "./ChangeWSName";

function MoreDetails({
  openWorkSpace,
  setOpenWorkSpace,
  selectWorkSpaceId,
}: WorkSpaceDtailProps) {
  const [projectName, setProjectName] = useState<string>("");
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [newColor, setNewColor] = useState<string>("");
  const [newProject, setNewProject] = useState<boolean>(false);
  const [openChangeWSName, setOpenChangeWSName] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const deleteHandler = () => {
    if (selectWorkSpaceId) {
      dispatch(deleteWorkSpace(selectWorkSpaceId));
    }
    setOpenWorkSpace(false);
  };
  const editNameHandler = () => {
    if (selectWorkSpaceId) {
      dispatch(
        changeWorkSpaceColor({ id: selectWorkSpaceId, color: newColor }),
      );
    }
    setOpenWorkSpace(false);
  };

  const createNewProject = () => {
    if (selectWorkSpaceId) {
      dispatch(
        addProject({
          id: Date.now().toString(),
          name: projectName,
          workSpaceId: selectWorkSpaceId,
        }),
      );
      setNewProject(true);
    }
    setOpenWorkSpace(false);
  };
  return (
    <div>
      <ModalHook openModal={openWorkSpace} setOpenModal={setOpenWorkSpace}>
        <div className="w-50 h-60 rounded-lg bg-white p-3 flex flex-col items-center justify-evenly">
          <div
            onClick={() => createNewProject()}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="add" />
            <P className="text-[14px]">ساختن پروژه جدید</P>
          </div>
          <div
            onClick={() => setOpenChangeWSName(!openChangeWSName)}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="edit" />
            <P className="text-[14px]">ویرایش نام ورک‌اسپیس</P>
          </div>
          <div
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="editColor" />
            <P className="text-[14px]">ویرایش رنگ</P>
          </div>
          <div className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="link" />
            <P className="text-[14px]">کپی لینک</P>
          </div>
          <div
            onClick={() => deleteHandler()}
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
      </ModalHook>
      <ShareButton openShare={openShare} setOpenShare={setOpenShare} />
      <NewProject
        newProject={newProject}
        setNewProject={setNewProject}
        projectName={projectName}
        setProjectName={setProjectName}
      />
      <ChangeWSName
        openChangeWSName={openChangeWSName}
        setOpenChangeWSName={setOpenChangeWSName}
        selectWorkSpaceId={selectWorkSpaceId}
      />
    </div>
  );
}

export default MoreDetails;
