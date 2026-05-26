import ModalHook from "@/core/hooks/modalHook/ModalHook";
import P from "../customP/P";
import Icon from "../icons/Icon";
import { themes, workSpaceColor } from "@/core/constants/global";
import React, { useState } from "react";

type ModalType = {
  workspaceColor: boolean;
  setWorkspaceColor: (value: boolean) => void;
};

function SelectColorWorkSpace({
  workspaceColor,
  setWorkspaceColor,
}: ModalType) {
  const [selectWorkSpaceColor, setSelectWorkSpaceColor] = useState<number>(1);
  return (
    <>
      <ModalHook openModal={workspaceColor}>
        <div className="w-125 h-72 bg-white rounded-lg p-5 flex flex-col items-center justify-center gap-10">
          <div className="w-full h-10 flex items-center justify-between mb-3">
            <div
              onClick={() => setWorkspaceColor(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold">انتخاب رنگ ورک‌اسپیس</P>
            <div 
            onClick={()=>setWorkspaceColor(false)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer">
              <Icon name="backIcon" />
            </div>
          </div>
          <div className="w-full h-22 flex items-center justify-start gap-5">
            <div className={`w-18 h-18 bg-[#7D828C] rounded-lg flex items-center justify-center`}
            // style={
            //   selectWorkSpaceColor ? ({backgroundColor:}):({})
            // }
            >
              <P className="text-[24px] font-extrabold">ت ط</P>
            </div>
            <div className=" w-73 h-full flex flex-col justify-between">
              <P className="text-[14px]">رنگ ورک‌اسپیس</P>
              <div className="w-full h-13 flex flex-wrap items-center gap-2">
                {workSpaceColor.map((c) => (
                  <React.Fragment key={c.id}>
                    {c.icon ? (
                      <div 
                      onClick={()=>setSelectWorkSpaceColor(0)}
                      className="cursor-pointer">
                        <Icon name={c.icon} />
                      </div>
                    ) : (
                      <div
                        onClick={() => setSelectWorkSpaceColor(c.id)}
                        className={`flex items-center justify-center cursor-pointer ${selectWorkSpaceColor === c.id ? "w-8 h-8 rounded-xl" : "w-5 h-5 rounded-lg"}`}
                        style={{ backgroundColor: c.color }}
                      >
                        {selectWorkSpaceColor === c.id && (
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ModalHook>
    </>
  );
}

export default SelectColorWorkSpace;
