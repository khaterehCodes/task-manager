import ModalHook from "@/core/hooks/ModalHook";
import { ProjectsDetailProps } from "@/core/types/global";
import Icon from "../icons/Icon";
import P from "../customP/P";
import Button from "../customButton/Button";
import { useState } from "react";
import ShareButton from "../header/ShareButton";

function MoreProjects({ moreProjects, setMoreProjects }: ProjectsDetailProps) {
  const [openShare, setOpenShare] = useState<boolean>(false);
  return (
    <div>
      <ModalHook openModal={moreProjects}>
        <div className="w-46 h-51 bg-white flex flex-col items-center justify-between p-3 rounded-lg">
          <div className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="add" />
            <P className="text-[14px]">ساختن پروژه جدید</P>
          </div>
          <div className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="edit" />
            <P className="text-[14px]">ویرایش نام ورک‌اسپیس</P>
          </div>
          <div className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="link" />
            <P className="text-[14px]">کپی لینک</P>
          </div>
          <div className="w-full h-5 flex items-center justify-start gap-1 cursor-pointer">
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
    </div>
  );
}

export default MoreProjects;
