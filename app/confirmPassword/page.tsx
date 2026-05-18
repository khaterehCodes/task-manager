import IMG from "@/components/ui/customIMG/IMG";
import React from "react";
import ConfirmPasswordForm from "./components/confirmPasswordForm/ConfirmPasswordForm";

function ConfirmPassword() {
  return (
    <div className="w-full h-152 relative">
      <IMG src={"/assets/images/trapeze.png"} className="absolute bottom-0" />
      <ConfirmPasswordForm />
    </div>
  );
}

export default ConfirmPassword;
