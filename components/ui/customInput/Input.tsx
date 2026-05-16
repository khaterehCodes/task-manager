import { InputType } from "./InputType";

function Input({ ...props }: InputType) {
  return <input {...props} />;
}

export default Input;
