import { useTheme } from "@/core/provider/ThemeContext";
import { ButtonType } from "./ButtonType";

function Button({ children, className, ...props }: ButtonType) {
  const { currentTheme } = useTheme();
  return (
    <button
      {...props}
      className={className}
      style={{ backgroundColor: currentTheme }}
    >
      {children}
    </button>
  );
}

export default Button;
