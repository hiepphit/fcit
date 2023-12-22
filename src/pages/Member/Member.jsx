import { useEffect, useState, useRef, forwardRef } from "react";

import CardPlayer from "../../components/CardPlayer";
import HSB from "../../assets/UI/hsb.png";
import MEMBER from "../../assets/UI/member.png";
import Image3 from "../../assets/UI/epic3.png";
import Image4 from "../../assets/UI/epic4.png";
import ICON_LEFT from "../../assets/icon/ic_left_arrow.svg";
import "./style.css";

const players = [
  {
    name: "Pham Hoang Hiep",
    position: "GK",
    number: "01",
    score: { atk: 99, def: 99, spd: 99 },
    fb: "",
    linkedin: "",
    web: "",
    image: "https://i.ibb.co/rp1MRJ7/BLUE5156-1-removebg-preview.png",
  },
];
const URL =
  "https://script.google.com/macros/s/AKfycbzQe4TsBJ1wym0lOS2THtbuZp1of947232yEqVsMEqmZeBT8v51sqWco_ANGSDcb02U/exec";
const Member = ({}, ref) => {
  const [members, setMembers] = useState({ ST: players });
  // Function to classify players by position
  const classifyPlayersByPosition = (players) => {
    return players.reduce((classified, player) => {
      const position = player.position;

      if (!classified[position]) {
        classified[position] = [];
      }

      classified[position].push(player);
      return classified;
    }, {});
  };
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // Classify players by position
        const classifiedPlayers = classifyPlayersByPosition(data);

        console.log(classifiedPlayers);
        setMembers(classifiedPlayers);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);
  const contentRefs = useRef([]);

  const [scrollLeft, setScrollLeft] = useState(0);
  const handleScroll = (direction, index = 0) => {
    const scrollAmount = 300; // Adjust this value as needed
    const container = contentRefs.current[index];

    if (container) {
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setScrollLeft(newScrollLeft);
    }
  };

  return (
    <div
      ref={ref}
      className="overflow-hidden bg-hero-pattern h-fit bg-no-repeat bg-cover flex-col flex md:p-20 max-sm:p-[13px] relative"
    >
      <img
        className="w-fit self-center max-sm:w-80 pt-[10px]"
        src={MEMBER}
        alt="member of hsb"
      />
      <div className="z-10 flex flex-col pt-20 justify-start items-start gap-20 mb-[300px]">
        {members &&
          Object.entries(members).map(([position, grMem], ind) => (
            <div
              key={ind}
              className="flex flex-col justify-start items-start gap-5 max-w-full"
            >
              <div className="inline-flex justify-between w-full">
                <div className="font-exbold text-neutral-50 text-[26px] ">
                  {position}
                </div>
                {grMem.length > 5 && (
                  <div className="inline-flex gap-2">
                    <button
                      className="btnScroll"
                      onClick={() => handleScroll("left", ind)}
                    >
                      <img alt="" src={ICON_LEFT} />
                    </button>
                    <button
                      className="btnScroll -rotate-180"
                      onClick={() => handleScroll("right", ind)}
                    >
                      <img alt="" src={ICON_LEFT} />
                    </button>
                  </div>
                )}
              </div>

              <div
                ref={(ref) => (contentRefs.current[ind] = ref)}
                className="w-full overflow-x-scroll overflow-y-hidden snap-x"
              >
                <div className="inline-flex gap-6 snap-x">
                  {grMem &&
                    grMem.map((player, index) => (
                      <CardPlayer key={index} player={player} />
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <img
        alt="epic2"
        className="z-0 w-fit h-200 absolute right-0 bottom-[0px] rotate-[0.60deg]"
        src={Image4}
      />
      <img
        alt="epic1"
        className="w-fit h-fit left-0 bottom-0 absolute"
        src={Image3}
      />
    </div>
  );
};
export default forwardRef(Member);
