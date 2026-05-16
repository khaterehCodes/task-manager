import IMG from "@/components/ui/customIMG/IMG";
import React from "react";
import LoginForm from "./components/loginForm/LoginForm";

function Login() {
  return (
    <div className="w-full h-152 relative">
      <IMG src={"/assets/images/trapeze.png"} className="absolute bottom-0"/>
      <LoginForm/>
    </div>
  );
}

export default Login;
