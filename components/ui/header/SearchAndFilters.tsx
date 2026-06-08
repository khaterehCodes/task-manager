import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Filters from "./Filters";

function SearchAndFilters() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-full flex items-center justify-between">
        <div className="w-fit h-full flex items-center gap-10">
          <SearchBar />
          <div className="w-60 h-full flex items-center justify-between">
            <div
              onClick={() => setOpenFilter(!openFilter)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Icon name="filter" />
              <P className="text-[12px]">فیلترها</P>
            </div>
            <div className="w-39 h-7 rounded-sm bg-[#D0EBFF] text-[12px] text-[#228BE6] flex items-center justify-center gap-1">
              <P>دسته‌بندی‌شده با :</P>
              <P>وضعیت</P>
            </div>
          </div>
        </div>
        <div className="w-50 h-7 border border-[#208D8E] flex items-center justify-center gap-2 cursor-pointer rounded-lg text-[12px]">
          <Icon name="restore" />
          بازگردانی تسک های آرشیو شده
        </div>
      </div>
      <Filters openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </>
  );
}

export default SearchAndFilters;
