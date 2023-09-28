import React from "react";
import ConsultButton from "./ConsultButton";
import Image from "next/image";
import VoucherButton from "./VoucherButton";

const Headlines = ({startHead,spanHead,endHead,content,showButton,headImg,width,height}) => {
  const buttonPlaceholder = "Contact Us";
  const buttonPlaceholderVoucher = "Download Voucher";
  return (
    <div className="mt-16">
      <div className="sm:flex mx-10">
        {/*WRAPPER*/}
        <div className="w-[500px] sm:w-[690px]">
          {/*HEADINGS*/}
          <h1 className="text-white text-6xl font-semibold mt-10">
            {startHead} <span className="text-yellow">{spanHead}</span>{endHead}          </h1>
          <p className="mt-12 text-justify text-white">
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
        <div className=" md:block hidden mt-0">
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
