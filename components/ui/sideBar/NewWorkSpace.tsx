"use client";
import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ModalHook from "@/core/hooks/ModalHook";
import { useState } from "react";
import SelectColorWorkSpace from "./SelectColorWorkSpace";
import { useWorkSpace } from "@/core/provider/WorkSpaceContext";
function NewWorkSpace() {
  const {
    workSpaceName,
    setWorkSpaceName,
    setOpenWorkSpace,
    openWorkSpace,
    setWorkspaceColor,
  } = useWorkSpace();
  const [error, setError] = useState<string>("");
  const addWorkSpaceFunction = () => {
    if (!workSpaceName || workSpaceName.trim() === "") {
      setError("وارد کردن نام ورک اسپیس الزامی است");
      return;
    }
    setError("");
    setWorkspaceColor(true);
  };

  return (
    <div>
      <ModalHook openModal={openWorkSpace}>
        <div className="w-125 h-68 bg-white dark:bg-[#868E96] rounded-lg p-5 flex flex-col items-center justify-center gap-5">
          <div className="w-full h-10 flex items-center text-black">
            <div
              onClick={() => setOpenWorkSpace(false)}
              className="w-5 h-5 cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold w-[90%] items-center justify-center flex">
              ساختن ورک‌اسپیس جدید‌
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
                  setWorkSpaceName(e.target.value);
                  if (error) setError("");
                }}
                value={workSpaceName}
                className={`w-full h-10 border rounded-lg outline-0 p-2 ${error ? "border-red-500" : "border-[#AAAAAA]"}`}
                required
              />
              {error && (
                <P className="w-full flex items-start text-[10px] text-red-500">
                  {error}
                </P>
              )}
            </div>
            <Button
              onClick={addWorkSpaceFunction}
              className="w-104 h-10 rounded-md text-white cursor-pointer"
            >
              ادامه
            </Button>
            <SelectColorWorkSpace />
          </div>
        </div>
      </ModalHook>
    </div>
  );
}

export default NewWorkSpace;
