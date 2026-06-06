"use client";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import NewProject from "@/components/ui/sideBar/NewProject";
import { useAppSelector } from "@/core/hooks/ReduxHook";
import ProtectedRoute from "@/core/provider/ProtectedRoute";
import React, { useState } from "react";

export default function Home() {
  const workSpaces = useAppSelector((state) => state.workSpace.items);
  const projects = useAppSelector((state) => state.projectSlice.items);
  const [projectName, setProjectName] = useState<string>("");
  const [newProject, setNewProject] = useState<boolean>(false);
  console.log(workSpaces);
  return (
    <ProtectedRoute role="admin">
      <div className="w-full h-auto flex items-center justify-center">
        <div className="w-[96%] h-auto flex flex-col justify-evenly mt-10">
          {workSpaces.map((w) => (
            <React.Fragment key={w.id}>
              <div className="w-full h-40 border-b border-[#F1F3F5] flex flex-col justify-center">
                <P className="text-[24px] font-extrabold">{w.name}</P>
                <div className="w-full h-25 flex items-center gap-4">
                  {projects
                    .filter((p) => p.workSpaceId === w.id)
                    ?.map((p) => (
                      <div
                        key={p.id}
                        className="w-50 h-20 rounded-lg flex items-center justify-center cursor-pointer shadow-lg/20"
                        style={{ backgroundColor: w.color }}
                      >
                        <P>{p.name}</P>
                      </div>
                    ))}
                  <div
                    onClick={() => setNewProject(!newProject)}
                    style={{ borderColor: w.color }}
                    className="w-50 h-20 rounded-lg border-4 flex items-center justify-center cursor-pointer gap-1"
                  >
                    <Icon name="add" style={{ color: w.color }} />
                    <P className="font-extrabold" style={{ color: w.color }}>
                      ساختن پروژه جدید
                    </P>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <NewProject
          newProject={newProject}
          setNewProject={setNewProject}
          projectName={projectName}
          setProjectName={setProjectName}
        />
      </div>
    </ProtectedRoute>
  );
}
