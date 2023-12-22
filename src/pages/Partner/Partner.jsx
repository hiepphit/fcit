import "./style.css";
import { useEffect, useState } from "react";

const URL =
  "https://script.google.com/macros/s/AKfycbzQe4TsBJ1wym0lOS2THtbuZp1of947232yEqVsMEqmZeBT8v51sqWco_ANGSDcb02U/exec?partner=true&";
const Partner = ({ actRef }) => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPartners(data?.partners);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);
  const scrollToView = (ref) => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="Frame427321054 w-full bg-partner bg-no-repeat bg-cover relative">
      <div className="Mqp58371 w-full h-full left-0 top-0 z-1 absolute bg-black bg-opacity-60" />
      <div className="w-full py-20 z-50 flex-col justify-start items-center gap-[34px] inline-flex">
        <div className="z-10 w-[80] h-[50px] text-center text-neutral-50 text-[50px] max-sm:text-[32px] font-black font-['Montserrat']">
          Nhà tài trợ
        </div>
        <div className="z-10 w-[80] h-[18px] text-center text-neutral-50 text-xl max-sm:text-[14px] font-['Montserrat']">
          FC Infinity Talk rất hân hạnh khi có sự đồng hành của các quý doanh
          nghiệp, công ty và các mạnh thường quân.
          <br />
          Chúng tôi xin chân thành cảm ơn
        </div>
        <div className="z-10 w-full overflow-hidden flex-col justify-center items-center gap-4 flex">
          <div className="Frame427321053 p-20 max-sm:p-2 justify-center items-center gap-4 max-sm:gap-1 inline-flex flex-wrap">
            {partners?.map((partner, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={partner.link}
                className="glass-shine-effect p-[5px] w-[120px] h-[60px] max-sm:w-[60px] max-sm:h-[30px] bg-white flex-col justify-center items-center inline-flex"
              >
                <img src={partner.img} alt={partner.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="btnScale z-50 px-[32.50px] py-[16.50px] bg-white bg-opacity-25 rounded-sm border-2 border-neutral-50 justify-start items-start gap-2.5 inline-flex">
          <div
            onClick={() => scrollToView(actRef)}
            className="LearnMore text-neutral-50 text-[19px] font-normal font-['Neue Plak']"
          >
            See our activities
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partner;
