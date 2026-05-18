import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { termsList } from "@/core/constants/global";
import React from "react";

type TermsPropsType = {
  setShowTerms: (value: boolean) => void;
};

function Terms({ setShowTerms }: TermsPropsType) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#17191B99] backdrop-blur-sm transition-opacity flex items-center justify-center">
        <div className="w-200 h-128 bg-white rounded-[20px] p-5">
          <div className="w-full h-15 flex items-center justify-between">
            <P className="text-[32px] font-extrabold w-190 flex items-center justify-center">
              قوانین و مقررات
            </P>
            <Button
              onClick={() => setShowTerms(false)}
              className="w-10 h-10 cursor-pointer"
            >
              <Icon name="closeTerms" />
            </Button>
          </div>
          <div className="w-full h-94 flex flex-col items-start justify-center leading-8 text-[14px]">
            <P>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </P>
            <div className="w-[96%] h-70 mr-5 flex flex-col gap-1">
              {termsList.map((item) => (
                <React.Fragment key={item.id}>
                  <li>{item.list}</li>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
