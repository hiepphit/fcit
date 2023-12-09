import Image1 from "../../assets/UI/epic1.png";
import Image2 from "../../assets/UI/epic2.png";
import "./style.css";
import { forwardRef } from "react";

const AboutUs = ({}, ref) => {
  return (
    <div
      ref={ref}
      className="bgGreen w-full min-h-[100%] relative gap-[10px] flex-col flex   overflow-hidden"
    >
      <div className="max-sm:hidden absolute z-1 bottom-[-200px] flex w-full justify-between">
        <img
          alt="epic2"
          className="w-[592.36px] h-[520.75px] bottom-0 rotate-[0.60deg]"
          src={Image1}
        />
        <img
          alt="epic1"
          className="z-50 w-[333px] h-[333px] right-[0] "
          src={Image2}
        />
      </div>
      <div className="AboutUs text-amber-200 text-2xl max-sm:text-[20px] pt-[20px] font-bold font-['Neue Plak']">
        About Us
      </div>
      <div className="FootballWorkEarnEnjoyRepeat w-full h-[50px] text-center text-neutral-50 text-[32px] max-sm:text-[24px] px-[55px] font-exbold font-['Neue Plak']">
        Football - Work - Earn - Enjoy & Repeat
      </div>
      <div className="z-10 inline-flex lg:px-[200px] max-sm:px-[24px] pt-20 gap-20 items-center justify-around max-lg:flex-col mb-[200px]">
        <div className="justify-start items-start flex-col flex">
          <div className="Content flex-col justify-start items-start flex">
            <div className="w-50 flex-col justify-start items-start gap-[131px] flex">
              <div className="w-full md:h-[359px] text-white text-2xl font-normal justify-start items-start flex flex-col font-['Montserrat'] tracking-tight max-sm:text-[16px]">
                HSB FC là Sân chơi Bóng đá, Thể dục thể thao hàng tuần cho đội
                ngũ Lãnh đạo và Quản lý.{" "}
                <div className="pt-10 text-start">
                  - Có sức khỏe để kiếm tiền và tận hưởng cuộc sống.
                </div>
                <div className="text-start">
                  - Giao lưu mở rộng quan hệ trong công việc, cuộc sống.
                </div>
              </div>
            </div>
          </div>
          <div
            className="max-sm:hidden bg-gradient-to-tr from-[#6C5416] to-[#BBA262] text-white justify-start items-center gap-[15px] flex
          ButtonRegister px-6 py-3 rounded-sm gap-2.5 flextext-[19px] font-extrabold font-exbold"
          >
            ĐĂNG KÝ THAM GIA HSB
          </div>
        </div>

        <div className="ContentCal w-[501px] max-sm:w-full h-fit pt-7 pb-8 opacity-80 bg-zinc-950 flex-col justify-start items-center gap-[38px] inline-flex">
          <div className="w-full flex-col justify-start items-center gap-[33px] flex">
            <div className="LChSinhHoT text-center text-neutral-50 text-base font-normal font-['Neue Plak'] tracking-[7.28px]">
              LỊCH SINH HOẠT
            </div>
            <div className="Frame427321029 flex-col justify-start items-center gap-[5px] flex">
              <div className="Th3HNgTuN w-[601px] text-center text-orange-300 text-2xl font-bold font-['Montserrat']">
                THỨ 3 HÀNG TUẦN
              </div>
            </div>
            <div className="Time justify-center items-center gap-[7px] inline-flex max-sm:w-50">
              <div className="Frame427321008 flex-col justify-start items-center gap-2 inline-flex">
                <div className="T text-center text-white text-lg font-normal font-['Inter']">
                  Từ
                </div>
                <div className="h-[46px] text-center text-orange-300 text-5xl max-sm:text-[28px] font-bold font-['Inter']">
                  20:30
                </div>
              </div>
              <div className="Frame427321010 w-20 flex-col justify-start items-center gap-2 inline-flex">
                <div className=" w-[67px] h-[46px] text-center text-white text-5xl font-bold font-['Inter']">
                  -
                </div>
              </div>
              <div className="Frame427321011 flex-col justify-start items-center gap-2 inline-flex">
                <div className="N text-center text-white text-lg font-normal font-['Inter']">
                  Đến
                </div>
                <div className=" h-[46px] text-center text-orange-300 text-5xl max-sm:text-[28px] font-bold font-['Inter']">
                  22:00
                </div>
              </div>
            </div>
            <div className="SNS20IHCSPhMHNI w-full h-[26px] text-center text-neutral-50 text-xl max-sm:text-[16px] font-bold font-['Montserrat']">
              Sân số 2 Đại học Sư Phạm Hà Nội
            </div>
            <div
              className="sm:hidden bg-golden text-white justify-start items-center gap-[15px] flex
          ButtonRegister px-6 py-3 rounded-sm gap-2.5 flextext-[19px] font-extrabold font-exbold"
            >
              ĐĂNG KÝ THAM GIA HSB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default forwardRef(AboutUs);
