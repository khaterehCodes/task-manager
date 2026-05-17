'use client'
import IMG from "@/components/ui/customIMG/IMG";
import SignupForm from "./components/signupForm/SignupForm";

function Signup() {
  return (
    <div className="w-full h-152 relative">
      <IMG src={"/assets/images/trapeze.png"} className="absolute bottom-0" />
      <SignupForm />
    </div>
  );
}

export default Signup;
