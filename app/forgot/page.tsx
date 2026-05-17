import IMG from "@/components/ui/customIMG/IMG";
import ForgotPassword from "./forgotPassword/ForgotPassword";

function page() {
  return (
    <div className="w-full h-152 relative">
      <IMG src={"/assets/images/trapeze.png"} className="absolute bottom-0" />
      <ForgotPassword/>
    </div>
  );
}

export default page;
