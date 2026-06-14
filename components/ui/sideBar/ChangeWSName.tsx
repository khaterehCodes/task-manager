import ModalHook from "@/core/hooks/ModalHook";
import { ChangeWSNameTypes } from "@/core/types/global";
import React, { useState } from "react";
import Icon from "../icons/Icon";
import P from "../customP/P";
import Input from "../customInput/Input";
import Button from "../customButton/Button";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import { editWorkSpaceName } from "@/core/redux/features/WorkSpaceSlice";

function ChangeWSName({
  openChangeWSName,
  setOpenChangeWSName,
  selectWorkSpaceId,
}: ChangeWSNameTypes) {
  const [changeWSName, setChangeWSName] = useState<string>("");
  const dispatch = useAppDispatch();
  const changeName = () => {
    if (selectWorkSpaceId) {
      dispatch(
        editWorkSpaceName({ id: selectWorkSpaceId, name: changeWSName }),
      );
    }
    setOpenChangeWSName(false);
  };
  return (
    <>
      <ModalHook openModal={openChangeWSName}>
        <div className="w-125 h-68 bg-white dark:bg-[#868E96] rounded-lg p-5 flex flex-col items-center justify-center gap-5">
          <div className="w-full h-10 flex items-center text-black">
            <div
              onClick={() => setOpenChangeWSName(false)}
              className="w-5 h-5 cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold w-[90%] items-center justify-center flex">
              ویرایش نام ورک‌اسپیس
            </P>
          </div>
          <div className="w-full h-45 flex flex-col items-center justify-center gap-7">
            <div className="w-104 h-20 flex flex-col gap-1">
              <label htmlFor="workspace" className="text-[14px]">
                نام ورک‌اسپیس
              </label>
              <Input
                name="workspace"
                onChange={(e) => {
                  setChangeWSName(e.target.value);
                }}
                value={changeWSName}
                className={`w-full h-10 border rounded-lg outline-0 p-2 border-[#AAAAAA]`}
              />
            </div>
            <Button
              onClick={changeName}
              className="w-104 h-10 rounded-md text-white cursor-pointer"
            >
              تایید
            </Button>
          </div>
        </div>
      </ModalHook>
    </>
  );
}

export default ChangeWSName;
