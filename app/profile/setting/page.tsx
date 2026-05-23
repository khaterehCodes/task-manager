"use client";
import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { themes } from "@/core/constants/global";
import { useDark } from "@/core/provider/DarkModeProvider";
import { useTheme } from "@/core/provider/ThemeContext";
import { useState } from "react";

function Setting() {
  const { darkMode, buttonDarkMode } = useDark();
  const {selectedColor,setSelectedColor,currentTheme}=useTheme()
  const showAlert=()=>{
    alert('تم انتخابی شما با موفقیت ثبت شد')
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[88%] h-auto">
        <div className="w-100 h-105 flex flex-col gap-5">
          <P className="text-[32px] font-bold">تنظیمات</P>
          <div className="w-full h-15 flex flex-col">
            <P className="text-[14px]">انتخاب تم</P>
            <div className="w-fit flex items-center gap-3">
              {themes.map((c) => (
                <div
                  onClick={() => setSelectedColor(c.id)}
                  key={c.id}
                  className={`rounded-full flex items-center justify-center cursor-pointer ${selectedColor === c.id ? "w-8 h-8" : "w-5 h-5"}`}
                  style={{ backgroundColor: c.color }}
                >
                  {selectedColor === c.id && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={buttonDarkMode}
            className={`w-18 h-10 rounded-lg relative ${darkMode ? "bg-[#343A40]" : "bg-[#F1F3F5]"}`}
          >
            {darkMode ? (
              <div className="w-8 h-8 rounded-lg bg-[#868E96] cursor-pointer flex items-center justify-center absolute bottom-1 left-1">
                <Icon name="darkMode" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] cursor-pointer flex items-center justify-center absolute bottom-1 right-1">
                <Icon name="lightMode" />
              </div>
            )}
          </div>
          <Button
          onClick={showAlert}
          className="w-89 h-8 text-white font-extrabold text-[14px] rounded-md cursor-pointer" style={{backgroundColor:currentTheme}}>
            ثبت تغییرات
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
