import ModalHook from "@/core/hooks/ModalHook";
import { DescPropsType } from "@/core/types/global";
import Icon from "../icons/Icon";
import P from "../customP/P";
import { useAuth } from "@/core/provider/AuthProvider";
import { useTheme } from "@/core/provider/ThemeContext";
import ShareButton from "../header/ShareButton";
import { useState } from "react";
import Input from "../customInput/Input";
import { faIR } from "date-fns-jalali/locale";
import { format } from "date-fns-jalali";
import ProfileCard from "../profileCard/ProfileCard";
import { priorityFlags } from "@/core/constants/global";

function TaskDesc({ openDesc, setOpenDesc, selectedTask }: DescPropsType) {
  const { user } = useAuth();
  const { currentTheme } = useTheme();
  const [openShare, setOpenShare] = useState<boolean>(false);
  const profileName =
    user?.firstName && user.lastName
      ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
      : ".";
  const taskPriority = priorityFlags.find(
    (p) => p.title === selectedTask?.priority,
  );
  return (
    <div>
      <ModalHook openModal={openDesc}>
        <div className="w-340 h-150 bg-white rounded-lg p-5 flex flex-col justify-between">
          <div className="w-full h-10 flex items-center justify-end">
            <div
              onClick={() => setOpenDesc(false)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <Icon name="closeTerms" />
            </div>
          </div>
          <div className="w-full h-128 flex items-center justify-between">
            <div className="w-175 h-full flex flex-col gap-6">
              <div className="w-full h-20 flex items-center justify-between p-2 border-b border-[#F4F4F4]">
                <div className="w-fit flex items-center gap-5">
                  <div className="bg-[#40C057] rounded-sm text-[#D3F9D8] font-medium w-24 h-8 flex items-center justify-center">
                    Done
                  </div>
                  <ProfileCard />
                  {taskPriority ? (
                    <Icon name={taskPriority.flag} />
                  ) : (
                    <Icon name="grayFlagL" />
                  )}
                </div>
                <div
                  onClick={() => setOpenShare(!openShare)}
                  className="font-medium flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Icon name="share" />
                  اشتراک گذاری
                </div>
              </div>
              <Icon name="tag" />
              <P className="text-[24px] font-extrabold">عنوان تسک</P>
              <div className="w-[96%] h-fit p-2 rounded-xl border border-[#C1C1C1] font-medium">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </div>
              <P style={{ color: currentTheme }} className="text-[12px]">
                اضافه کردن پیوست
              </P>
            </div>
            <div className="w-0.5 h-full bg-[#F4F4F4]"></div>
            <div className="w-165 h-full flex flex-col justify-between">
              <div className="w-full h-20 p-2 border-b border-[#F4F4F4] flex items-center justify-start gap-2">
                <div className="w-fit h-full flex flex-col justify-around p-2 border-l border-[#F4F4F4] gap-2">
                  <P className="text-[#BBBBBB] text-[12px]">ساخته‌شده در</P>
                  {selectedTask?.startDate
                    ? format(new Date(selectedTask.startDate), "d MMMM yyyy", {
                        locale: faIR,
                      })
                    : "بدون تاریخ"}
                </div>
                <div className="w-fit h-full flex flex-col justify-around p-2 gap-2">
                  <P className="text-[#BBBBBB] text-[12px]">ددلاین</P>
                  {selectedTask?.endDate
                    ? format(new Date(selectedTask.endDate), "d MMMM yyyy", {
                        locale: faIR,
                      })
                    : "بدون تاریخ"}
                </div>
              </div>
              <div className="w-full h-10 p-6 flex items-center justify-between">
                <Input
                  placeholder="کامنت شما"
                  className="text-[#AEAEAE] font-medium w-180 outline-0"
                />
                <Icon name="comment" />
              </div>
            </div>
          </div>
        </div>
      </ModalHook>
      <ShareButton openShare={openShare} setOpenShare={setOpenShare} />
    </div>
  );
}

export default TaskDesc;
