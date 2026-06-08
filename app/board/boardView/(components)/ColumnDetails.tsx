import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ModalHook from "@/core/hooks/ModalHook";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import { archiveTask } from "@/core/redux/features/TaskSlice";
import { DetailPropsType } from "@/core/types/global";

function ColumnDetails({
  showDetail,
  setShowDetail,
  columnStatus,
}: DetailPropsType) {
  const dispatch = useAppDispatch();
  const archiveHandler = () => {
    dispatch(archiveTask("todo"));
    setShowDetail(false);
  };
  return (
    <>
      <ModalHook openModal={showDetail} setOpenModal={setShowDetail}>
        <div className="w-42 h-40 bg-white rounded-lg p-2 flex flex-col justify-around">
          <div className="w-full h-8 flex items-center gap-2 cursor-pointer">
            <Icon name="edit" />
            <P className="text-[14px]">ویرایش نام ستون</P>
          </div>
          <div className="w-full h-8 flex items-center gap-2 cursor-pointer">
            <Icon name="add" />
            <P className="text-[14px]">افزودن تسک</P>
          </div>
          <div 
          onClick={archiveHandler}
          className="w-full h-8 flex items-center gap-2 cursor-pointer">
            <Icon name="archive" />
            <P className="text-[14px]">آرشیو تمام تسک‌ها</P>
          </div>
          <div className="w-full h-8 flex items-center gap-2 cursor-pointer">
            <Icon name="delete" />
            <P className="text-[14px]">حذف ستون</P>
          </div>
        </div>
      </ModalHook>
    </>
  );
}

export default ColumnDetails;
