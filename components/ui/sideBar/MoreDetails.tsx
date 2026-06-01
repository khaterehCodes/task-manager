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

function MoreDetails({
  openWorkSpace,
  setOpenWorkSpace,
  selectWorkSpaceId,
}: WorkSpaceDtailProps) {
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [changeWSName, setChangeWSName] = useState<string>("");
  const [newColor, setNewColor] = useState<string>("");
  const [newProject, setNewProject] = useState<boolean>(false);
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
  const changeName = () => {
    if (selectWorkSpaceId) {
      dispatch(
        editWorkSpaceName({ id: selectWorkSpaceId, name: changeWSName }),
      );
    }
  };
  const createNewProject = () => {
    if (selectWorkSpaceId) {
      setNewProject(true);
    }
  };
  return (
    <div>
      <ModalHook openModal={openWorkSpace}>
        <div className="w-50 h-60 rounded-lg bg-white p-3 flex flex-col items-center justify-evenly">
          <div
            onClick={() => createNewProject()}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="add" />
            <P className="text-[14px]">ساختن پروژه جدید</P>
          </div>
          <div
            onClick={() => changeName()}
            className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="edit" />
            <P className="text-[14px]">ویرایش نام ورک‌اسپیس</P>
          </div>
          <div
            onClick={() => editNameHandler()}
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
      <NewProject newProject={newProject} setNewProject={setNewProject} />
    </div>
  );
}

export default MoreDetails;
