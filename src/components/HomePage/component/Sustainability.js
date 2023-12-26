import React from "react";

const Sustainability = () => {
  return (
    <section className="Sustainability flex flex-col flex-wrap h-[75vh] p-5 text-black text-base">
      <div className="flex flex-row flex-wrap w-[49vw] h-full p-5">
        <div className="flex flex-wrap h-1/3 justify-start items-center mb-4">
          <h2 className="text-[#CA1E58] text-4xl">
            <strong>SUSTAINABILITY</strong>
          </h2>
          <p>
            Tropik Wood Industries Limited is dedicated to Sustainable Forest
            Management. Our approach has a focus on conserving the natural
            habitats of plants and animals and respecting the rights of forestry
            workers and local communities.
          </p>
        </div>
        <div className="flex flex-col flex-wrap h-1/3">
          <div className="flex flex-wrap h-full w-2/3">
            <p>
              Growing and harvesting timber sustainably provides valuable income
              and work opportunities whilst conserving the forest for future
              generations. For us and for those that come after us, there is an
              ongoing incentive to manage the forest responsibly, with equal
              emphasis on the social, environmental and economic aspects.
            </p>
          </div>
          <div className="flex flex-wrap h-full w-1/3">
            <img
              src="https://www.tropik.com.fj/wp-content/uploads/2019/08/TWIL_FSC-1.png"
              alt=""
              width="150"
              height="200"
            />
          </div>
        </div>
        <div className="flex flex-wrap h-1/3 justify-start items-center mt-4">
          <p>
            Tropik Wood Industries Limited is proudly FSC™ certified, a global
            certification standard that monitors, measures and evaluates the
            forestry industry to ensure…{" "}
            <span className="font-bold">
              <a href="https://www.tropik.com.fj/sustainability/">READ MORE</a>
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-[49vw] p-5">
        <img
          src="https://www.tropik.com.fj/wp-content/uploads/2019/08/sustainability.jpg"
          width="500"
          height="400"
          alt="ourproducts"
          title="ourproducts"
        />
      </div>
    </section>
  );
};

export default Sustainability;
