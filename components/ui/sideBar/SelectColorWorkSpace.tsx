import ModalHook from "@/core/hooks/modalHook/ModalHook";
import P from "../customP/P";
import Icon from "../icons/Icon";
import { themes, workSpaceColor } from "@/core/constants/global";
import React, { useState } from "react";
import FinalInformation from "./FinalInformation";
import Button from "../customButton/Button";
import { useWorkSpace } from "@/core/provider/WorkSpaceContext";

type ModalType = {
  workspaceColor: boolean;
  setWorkspaceColor: (value: boolean) => void;
};

function SelectColorWorkSpace() {
  const {
    workSpaceName,
    workspaceColor,
    setWorkspaceColor,
    openInfo,
    setOpenInfo,
    selectWorkSpaceColor,
    setSelectWorkSpaceColor,
  } = useWorkSpace();
  const selectedBG = workSpaceColor.find((c) => c.id === selectWorkSpaceColor);
  const converWords = (name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .join(" ")
      .toUpperCase();
  };
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
              onClick={() => setWorkspaceColor(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="backIcon" />
            </div>
          </div>
          <div className="w-104 h-22 flex items-center justify-start gap-5">
            <div
              style={{ backgroundColor: selectedBG?.color || "#7D828C" }}
              className={`w-18 h-18 bg-[#7D828C] rounded-lg flex items-center justify-center`}
            >
              <P className="text-[24px] font-extrabold">
                {converWords(workSpaceName)}
              </P>
            </div>
            <div className=" w-73 h-full flex flex-col justify-between">
              <P className="text-[14px]">رنگ ورک‌اسپیس</P>
              <div className="w-full h-13 flex flex-wrap items-center gap-1">
                {workSpaceColor.map((c) => (
                  <React.Fragment key={c.id}>
                    {c.icon ? (
                      <div
                        onClick={() => setSelectWorkSpaceColor(0)}
                        className="cursor-pointer"
                      >
                        <Icon name={c.icon} />
                      </div>
                    ) : (
                      <div
                        onClick={() => setSelectWorkSpaceColor(c.id)}
                        className={`flex items-center justify-center cursor-pointer ${selectWorkSpaceColor === c.id ? "w-8 h-8 rounded-xl" : "w-6 h-6 rounded-lg"}`}
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
          <Button
            onClick={() => setOpenInfo(!openInfo)}
            className="w-104 h-10 rounded-md text-white cursor-pointer"
          >
            ادامه
          </Button>
        </div>
      </ModalHook>
      <FinalInformation />
    </>
  );
}

export default SelectColorWorkSpace;
