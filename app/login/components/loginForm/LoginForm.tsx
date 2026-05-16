"use client";
import * as Yup from "yup";
import { LoginFormValues } from "../types/global";
import { Field, Form, Formik } from "formik";
import P from "@/components/ui/customP/P";
import Input from "@/components/ui/customInput/Input";
import Button from "@/components/ui/customButton/Button";

const loginSchema = Yup.object().shape({
  userName: Yup.string().required("وارد کردن نام کاربری الزامی است"),
  password: Yup.string().required("وارد کردن رمز عبور الزامی است"),
});

function LoginForm() {
  const initialValues: LoginFormValues = {
    userName: "",
    password: "",
  };
  const formHandler = () => {
    alert("test");
  };
  return (
    <div className="w-160 h-106 bg-white shadow-2xl/30 absolute right-110 rounded-[20px] p-6 flex flex-col items-center justify-center">
      <P className="text-[32px]">{"به تسک منیجر خوش برگشتی :)"}</P>
      <Formik
        onSubmit={formHandler}
        validationSchema={loginSchema}
        initialValues={initialValues}
      >
        <Form className="w-full h-85 flex flex-col items-center justify-center gap-3">
          <div className="w-150 h-18">
            <label htmlFor="userName" className="text-[14px]">
              نام کاربری
            </label>
            <Field
              as={Input}
              name="userName"
              type="text"
              className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
            />
          </div>
          <div className="w-150 h-18">
            <label htmlFor="userName" className="text-[14px]">
              رمز عبور
            </label>
            <Field
              as={Input}
              name="password"
              type="password"
              className="w-full h-10 border border-[#AAAAAA] rounded-md p-2 outline-0"
            />
          </div>
          <P className="text-[12px] cursor-pointer w-full h-8">
            رمز عبور خود را فراموش کرده‌اید؟
          </P>
          <Button className="w-full h-10 bg-[#208D8E] rounded-md text-white cursor-pointer text-[14px] font-extrabold">
            ورود
          </Button>
          <div className="w-42 h-6 flex items-center justify-center gap-2">
            <P className="font-medium">ثبت‌نام نکرده‌ای؟</P>
            <P className="text-[#208D8E] font-extrabold cursor-pointer">
              ثبت‌نام
            </P>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
