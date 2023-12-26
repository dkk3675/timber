import React from "react";

const Home = () => {
  return (
    <section className="Home w-full">
      <div className="relative w-full">
        <video playsInline autoPlay loop muted className="z-0 w-fit h-full">
          <source
            src="https://www.tropik.com.fj/wp-content/uploads/2019/09/website-intro.mp4"
            type="video/webm"
          />
        </video>
        <div className="absolute z-[1] top-1/4 px-12">
          <img
            width="359"
            height="113"
            src="https://www.tropik.com.fj/wp-content/uploads/2019/10/Growing-Quality-2-1.png"
            alt=""
            srcSet="https://www.tropik.com.fj/wp-content/uploads/2019/10/Growing-Quality-2-1.png 359w, https://www.tropik.com.fj/wp-content/uploads/2019/10/Growing-Quality-2-1-300x94.png 300w"
            sizes="(max-width: 359px) 100vw, 359px"
          />
          <p className="my-6">
            <strong>
              <span className="text-slate-950 text-2xl">
                YOUR ONLY GUARANTEE OF QUALITY
              </span>
            </strong>
          </p>
          <button className="btn btn-secondary my-6 w-40 h-14 text-white bg-[#E91E63] hover:bg-slate-700">WATCH VIDEO</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
