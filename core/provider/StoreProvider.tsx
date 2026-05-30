import { ReactNode } from "react";
import { Provider } from "react-redux";
import Store from "../redux/store/Store";

function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}

export default StoreProvider;