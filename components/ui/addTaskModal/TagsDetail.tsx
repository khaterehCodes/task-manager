import { TagsDetailProps } from "@/core/types/global";
import Icon from "../icons/Icon";
import P from "../customP/P";
import { useState } from "react";
import TagsColor from "./TagsColor";

function TagsDetail({ tagsDetail, setTagsDetail }: TagsDetailProps) {
  const [tagsColor, setTagsColor] = useState<boolean>(false);
  return (
    <>
      {tagsDetail && (
        <div className="w-25 h-22 rounded-lg flex flex-col p-3 bg-white absolute right-140 gap-1">
          <div className="w-full h-6 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="removeTag" />
            <P className="text-[12px]">حذف</P>
          </div>
          <div className="w-full h-6 flex items-center justify-start gap-1 cursor-pointer">
            <Icon name="editTag" />
            <P className="text-[12px]">ویرایش تگ</P>
          </div>
          <div
            onClick={() => setTagsColor(!tagsColor)}
            className="w-full h-6 flex items-center justify-start gap-1 cursor-pointer"
          >
            <Icon name="editTagsColor" />
            <P className="text-[12px]">ویرایش رنگ</P>
          </div>
        </div>
      )}
      <TagsColor tagsColor={tagsColor} setTagsColor={setTagsColor} />
    </>
  );
}

export default TagsDetail;
