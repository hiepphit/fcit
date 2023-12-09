import { useState } from "react";
import LOGO from "../assets/svg/logo_black.svg";
import MENU from "../assets/icon/menu-burger.svg";
import CANCEL from "../assets/icon/icon_cancel.png";

const Navbar = ({ sections }) => {
  const { aboutUsRef, memberRef, activityRef } = sections;
  const [showMenu, setShowMenu] = useState(false);
  const scrollToView = (ref) => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };
  return (
    <div className="sticky z-50 top-0 w-full bg-[#f8f3e9]">
      <div className="flex justify-between items-center md:pl-[3.6875rem] md:pr-[3.6875rem] p-3">
        <div className="flex flex-shrink-0 items-center gap-4 w-[8.875rem]">
          <img src={LOGO} alt="HSB Logo" />
          <div className="HsbFc w-[74px] h-6 text-zinc-950 text-[19px] font-exbold font-['Neue Plak']">
            HSB FC
          </div>
        </div>
        <div className="Frame5 h-[26px] justify-center items-center gap-[43px] flex max-sm:hidden">
          <div className="Frame9 justify-start items-center gap-2.5 flex">
            <div
              onClick={() => scrollToView(aboutUsRef)}
              className="AboutUs cursor-pointer text-zinc-950 text-lg font-normal font-['Neue Plak']"
            >
              ABOUT US
            </div>
          </div>

          <div
            onClick={() => scrollToView(memberRef)}
            className="Members cursor-pointer text-zinc-950 text-lg font-normal font-['Neue Plak']"
          >
            MEMBERS
          </div>
          <div className="Frame10 justify-start items-center gap-2.5 flex">
            <div
              onClick={() => scrollToView(activityRef)}
              className="Activity cursor-pointer text-zinc-950 text-lg font-normal font-['Neue Plak']"
            >
              ACTIVITY
            </div>
          </div>
        </div>
        <div className="max-sm:hidden cursor-pointer flex items-start gap-2.5 py-3 px-6 rounded bg-[#060d0d] Plak'] text-white font-bold font-['Neue Plak'] leading-[normal]">
          Join with us
        </div>
        <img
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden w-[40px] h-[40px]"
          src={!showMenu ? MENU : CANCEL}
          alt="icon menu"
        />
      </div>
      {showMenu && (
        <div>
          <div
            onClick={() => scrollToView(aboutUsRef)}
            className="AboutUs cursor-pointer text-zinc-950 text-lg font-normal font-['Neue Plak']"
          >
            ABOUT US
          </div>
          <div
            onClick={() => scrollToView(memberRef)}
            className="Members cursor-pointer text-zinc-950 text-lg font-normal font-['Neue Plak']"
          >
            MEMBERS
          </div>
          <div
            onClick={() => scrollToView(activityRef)}
            className="Activity cursor-pointer text-zinc-950 text-lg font-normal font-['Neue Plak']"
          >
            ACTIVITY
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
