import LOGO from "../assets/UI/logo.png";
import ICON_FB from "../assets/icon/icfb.svg";
import ICON_LINKEDIN from "../assets/icon/icin.svg";
import ICON_WEB from "../assets/icon/icweb.svg";

const LINK_FB = "https://www.facebook.com/infinity.talk.fc";
const LINK_YOUTUBE = "";
const LINK_INSTA = "";

const Footer = () => {
  return (
    <footer>
      <div className="Frame427321079 w-full px-10 py-[150px] max-sm:py-5 bg-orange-100 bg-opacity-60 backdrop-blur-sm justify-around inline-flex flex-wrap">
        <div className="w-50 justify-start items-start gap-8 inline-flex">
          <img src={LOGO} alt="LOGO" className="LOGO w-20" />
          <div className="Frame427321101 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[300px] leading-8 text-start text-zinc-950 text-[32px] font-exbold flex gap-1">
              FC INFINITY TALK
            </div>
            <div className="text-zinc-950 text-lg text-start font-light font-poppins">
              Football is the most important of the less important things in the
              world.
            </div>
          </div>
        </div>
        <div className="w-50 max-sm:w-full justify-start items-start gap-8 sm:inline-flex justify-between">
          <div className="flex-col flex justify-start items-start">
            <div className="AboutClub text-zinc-950 text-[32px] max-sm:text-[20px] font-semibold font-['Poppins']">
              About Club
            </div>
            <div className="pt-[20px] flex-col justify-start items-start sm:gap-3.5 flex">
              <div className="ClubRules max-sm:text-[16px] text-zinc-950 text-lg font-normal font-['Poppins']">
                Club Rules
              </div>
              <div className="BecomeAMembership max-sm:text-[16px] text-zinc-950 text-lg font-normal font-['Poppins']">
                Become a membership
              </div>
            </div>
          </div>
          <div className="flex-col flex justify-start items-start">
            <div className="SocialNetwork max-sm:text-[20px] text-zinc-950 text-[32px] font-semibold font-['Poppins']">
              Social network
            </div>
            <div className="inline-flex pt-[20px] gap-4">
              <a className="" href={LINK_FB}>
                <img alt="" src={ICON_FB} />
              </a>
              <a href="a">
                <img alt="" src={ICON_LINKEDIN} />
              </a>
              <a href="a">
                <img alt="" src={ICON_WEB} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          Producted by{" "}
          <a
            href="https://www.397solution.com"
            target="_blank"
            rel="noreferrer"
          >
            AquaFox Solution
          </a>{" "}
          <br /> 2024
        </div>
      </div>
    </footer>
  );
};
export default Footer;
