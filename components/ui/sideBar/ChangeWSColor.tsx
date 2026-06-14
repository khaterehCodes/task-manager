import ModalHook from "@/core/hooks/ModalHook";
import { ChangeWSColorTypes } from "@/core/types/global";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";
import P from "../customP/P";
import { useWorkSpace } from "@/core/provider/WorkSpaceContext";
import { workSpaceColor } from "@/core/constants/global";
import { changeWorkSpaceColor } from "@/core/redux/features/WorkSpaceSlice";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import React from "react";

function ChangeWSColor({
  changeWSColor,
  setChangeWSColor,
  selectWorkSpaceId,
}: ChangeWSColorTypes) {
  const dispatch = useAppDispatch();
  const {
    workSpaceName,
    workspaceColor,
    selectWorkSpaceColor,
    setSelectWorkSpaceColor,
  } = useWorkSpace();
  const selectedBG = workSpaceColor.find(
    (c) => c.color === selectWorkSpaceColor,
  );
  const converWords = (name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .map((w) => w[0])
      .join(" ")
      .toUpperCase();
  };
  const changeColor = () => {
    if (selectWorkSpaceId) {
      dispatch(
        changeWorkSpaceColor({
          id: selectWorkSpaceId,
          color: selectWorkSpaceColor,
        }),
      );
    }
    setChangeWSColor(false);
  };

  return (
    <div>
      <ModalHook openModal={changeWSColor}>
        <div className="w-125 h-72 bg-white rounded-lg p-5 flex flex-col items-center justify-center gap-10">
          <div className="w-full h-10 flex items-center justify-between mb-3">
            <div
              onClick={() => setChangeWSColor(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold w-80">
              ویرایش رنگ ورک‌اسپیس
            </P>
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
                        onClick={() => setSelectWorkSpaceColor("#7D828C")}
                        className="cursor-pointer"
                      >
                        <Icon name={c.icon} />
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          setSelectWorkSpaceColor(c.color || "#7D828C")
                        }
                        className={`flex items-center justify-center cursor-pointer ${selectWorkSpaceColor === c.id.toString() ? "w-8 h-8 rounded-xl" : "w-6 h-6 rounded-lg"}`}
                        style={{ backgroundColor: c.color }}
                      >
                        {selectWorkSpaceColor === c.color && (
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
            onClick={changeColor}
            className="w-104 h-10 rounded-md text-white cursor-pointer"
          >
            تایید
          </Button>
        </div>
      </ModalHook>
    </div>
  );
}

export default ChangeWSColor;
