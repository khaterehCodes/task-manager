import Button from "@/components/ui/customButton/Button";
import Input from "@/components/ui/customInput/Input";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import ModalHook from "@/core/hooks/ModalHook";
import { useAppDispatch, useAppSelector } from "@/core/hooks/ReduxHook";
import { useCalendar } from "@/core/provider/CalendarContext";
import { useTheme } from "@/core/provider/ThemeContext";
import { addProject } from "@/core/redux/features/ProjectSlice";
import { addTask } from "@/core/redux/features/TaskSlice";
import { CalendarNavType, TaskType } from "@/core/types/global";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import { useState } from "react";

function ModalCalendar({ modalCalandar, setModalCalendar }: CalendarNavType) {
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const { selectedDate, setSelectedDate } = useCalendar();
  const [projectName, setProjectName] = useState<string>("");
  const dispatch = useAppDispatch();
  const { currentTheme } = useTheme();
  const addTaskHandler = () => {
    if (!projectName.trim()) return;
    if (selectedProject) {
      const newTask: TaskType = {
        id: new Date().toString(),
        projectId: selectedProject?.toString(),
        title: projectName,
        status: "in-progress",
        priority: "فوری",
        startDate: selectedDate
          ? selectedDate.toString()
          : new Date().toString(),
      };
      dispatch(addTask(newTask));
    }
    setProjectName("");
    setModalCalendar(false);
  };
  return (
    <ModalHook openModal={modalCalandar}>
      <div className="w-116 h-38 bg-white p-5 flex flex-col rounded-lg justify-between">
        <div className="w-full h-10 flex items-center justify-start">
          <div
            onClick={() => setModalCalendar(false)}
            className="w-10 h-10 cursor-pointer flex items-center justify-center"
          >
            <Icon name="closeCalendar" />
          </div>
          <Input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            type="text"
            placeholder="نام تسک را وارد کنید"
            className="text-[20px] font-medium text-[#C8C8C8] outline-0"
          />
        </div>
        <div className="w-full h-13 flex items-center justify-between">
          <div className="w-35 h-full flex items-center justify-between">
            <Icon name="grayFlag" />
            {selectedDate && (
              <P
                style={{ color: currentTheme }}
                className="text-[20px] font-medium"
              >
                {format(selectedDate, "d  MMMM", { locale: faIR })}
              </P>
            )}
          </div>
          <Button
            onClick={addTaskHandler}
            className="w-32 h-8 rounded-lg cursor-pointer text-[12px] text-white"
          >
            ساختن تسک
          </Button>
        </div>
      </div>
    </ModalHook>
  );
}

export default ModalCalendar;
