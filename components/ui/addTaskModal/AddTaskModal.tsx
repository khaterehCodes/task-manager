import ModalHook from "@/core/hooks/ModalHook";
import { TasksModalType } from "@/core/types/global";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import P from "../customP/P";
import { useTheme } from "@/core/provider/ThemeContext";
import Button from "../customButton/Button";
import { useState } from "react";
import Priorities from "./Priorities";
import TagsModal from "./TagsModal";

function AddTaskModal({ newTaskModal, setNewTaskModal }: TasksModalType) {
  const { currentTheme } = useTheme();
  const [openPriorities, setOpenPriorities] = useState<boolean>(false);
  const [openTag, setOpenTag] = useState<boolean>(false);
  return (
    <div>
      <ModalHook openModal={newTaskModal}>
        <div className="w-290 h-160 bg-white rounded-lg flex flex-col items-center justify-center gap-9 p-5 relative">
          <div className="w-full h-9 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#D9D9D9] rounded-xs"></div>
              <Input
                placeholder="عنوان تسک"
                className="text-[24px] font-medium w-200 h-full outline-0"
              />
            </div>
            <div
              onClick={() => setNewTaskModal(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
          </div>
          <div className="w-full h-10 flex items-center justify-start gap-3 font-medium">
            در
            <div className="border border-[#E9EBF0] w-40 h-8 rounded-md p-1 flex items-center">
              پروژه اول
            </div>
            برای
            <Icon name="member" />
          </div>
          <textarea
            id="taskDesc"
            name="taskDesc"
            placeholder="توضیحاتی برای این تسک بنویسید"
            className="w-full h-48 border border-[#E2E2E2] p-5 rounded-xl"
          ></textarea>
          <div className="w-full h-8 flex items-center justify-start gap-4">
            <P className="font-medium">افزودن پیوست </P>
            <div
              style={{ borderBlockColor: currentTheme }}
              className="font-medium border w-28 h-full flex items-center justify-center gap-2"
            >
              <Icon name="link" />
              آپلود فایل
            </div>
          </div>
          <div className="w-full h-8 flex items-center justify-start gap-4">
            <P className="font-medium"> افزودن کاور </P>
            <div
              style={{ borderBlockColor: currentTheme }}
              className="font-medium border w-28 h-full flex items-center justify-center gap-2"
            >
              <Icon name="link" />
              آپلود فایل
            </div>
          </div>
          <div className="w-full h-13 flex items-center justify-between">
            <div className="w-50 h-full flex items-center justify-between">
              <div
                onClick={() => setOpenPriorities(!openPriorities)}
                className="cursor-pointer"
              >
                <Icon name="priority" />
              </div>
              <Icon name="calendarTask" />
              <div
                onClick={() => setOpenTag(!openTag)}
                className="cursor-pointer"
              >
                <Icon name="tag" />
              </div>
            </div>
            <Button className="w-32 h-8 cursor-pointer text-white text-[12px] rounded-sm">
              ساختن تسک
            </Button>
          </div>
        </div>
        <Priorities
          openPriorities={openPriorities}
          setOpenPriorities={setOpenPriorities}
        />
        <TagsModal openTag={openTag} setOpenTag={setOpenTag} />
      </ModalHook>
    </div>
  );
}

export default AddTaskModal;
