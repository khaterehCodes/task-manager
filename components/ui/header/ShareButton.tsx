import ModalHook from "@/core/hooks/modalHook/ModalHook";
import { ShareButtonType } from "@/core/types/global";
import P from "../customP/P";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";
import Input from "../customInput/Input";
import { shareContacts } from "@/core/constants/global";
import React, { useState } from "react";
import IMG from "../customIMG/IMG";
import Permissions from "./Permissions";

function ShareButton({ openShare, setOpenShare }: ShareButtonType) {
  const [openPermission, setOpenPermissions] = useState<boolean>(false);
  const [showPermission, setShowPermission] = useState<string>("دسترسی کامل");
  const clickHandler = () => {
    setOpenShare(false);
    setOpenPermissions(!openPermission);
  };
  return (
    <>
      <ModalHook openModal={openShare}>
        <div className="w-118 h-83 bg-white rounded-xl p-10 flex items-center justify-center flex-col gap-5">
          <div className="w-108 h-8 flex items-center justify-between">
            <Button
              onClick={() => setOpenShare(false)}
              className="cursor-pointer w-5 h-5 flex items-center justify-center"
            >
              <Icon name="closeTerms" />
            </Button>
            <P className="text-[20px] font-extrabold w-[90%] flex items-center justify-center">
              به اشتراک‌گذاری پروژه‌
            </P>
          </div>
          <div className="w-108 h-55 flex flex-col items-center justify-center gap-3">
            <form>
              <Input
                placeholder="دعوت با ایمیل"
                className="w-85 h-10 bg-[#F0F1F3] rounded-r-lg p-2 outline-0"
              />
              <Button className="w-23 h-10 bg-[#208D8E] rounded-l-lg text-white text-[14px] cursor-pointer">
                ارسال
              </Button>
            </form>
            <div className="w-108 h-6 flex items-center justify-between">
              <div className="w-fit h-full flex items-center gap-2 cursor-pointer">
                <Icon name="link" />
                <P className="text-[14px]">لینک خصوصی</P>
              </div>
              <Button className="w-19 h-full border border-[#E9EBF0] text-[12px] cursor-pointer rounded-md">
                کپی لینک
              </Button>
            </div>
            <div className="w-108 h-28 flex flex-col gap-2">
              <P className="text-[14px] text-[#7D828C]">اشتراک‌گذاشته شده با</P>
              {shareContacts.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="w-full h-9 flex items-center justify-between">
                    <div className="w-fit h-full flex items-center justify-center gap-2">
                      {item.profile ? (
                        <IMG
                          src={item.profile}
                          className="w-9 h-9 rounded-full"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-pink-200 text-pink-600 flex items-center justify-center">
                          KH
                        </div>
                      )}
                      <P>{item.email}</P>
                      {item.owner ? (
                        <div className="w-27 h-6 bg-[#D0EBFF] rounded-md text-[12px] text-[#228BE6] flex items-center justify-center">
                          {item.owner}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {item.canOpen ? (
                      <Button
                        onClick={() => clickHandler()}
                        className="w-30 h-7 border border-[#E9EBF0] cursor-pointer flex items-center justify-center text-[12px] rounded-md"
                      >
                        {showPermission}
                        {openPermission ? (
                          <Icon name="upArrow" />
                        ) : (
                          <Icon name="downArrow" />
                        )}
                      </Button>
                    ) : (
                      <div className="w-22 h-7 border border-[#E9EBF0] cursor-pointer flex items-center justify-center text-[12px] rounded-md">
                        {item.access}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </ModalHook>
      <Permissions
        openPermission={openPermission}
        setOpenPermissions={setOpenPermissions}
        setShowPermission={setShowPermission}
      />
    </>
  );
}

export default ShareButton;
