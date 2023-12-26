import React from "react";

const Deals = () => {
  return (
    <section className="Deals flex flex-row flex-wrap w-full mt-10">
      <div className="flex flex-wrap h-[10vh] justify-start px-10">
        <h2 className="text-[#CA1E58] text-4xl">
          <strong>LATEST DEALS AND PROMOTIONS</strong>
        </h2>
      </div>
      <div className="flex flex-wrap h-[50vh] justify-start">
        <div className="mx-5 w-[30vw]">
          <a
            href="https://www.tropik.com.fj/wp-content/uploads/2021/01/TROPIK-PINE-FLOORING-copy.jpg"
            data-rel="prettyPhoto[rel-24-1912252761]"
          >
            <img
              width="966"
              height="716"
              src="https://www.tropik.com.fj/wp-content/uploads/2021/01/TROPIK-PINE-FLOORING-copy.jpg"
              alt=""
              srcSet="https://www.tropik.com.fj/wp-content/uploads/2021/01/TROPIK-PINE-FLOORING-copy.jpg 966w, https://www.tropik.com.fj/wp-content/uploads/2021/01/TROPIK-PINE-FLOORING-copy-300x222.jpg 300w, https://www.tropik.com.fj/wp-content/uploads/2021/01/TROPIK-PINE-FLOORING-copy-768x569.jpg 768w"
              sizes="(max-width: 966px) 100vw, 966px"
            />
          </a>
        </div>
        <div className="mx-5 w-[30vw]">
          <a
            href="https://www.tropik.com.fj/wp-content/uploads/2021/01/Decking-Advertisement-20-11-20-copy.jpg"
            data-rel="prettyPhoto[rel-24-1668090210]"
          >
            <img
              width="966"
              height="716"
              src="https://www.tropik.com.fj/wp-content/uploads/2021/01/Decking-Advertisement-20-11-20-copy.jpg"
              alt=""
              srcSet="https://www.tropik.com.fj/wp-content/uploads/2021/01/Decking-Advertisement-20-11-20-copy.jpg 966w, https://www.tropik.com.fj/wp-content/uploads/2021/01/Decking-Advertisement-20-11-20-copy-300x222.jpg 300w, https://www.tropik.com.fj/wp-content/uploads/2021/01/Decking-Advertisement-20-11-20-copy-768x569.jpg 768w"
              sizes="(max-width: 966px) 100vw, 966px"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap flex-row w-full">
        <div className="flex flex-wrap items-top justify-center w-full h-[10vh]">
          <a href="https://www.tropik.com.fj/latest-deals-and-promotions-2/">
            <button className="btn btn-secondary w-[35vw] h-10 text-white bg-[#E91E63] hover:bg-slate-700">
              Check Out More of Our Latest Deals and Promotions
            </button>
          </a>
        </div>
        <div className="flex flex-wrap items-end justify-center w-full h-[10vh] mb-2">
          <a href="https://www.tropik.com.fj/wp-content/uploads/2022/01/NEWSLETTER-1.pdf">
            <em>
              <span className="underline text-black hover:text-blue-700">
                <strong>FPG NEWSLETTER – VOLUME 1, ISSUE 1</strong>
              </span>
            </em>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Deals;
