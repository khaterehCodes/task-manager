import Button from "../customButton/Button";
import Icon from "../icons/Icon";

function AddTaskButton() {
  return (
    <>
      <Button className="w-30 h-10 rounded-md text-white text-[14px] font-extrabold flex items-center justify-center gap-2 cursor-pointer">
        <Icon name="add" />
        تسک جدید
      </Button>
    </>
  );
}

export default AddTaskButton;
