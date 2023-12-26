import React from "react";

const About = () => {
  return (
    <section className="About flex flex-row flex-wrap w-full bg-stone-900">
      <div className="flex flex-col flex-wrap h-[40vh]">
        <div className="flex flex-wrap w-[33vw] justify-center items-center p-10">
          <div>
            <p>
              <a href="https://www.tropik.com.fj/tenders/">
                <strong>
                  <span className="text-xl text-[#8ac73e]">
                    <img
                      src="https://www.tropik.com.fj/wp-content/uploads/2019/09/tenders.png"
                      alt=""
                      width="130"
                      height="130"
                    />
                  </span>
                </strong>
              </a>
            </p>
            <p>
              <a href="https://www.tropik.com.fj/tenders/">
                <strong>
                  <span className="text-xl text-[#8ac73e]">TENDERS &gt;</span>
                </strong>
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-[33vw] justify-center items-center p-10">
          <div>
            <p>
              <a href="https://www.tropik.com.fj/tenders/">
                <strong>
                  <span className="text-xl text-[#8ac73e]">
                    <img
                      src="https://www.tropik.com.fj/wp-content/uploads/2019/03/products.png"
                      alt=""
                      width="130"
                      height="130"
                    />
                  </span>
                </strong>
              </a>
            </p>
            <p>
              <a href="https://www.tropik.com.fj/products/">
                <strong>
                  <span className="text-xl text-[#8ac73e]">PRODUCTS &gt;</span>
                </strong>
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-[33vw] justify-center items-center p-10">
          <div>
            <p>
              <a href="https://www.tropik.com.fj/tenders/">
                <strong>
                  <span className="text-xl text-[#8ac73e]">
                    <img
                      src="https://www.tropik.com.fj/wp-content/uploads/2019/03/careers.png"
                      alt=""
                      width="130"
                      height="130"
                    />
                  </span>
                </strong>
              </a>
            </p>
            <p>
              <a href="https://www.tropik.com.fj/careers/">
                <strong>
                  <span className="text-xl text-[#8ac73e]">CAREERS &gt;</span>
                </strong>
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="flex h-40 justify-center items-center px-60 py-10 text-2xl text-stone-400">
        <span className="h-30 text-center">
          <strong>Tropik Wood Industries Limited</strong> is the largest sawmiller and
          woodchipping facility in the Fiji Islands. We not only produce
          world-class timber and woodchip, but we are also the largest exporter
          of renewable bio-mass energy to the national grid.
        </span>
      </p>
    </section>
  );
};

export default About;
