import { Ptype } from "./Ptype";

function P({ children, ...props }: Ptype) {
  return <p {...props}>{children}</p>;
}

export default P;
