"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import Store from "../redux/store/Store";
import ReduxHydrate from "./ReduxHydrate";

function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={Store}>
      <ReduxHydrate>{children}</ReduxHydrate>
    </Provider>
  );
}

export default StoreProvider;
