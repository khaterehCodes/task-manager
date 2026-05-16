import { ButtonType } from "./ButtonType";

function Button({ children, ...props }: ButtonType) {
  return <button {...props}>{children}</button>;
}

export default Button;
