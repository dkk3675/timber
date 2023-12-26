import React from "react";

const Card = ({d}) => {
    return (
      <div className="Card flex flex-row flex-wrap w-[30vw] bg-gray-400 m-4">
        <div className="flex flex-wrap h-[30vh]">
          <a href={d.more} title={d.title}>
            <img src={d.img} alt={d.title} className="h-60" />
          </a>
        </div>
        <div className="flex flex-wrap h-[50vh] ml-3 justify-start items-center mt-0">
          <div className="flex flex-wrap overflow-hidden h-[40vh] w-[25vw]">
            <h2 className="text-[#CA1E58] text-lg">
              <strong>{d.title}</strong>
            </h2>
            <p className="text-black line-clamp-4">{d.data}</p>
            <a href={d.more}>
              <button className="btn btn-secondary mt-10 text-white bg-[#E91E63] hover:bg-slate-700">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Card;