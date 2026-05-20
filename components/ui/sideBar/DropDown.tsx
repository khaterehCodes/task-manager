import React, { useState } from "react";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import Button from "../customButton/Button";
import P from "../customP/P";
import { workSpaceItems } from "@/core/constants/global";
import NewWorkSpace from "./NewWorkSpace";
import NewProject from "./NewProject";

function DropDown() {
  const [openWorkSpace, setOpenWorkSpace] = useState<boolean>(false);
  const [showTodos, setShowTodos] = useState<number[]>([]);
  const [newProject, setNewProject] = useState<boolean>(false);
  const toggleTodos = (id: number) => {
    setShowTodos((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <>
      <div className="w-69 h-auto flex items-center justify-center flex-col mt-6 gap-5">
        <div className="w-full h-10 bg-[#F6F7F9] rounded-sm p-2 flex items-center gap-2">
          <Icon name="search" />
          <Input
            type="text"
            placeholder="جستجو کنید"
            className="text-[#AAAAAA] text-[12px] w-[80%] h-full outline-0"
          />
        </div>
        <Button
          onClick={() => setOpenWorkSpace(!openWorkSpace)}
          className="w-full h-8 bg-[#D3D3D3] rounded-md flex items-center justify-center gap-1 cursor-pointer"
        >
          <Icon name="add" />
          <P className="text-[12px]">ساختن ورک‌اسپیس جدید</P>
        </Button>
        <div className="w-full h-auto flex flex-col gap-1">
          {workSpaceItems.map((item) => (
            <React.Fragment key={item.id}>
              <div
                onClick={() => toggleTodos(item.id)}
                className="w-full h-10 flex items-center justify-start gap-2"
              >
                <div
                  className="w-5 h-5 rounded-sm"
                  style={{ backgroundColor: item.color }}
                ></div>
                <P className="font-medium cursor-pointer">{item.title}</P>
              </div>
              {showTodos.includes(item.id) && (
                <>
                  {item.projects ? (
                    <div className="w-[80%] h-auto flex flex-col gap-3">
                      {item.projects?.map((pro) => (
                        <React.Fragment key={pro.id}>
                          <div className="w-62 h-8 mr-6 flex items-center">
                            <P className="font-medium">{pro.title}</P>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  ) : (
                    <Button
                      onClick={() => setNewProject(!newProject)}
                      className="w-full h-9 border-2 border-[#208D8E] rounded-md text-[#208D8E] cursor-pointer text-[14px]"
                    >
                      ساختن پروژه جدید
                    </Button>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <NewWorkSpace
        openWorkSpace={openWorkSpace}
        setOpenWorkSpace={setOpenWorkSpace}
      />
      <NewProject newProject={newProject} setNewProject={setNewProject} />
    </>
  );
}

export default DropDown;
