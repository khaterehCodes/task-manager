import ModalHook from "@/core/hooks/ModalHook";
import { FilterPropsType } from "@/core/types/global";
import P from "../customP/P";
import Icon from "../icons/Icon";

function Filters({ openFilter, setOpenFilter }: FilterPropsType) {
  return (
    <div>
      <ModalHook openModal={openFilter}>
        <div className="w-175 h-45 bg-white rounded-lg p-5 flex flex-col justify-around">
          <div className="w-full h-10 flex items-center justify-between">
            <P className="text-[24px] font-extrabold">فیلترها</P>
            <div
              onClick={() => setOpenFilter(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
          </div>
          <div className="w-full h-20 flex items-center justify-between text-[14px]">
            تسک‌هایی که
            <label htmlFor="filters" className="sr-only">
              انتخاب نوع فیلتر
            </label>
            <select
              id="filters"
              name="filters"
              className="w-47 h-10 rounded-lg border border-[#E9EBF0] outline-0 p-2"
            >
              <option value="">تگ ها</option>
              <option value="">اولویت</option>
              <option value="">وضعیت</option>
            </select>
            آن ها
            <label htmlFor="tags" className="sr-only">
              انتخاب نوع
            </label>
            <select
              name="tags"
              id="tags"
              className="w-47 h-10 rounded-lg border border-[#E9EBF0] outline-0 p-2"
            >
              <option value="work">کار</option>
              <option value="uni">درس</option>
              <option value="project">پروژه</option>
            </select>
            <label htmlFor="isOrNot" className="sr-only">
              انتخاب نوع
            </label>
            <select
              name="isOrNot"
              id="isOrNot"
              className="w-40 h-10 rounded-lg border border-[#E9EBF0] outline-0 p-2"
            >
              <option value="is">است</option>
              <option value="not">نیست</option>
            </select>
          </div>
        </div>
      </ModalHook>
    </div>
  );
}

export default Filters;
