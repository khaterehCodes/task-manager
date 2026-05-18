import P from "@/components/ui/customP/P";

function EmailConfirmMessage() {
  return (
    <div className="w-160 h-36 bg-white shadow-2xl/30 absolute right-110 top-35 rounded-[20px] p-6 flex flex-col items-center justify-center gap-5">
      <P className="text-[32px] font-extrabold">فراموشی رمز عبور</P>
      <P className="text-[14px]">
        لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
      </P>
    </div>
  );
}

export default EmailConfirmMessage;
