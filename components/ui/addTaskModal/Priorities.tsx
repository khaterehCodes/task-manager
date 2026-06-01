import { priorityFlags } from "@/core/constants/global";
import ModalHook from "@/core/hooks/ModalHook";
import { PrioritiesPropsType } from "@/core/types/global";
import React from "react";
import Icon from "../icons/Icon";
import P from "../customP/P";

function Priorities({
  openPriorities,
  setOpenPriorities,
}: PrioritiesPropsType) {
  return (
    <>
      <ModalHook openModal={openPriorities}>
        <div className="w-40 h-39 bg-white p-3 rounded-lg flex flex-col justify-center">
          <div className="w-full h-29 flex flex-col justify-between gap-1">
            {priorityFlags.map((p) => (
              <React.Fragment key={p.id}>
                <div className="w-full h-5 flex items-center justify-start gap-2 cursor-pointer">
                  <Icon name={p.flag} />
                  <P className="text-[14px]">{p.title}</P>
                </div>
              </React.Fragment>
            ))}
            <div className="w-full h-5 flex items-center justify-start gap-2 cursor-pointer">
              <Icon name="deletePrioperty" />
              <P className="text-[14px]">حذف اولویت</P>
            </div>
          </div>
        </div>
      </ModalHook>
    </>
  );
}

export default Priorities;
