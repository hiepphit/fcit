import BACKGROUND from "../assets/UI/bg_card.svg";
import SCORE_CARD from "../assets/UI/score_card.svg";
import PLAYER from "../assets/UI/player.png";
import ICON_FB from "../assets/icon/ic_fb.svg";
import ICON_LINKEDIN from "../assets/icon/ic_in.svg";
import ICON_WEB from "../assets/icon/ic_web.svg";
import "./style.css";

const CardPlayer = ({ player }) => {
  return (
    <div className="snap-start CardFootball w-[281px] relative">
      <div className="glass-shine-effect">
        <img className="w-fit h-[369px]" src={BACKGROUND} alt="bg_card" />
        <img
          className="Tqp5342RemovebgPreview w-[205px] h-[329px] left-[33px] bottom-0 absolute"
          src={player?.image || PLAYER}
          alt="imagePlayer"
        />
        <img
          className="Tqp5342RemovebgPreview w-full h-fit left-0 bottom-0 absolute"
          src={SCORE_CARD}
          alt="score_card"
        />
        <div className="Group26 w-[281px] h-[71.21px] left-0 top-[297.64px] absolute">
          <div className="Group25 w-[281px] h-[71.21px] left-0 top-0 absolute">
            <div className="Fw w-[34px] h-3 left-[239px] top-[42.36px] absolute text-center text-white text-xl font-bold font-['Proxima Nova']">
              {player?.detail || "FW"}
            </div>
            <div className="ONNgCThCh left-0 right-0 top-[20px] absolute text-center font-[800] text-neutral-50 text-[15px] font-['Montserrat']">
              {player?.name || "Player Name"}
            </div>
          </div>
          <div className=" left-[77px] top-[47.36px] absolute text-center text-white text-[19px] font-bold font-['Proxima Nova']">
            {player?.score?.atk || "99"}
          </div>
          <div className=" left-[128px] top-[47.36px] absolute text-center text-white text-[19px] font-bold font-['Proxima Nova']">
            {player?.score?.def || "99"}
          </div>
          <div className=" left-[180px] top-[47.36px] absolute text-center text-white text-[19px] font-bold font-['Proxima Nova']">
            {player?.score?.spd || "99"}
          </div>
        </div>
        <div className=" w-[37px] h-2.5 left-[25px] top-[30px] absolute text-center text-black text-opacity-50 text-2xl font-exbold font-['Neue Plak']">
          {player?.number || "01"}
        </div>
      </div>
      <div className="inline-flex gap-4 pt-[20px] ">
        <a
          target="_blank"
          rel="noreferrer"
          className=""
          href={player?.fb || "#"}
        >
          <img alt="" src={ICON_FB} />
        </a>
        <a target="_blank" rel="noreferrer" href={player?.linkedin || "#"}>
          <img alt="" src={ICON_LINKEDIN} />
        </a>
        <a target="_blank" rel="noreferrer" href={player?.web || "#"}>
          <img alt="" src={ICON_WEB} />
        </a>
      </div>
    </div>
  );
};

export default CardPlayer;
