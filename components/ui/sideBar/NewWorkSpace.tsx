import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ModalHook from "@/core/hooks/modalHook/ModalHook";
import { useState } from "react";
import SelectColorWorkSpace from "./SelectColorWorkSpace";
function NewWorkSpace({
  openWorkSpace,
  setOpenWorkSpace,
}: {
  openWorkSpace: boolean;
  setOpenWorkSpace: (value: boolean) => void;
}) {
  const [workspaceColor, setWorkspaceColor] = useState<boolean>(false);

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
          <div className="w-full h-40 flex flex-col items-center justify-center gap-7">
            <div className="w-104 h-17 flex flex-col gap-1">
              <label htmlFor="workspace" className="text-[14px]">
                نام ورک‌اسپیس
              </label>
              <Input
                name="workspace"
                className="w-full h-10 border border-[#AAAAAA] rounded-lg outline-0 p-2"
              />
            </div>
            <Button
              onClick={()=>setWorkspaceColor(!workspaceColor)}
              className="w-104 h-10 bg-[#208D8E] rounded-md text-white cursor-pointer"
            >
              ادامه
            </Button>
            <SelectColorWorkSpace
              workspaceColor={workspaceColor}
              setWorkspaceColor={setWorkspaceColor}
            />
          </div>
        </div>
      </ModalHook>
    </div>
  );
}

export default NewWorkSpace;
