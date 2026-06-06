"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  ProjectStateType,
  TaskStateType,
  WorkSpaceStateType,
} from "../types/global";
import { useAppDispatch } from "../hooks/ReduxHook";
import { setWorkSpace } from "../redux/features/WorkSpaceSlice";
import { setProjects } from "../redux/features/ProjectSlice";
import { setTasks } from "../redux/features/TaskSlice";

type ProviderProps = {
  children: ReactNode;
};

type SlicesType = {
  workSpace?: WorkSpaceStateType;
  projectSlice?: ProjectStateType;
  taskSlice?: TaskStateType;
};

export default function ReduxHydrate({ children }: ProviderProps) {
  const dispatch = useAppDispatch();
  const [hydrate, setHydrate] = useState<boolean>(false);
  useEffect(() => {
    try {
      const stored = localStorage.getItem("storeRedux");
      if (stored) {
        const parseItems = JSON.parse(stored) as SlicesType;
        if (parseItems.workSpace) {
          dispatch(setWorkSpace(parseItems.workSpace));
        }
        if (parseItems.projectSlice) {
          dispatch(setProjects(parseItems.projectSlice));
        }
        if (parseItems.taskSlice) {
          dispatch(setTasks(parseItems.taskSlice));
        }
      }
    } catch {
      console.error("redux hydrate error");
    }finally{
        setHydrate(true)
    }
  }, [dispatch]);
  if (!hydrate) {
    return null;
  }
  return <>{children}</>;
}
