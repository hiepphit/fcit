import LOGO from "../assets/svg/logo.svg";

const SlideBreak = ({ titles }) => (
  <div className="Banner w-full h-[72px] py-[7px] bg-golden inline-flex overflow-hidden gap-8">
    <div className="List w-max justify-start items-start gap-8 inline-flex animate-my-animate">
      {titles &&
        titles.map((title, index) => (
          <div
            key={index}
            className="Item1 w-max justify-start items-center gap-8 flex"
          >
            <img
              alt="LOGO"
              className="F46b0bb78cdb0be429033a1a62038711 w-[58px] h-[58px]"
              src={LOGO}
            />
            <div className="HanoiStartUpBrothersFc text-center text-stone-100 text-[19px] font-exbold leading-7">
              {title}
            </div>
          </div>
        ))}
    </div>
    <div className="List w-max justify-start items-start gap-8 inline-flex animate-my-animate">
      {titles &&
        titles.map((title, index) => (
          <div
            key={index}
            className="Item1 w-max justify-start items-center gap-8 flex"
          >
            <img
              alt="LOGO"
              className="F46b0bb78cdb0be429033a1a62038711 w-[58px] h-[58px]"
              src={LOGO}
            />
            <div className="HanoiStartUpBrothersFc text-center text-stone-100 text-[19px] font-exbold leading-7">
              {title}
            </div>
          </div>
        ))}
    </div>
  </div>
);
export default SlideBreak;
