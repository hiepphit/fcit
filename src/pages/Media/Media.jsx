import { useEffect, useState, forwardRef } from "react";
import SLOGAN from "../../assets/UI/sloganMedia.png";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ReactPaginate from "react-paginate";
import { BounceLoader } from "react-spinners";

const VIDEO = "https://youtu.be/cGROP19Lk-g";
const URL =
  "https://script.google.com/macros/s/AKfycbzQe4TsBJ1wym0lOS2THtbuZp1of947232yEqVsMEqmZeBT8v51sqWco_ANGSDcb02U/exec?media=true&";
const Media = ({}, ref) => {
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`${URL}page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setTotalPage(data.totalPage);
        setPhotos(data.photos);
        setLoading(false);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, [page]);
  const handlePageClick = (event) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const newPage = event.selected + 1;
    setPage(newPage);
  };
  return (
    <div
      ref={ref}
      className="Frame427321025 bg-media bg-cover w-full p-10 max-sm:p-2 relative"
    >
      <div className="Frame427320943 w-full pt-1 flex-col justify-between items-center gap-[72px] mt-[72px] max-sm:mt-[20px] max-sm:gap-[10px] flex">
        <div className="Media text-center text-zinc-950 text-5xl font-exbold font-['Neue Plak']">
          MEDIA
        </div>
        {/* <div className="w-full flex-col justify-between items-center flex">
          <div className="w-full p-[142px] max-sm:p-10  bg-video bg-cover bg-center bg-no-repeat flex-col justify-between items-center gap-44 max-sm:gap-5 flex">
            <img
              className="w-fit self-center max-sm:w-full pt-[10px]"
              src={SLOGAN}
              alt="slogan of hsb"
            />
            <a href={VIDEO} target="_blank" rel="noreferrer">
              <div className="Button px-[32.50px] py-[16.50px] bg-white bg-opacity-20 rounded-sm border-2 border-neutral-50 justify-start items-start gap-2.5 inline-flex">
                <div className="LearnMore text-neutral-50 text-[19px] font-normal font-['Neue Plak']">
                  Watch video
                </div>
              </div>
            </a>
          </div>
        </div> */}
      </div>
      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <BounceLoader color="#36d7b7" />
        </div>
      ) : (
        <PhotoProvider>
          <div className="grid grid-rows-2 md:grid-rows-2 grid-cols-3 gap-[35px] max-sm:gap-[10px] max-sm:grid-cols-2 pt-[35px]">
            {photos &&
              photos.map((item, index) => (
                <PhotoView key={index} src={item}>
                  <div
                    className={
                      index === 0 ? "col-span-2 row-span-2" : "row-span-1"
                    }
                  >
                    <img className="h-full w-full" src={item} alt="" />
                  </div>
                </PhotoView>
              ))}
          </div>
        </PhotoProvider>
      )}
      <ReactPaginate
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={totalPage}
        previousLabel="PREVIOUS"
        pageClassName="text-[17px] text-center w-[25px] h-[25px] text-zinc-950 text-opacity-50 hover:rounded-[50%] hover:outline hover:outline-zinc-350"
        pageLinkClassName="page-link"
        disabledClassName="text-opacity-20"
        previousClassName="md:h-16 md:w-40 flex justify-center items-center rounded-sm border border-zinc-950 text-[15px]"
        nextClassName="md:h-16 md:w-40 flex justify-center items-center rounded-sm border border-zinc-950 text-[15px]"
        breakLabel="..."
        containerClassName="md:h-16 mt-[60px] rounded-sm border-2 border-zinc-950 justify-center items-center gap-[10px] inline-flex"
        activeClassName="rounded-[50%] text-opacity-100 w-[25px] h-[25px] border border-zinc-900 flex justify-center items-center"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
export default forwardRef(Media);
