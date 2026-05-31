import { useState } from "react";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";
import AddTaskModal from "../addTaskModal/AddTaskModal";

function AddTaskButton() {
  const [newTaskModal,setNewTaskModal]=useState<boolean>(false)
  return (
    <>
      <Button 
      onClick={()=>setNewTaskModal(!newTaskModal)}
      className="w-30 h-10 rounded-md text-white text-[14px] font-extrabold flex items-center justify-center gap-2 cursor-pointer">
        <Icon name="add" />
        تسک جدید
      </Button>
      <AddTaskModal newTaskModal={newTaskModal} setNewTaskModal={setNewTaskModal}/>
    </>
  );
}

export default AddTaskButton;
