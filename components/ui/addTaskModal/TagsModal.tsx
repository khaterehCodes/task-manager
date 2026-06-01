import ModalHook from "@/core/hooks/ModalHook";
import { TagspropsType } from "@/core/types/global";
import React, { useState } from "react";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import { tags } from "@/core/constants/global";
import P from "../customP/P";
import TagsDetail from "./TagsDetail";

function TagsModal({ openTag, setOpenTag }: TagspropsType) {
  const [tagsDetail, setTagsDetail] = useState<boolean>(false);
  return (
    <>
      <ModalHook openModal={openTag}>
        <div className="w-43 h-47 bg-white flex flex-col p-3 rounded-lg gap-1 relative">
          <div
            onClick={() => setTagsDetail(!tagsDetail)}
            className="w-16 h-6 bg-[#FFE8CC] rounded-[35px] text-[#FD7E14] cursor-pointer text-[12px] flex items-center justify-center"
          >
            تگ جدید
          </div>
          <div className="w-full h-8 bg-[#E9E9E9] flex items-center justify-start gap-1 rounded-sm">
            <Icon name="search" />
            <Input
              placeholder="جستجو یا ساختن تگ"
              className="outline-0 w-28 h-full text-[12px]"
            />
          </div>
          <div className="w-full h-fit flex flex-col gap-1">
            {tags.map((t) => (
              <React.Fragment key={t.id}>
                <div className="w-full h-8 flex items-center justify-between">
                  <div
                    className="w-fit h-6 rounded-[14px] p-4 flex items-center justify-center"
                    style={{ backgroundColor: t.color }}
                  >
                    <P
                      className="text-[12px] font-extrabold"
                      style={{ color: t.textColor }}
                    >
                      {t.name}
                    </P>
                  </div>
                  <div
                    onClick={() => setTagsDetail(true)}
                    className="w-5 h-5 cursor-pointer flex items-center justify-center"
                  >
                    <Icon name="more" />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <TagsDetail tagsDetail={tagsDetail} setTagsDetail={setTagsDetail} />
      </ModalHook>
    </>
  );
}

export default TagsModal;
