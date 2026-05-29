import ModalHook from "@/core/hooks/ModalHook";
import { NewProjectType } from "@/core/types/global";
import P from "../customP/P";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";

function NewProject({ newProject, setNewProject }: NewProjectType) {
  return (
    <>
      <ModalHook openModal={newProject}>
        <div className="w-125 h-67 rounded-lg p-5 bg-white flex flex-col items-center justify-evenly">
          <div className="w-113 h-8 flex items-center">
            <Button
              onClick={() => setNewProject(false)}
              className="w-7 h-7 cursor-pointer flex items-center justify-center"
            >
              <Icon name="closeTerms" />
            </Button>
            <P className="text-[24px] font-extrabold w-[90%] flex items-center justify-center">
              ساختن پروژه جدید‌
            </P>
          </div>
          <form className="w-104 h-auto flex items-start justify-center flex-col gap-10">
            <div>
              <label htmlFor="project" className="text-[14px]">
                نام پروژه
              </label>
              <Input
                name="project"
                className="w-104 h-10 p-2 rounded-md border border-[#AAAAAA] outline-0"
              />
            </div>
            <Button className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold">
              ادامه
            </Button>
          </form>
        </div>
      </ModalHook>
    </>
  );
}

export default NewProject;
