import ModalHook from "@/core/hooks/ModalHook";
import {
  PriorityType,
  TasksModalType,
  TaskStatusType,
  TaskType,
} from "@/core/types/global";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import P from "../customP/P";
import { useTheme } from "@/core/provider/ThemeContext";
import Button from "../customButton/Button";
import { useState } from "react";
import Priorities from "./Priorities";
import TagsModal from "./TagsModal";
import { useAppDispatch, useAppSelector } from "@/core/hooks/ReduxHook";
import { addTask } from "@/core/redux/features/TaskSlice";
import { priorityFlags } from "@/core/constants/global";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ChooseDate from "./ChooseDate";
const taskTitleSchema = z.object({
  taskTitle: z.string().min(1, "عنوانی اضافه کنید"),
});
type taskTitleData = z.infer<typeof taskTitleSchema>;
function AddTaskModal({ newTaskModal, setNewTaskModal }: TasksModalType) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<taskTitleData>({
    resolver: zodResolver(taskTitleSchema),
    defaultValues: {
      taskTitle: "",
    },
  });
  const selectedProject = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const wholeProjects = useAppSelector((state) => state.projectSlice.items);
  const currentProject = wholeProjects.find((p) => p.id === selectedProject);
  const [openPriorities, setOpenPriorities] = useState<boolean>(false);
  const [openTag, setOpenTag] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDesc, setTaskDesc] = useState<string>("");
  const [openCal, setOpenCal] = useState<boolean>(false);
  const [priority, setPriority] = useState<PriorityType>("بدون اولویت");
  const [status, setStatus] = useState<TaskStatusType>("done");
  const findPriority = priorityFlags.find((p) => p.title === priority);
  const [tags, setTags] = useState<string>("");
  const dispatch = useAppDispatch();
  const { currentTheme } = useTheme();
  const addTaskHandler = () => {
    if (!selectedProject) return;
    const newTask: TaskType = {
      id: Date.now().toString(),
      title: taskTitle,
      status: status,
      projectId: selectedProject,
      description: taskDesc,
      priority: priority,
      tags: tags,
    };
    dispatch(addTask(newTask));
    setNewTaskModal(false);
  };
  return (
    <div>
      <ModalHook openModal={newTaskModal} setOpenModal={setNewTaskModal}>
        <form onSubmit={handleSubmit(addTaskHandler)}>
          <div className="w-290 h-160 bg-white rounded-lg flex flex-col items-center justify-center gap-9 p-5 relative">
            <div className="w-full h-9 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#D9D9D9] rounded-xs"></div>
                <Input
                  id="taskTitle"
                  {...register("taskTitle")}
                  className={`text-[24px] font-medium w-200 h-full rounded-lg p-1 outline-0 ${errors.taskTitle ? "border border-red-500" : " border border-[#D9D9D9]"}`}
                  placeholder="عنوان تسک"
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
              </div>
              {/* {errors.taskTitle && (
                  <P className="text-red-500 text-[10px] block w-full">
                    {errors.taskTitle.message}
                  </P>
                )} */}
              <div
                onClick={() => setNewTaskModal(false)}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <Icon name="closeTerms" />
              </div>
            </div>
            <div className="w-full h-10 flex items-center justify-start gap-3 font-medium">
              در
              <div className="border border-[#E9EBF0] w-40 h-8 rounded-md p-1 flex items-center">
                {currentProject ? currentProject.name : "بدون پروژه"}
              </div>
              برای
              <Icon name="member" />
            </div>
            <textarea
              id="taskDesc"
              name="taskDesc"
              placeholder="توضیحاتی برای این تسک بنویسید"
              className="w-full h-48 border border-[#E2E2E2] p-5 rounded-xl"
              onChange={(e) => setTaskDesc(e.target.value)}
            ></textarea>
            <div className="w-full h-8 flex items-center justify-start gap-4">
              <P className="font-medium">افزودن پیوست </P>
              <div
                style={{ borderBlockColor: currentTheme }}
                className="font-medium border w-28 h-full flex items-center justify-center gap-2"
              >
                <Icon name="link" />
                آپلود فایل
              </div>
            </div>
            <div className="w-full h-8 flex items-center justify-start gap-4">
              <P className="font-medium"> افزودن کاور </P>
              <div
                style={{ borderBlockColor: currentTheme }}
                className="font-medium border w-28 h-full flex items-center justify-center gap-2"
              >
                <Icon name="link" />
                آپلود فایل
              </div>
            </div>
            <div className="w-full h-13 flex items-center justify-between">
              <div className="w-50 h-full flex items-center justify-between">
                <div
                  onClick={() => setOpenPriorities(!openPriorities)}
                  className="cursor-pointer"
                >
                  <Icon
                    name={findPriority ? findPriority.finalFlag : "priority"}
                  />
                </div>
                <div
                  onClick={() => setOpenCal(!openCal)}
                  className="cursor-pointer"
                >
                  <Icon name="calendarTask" />
                </div>
                <div
                  onClick={() => setOpenTag(!openTag)}
                  className="cursor-pointer"
                >
                  <Icon name="tag" />
                </div>
              </div>
              <Button
                type="submit"
                className="w-32 h-8 cursor-pointer text-white text-[12px] rounded-sm"
              >
                ساختن تسک
              </Button>
            </div>
          </div>
        </form>
        <Priorities
          openPriorities={openPriorities}
          setOpenPriorities={setOpenPriorities}
          setPriority={setPriority}
        />
        <ChooseDate openCal={openCal} setOpenCal={setOpenCal} />
        <TagsModal openTag={openTag} setOpenTag={setOpenTag} />
      </ModalHook>
    </div>
  );
}

export default AddTaskModal;
