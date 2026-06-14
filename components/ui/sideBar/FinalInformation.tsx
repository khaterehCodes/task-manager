import ModalHook from "@/core/hooks/ModalHook";
import Icon from "../icons/Icon";
import P from "../customP/P";
import { useWorkSpace } from "@/core/provider/WorkSpaceContext";
import Button from "../customButton/Button";
import { workSpaceColor } from "@/core/constants/global";
import { useAppDispatch } from "@/core/hooks/ReduxHook";
import { addWorkSpace } from "@/core/redux/features/WorkSpaceSlice";
import ProfileCard from "../profileCard/ProfileCard";

function FinalInformation() {
  const dispatch = useAppDispatch();
  const {
    workSpaceName,
    openInfo,
    setOpenInfo,
    setOpenWorkSpace,
    setWorkspaceColor,
    selectWorkSpaceColor,
  } = useWorkSpace();
  const createWorkSpace = () => {
    alert("ورک اسپیس شما با موفقیت ساخته شد");
    setOpenInfo(false);
    setWorkspaceColor(false);
    setOpenWorkSpace(false);
    dispatch(
      addWorkSpace({
        id: Date.now().toString(),
        color: selectWorkSpaceColor,
        name: workSpaceName,
      }),
    );
  };
  const colorButton = workSpaceColor.find(
    (c) => c.color === selectWorkSpaceColor,
  );
  console.log(colorButton);
  return (
    <div>
      <ModalHook openModal={openInfo}>
        <div className="w-125 h-92 bg-white  rounded-lg p-5 flex flex-col items-center justify-center gap-4">
          <div className="w-full h-10 flex items-center justify-between mb-3">
            <div
              onClick={() => setOpenInfo(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
            <P className="text-[24px] font-extrabold">مرور اطلاعات</P>
            <div
              onClick={() => setOpenInfo(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="backIcon" />
            </div>
          </div>
          <div className="w-104 h-42 rounded-lg border-[0.5px] border-[#AAAAAA] flex flex-col items-center justify-between p-5">
            <div className="w-full flex items-center justify-between">
              <P className="text-[14px] font-extrabold">نام ورک‌اسپیس</P>
              <P className="text-[14px] font-extrabold">{workSpaceName}</P>
            </div>
            <div className="w-full flex items-center justify-between">
              <P className="text-[14px] font-extrabold">رنگ ورک‌اسپیس</P>
              <div
                className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-lg"
                style={{ backgroundColor: colorButton?.color }}
              ></div>
            </div>
            <div className="w-full flex items-center justify-between">
              <P className="text-[14px] font-extrabold">اعضا</P>
              <ProfileCard />
            </div>
          </div>
          <Button
            onClick={createWorkSpace}
            className="w-104 h-10 rounded-md text-white cursor-pointer"
          >
            ساختن ورک‌اسپیس
          </Button>
        </div>
      </ModalHook>
    </div>
  );
}

export default FinalInformation;
