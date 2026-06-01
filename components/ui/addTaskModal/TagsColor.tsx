import { tagsColorArray } from "@/core/constants/global";
import { TagsColorPropsType } from "@/core/types/global";
import React from "react";

function TagsColor({ tagsColor, setTagsColor }: TagsColorPropsType) {
  return (
    <>
      {tagsColor && (
        <div className="w-37 h-23 bg-white rounded-lg p-3 flex flex-wrap justify-start gap-1 absolute right-100">
          {tagsColorArray.map((tc) => (
            <React.Fragment key={tc.id}>
              <div
                className="w-5 h-5 rounded-lg"
                style={{ backgroundColor: tc.textColor }}
              ></div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
}

export default TagsColor;
