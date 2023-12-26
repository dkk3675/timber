import React from "react";

const Product = () => {
    return (
      <section className="Product flex flex-col flex-wrap h-[70vh] p-5">
        <div className="flex flex-wrap w-[49vw] h-full p-5 justify-start items-center">
          <h2 className="text-[#CA1E58] text-4xl">
            <strong>OUR PRODUCTS</strong>
          </h2>
          <p className="text-black text-base">
            At Tropik Wood Industries Limited we have an eye for quality for now
            and the future. Our parent company grows quality pine, then they
            pass it over to us to mill in our world-class facility, it’s here we
            produce the best quality timber in the South Pacific. Our wood chips
            are also proudly exported as far as Japan and China. Our current
            range includes: Lining; Flooring; Shiplap; Weather Boards; Cladding;
            Ribbed & Plain Decking; Square Dressed; Post and Poles; and
            Woodchips. When it comes to quality timber, Tropik Wood Industries
            Limited has you covered.{" "}
            <a href="https://www.tropik.com.fj/products/">
              <strong>Check out our range here</strong>
            </a>
          </p>
        </div>
        <div className="flex flex-wrap w-[49vw] p-5">
          <img
            src="https://www.tropik.com.fj/wp-content/uploads/2019/08/ourproducts.jpg"
            width="500"
            height="400"
            alt="ourproducts"
            title="ourproducts"
          />
        </div>
      </section>
    );
};

export default Product;