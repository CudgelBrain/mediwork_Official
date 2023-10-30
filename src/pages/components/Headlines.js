import React from "react";
import ConsultButton from "./ConsultButton";
import Image from "next/image";
import VoucherButton from "./VoucherButton";

const Headlines = ({startHead,spanHead,endHead,content,showButton,headImg,width,height}) => {
  const buttonPlaceholder = "Contact Us";
  const buttonPlaceholderVoucher = "Download Voucher";
  return (
    <div className="lg:mt-16 md:mb-8">
       <div className="block md:hidden mt-0">
          {/*IMAGE GROUP*/}
          <Image
          className="w-full h-auto" 
            src={headImg}
            alt="GroupImage"
            width={width}
            height={height}
          />
        </div>
      <div className="sm:flex mx-10 pb-16 md:pb-0">
        {/*WRAPPER*/}
        <div className="md:w-[500px]">
          {/*HEADINGS*/}
          <h1 className="text-white text-6xl font-semibold mt-10 leading-tight">
            {startHead} <span className="text-yellow">{spanHead}</span>{endHead}</h1>
          <p className="mt-12 text-gray-400">
            {content}
          </p>
          <div className="flex">
            {" "}
            <ConsultButton buttonPlaceholder={buttonPlaceholder} />
            {showButton && (
              <VoucherButton
                buttonPlaceholderVoucher={buttonPlaceholderVoucher}
              />
            )}
          </div>
        </div>
        <div className="md:block hidden mt-0">
          {/*IMAGE GROUP*/}
          <Image
            src={headImg}
            alt="GroupImage"
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
};

export default Headlines;
