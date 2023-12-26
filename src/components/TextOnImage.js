import React from "react";

const TestOnImage = () => {
  return (
    <section className="TextOnImage w-screen h-96 relative">
      <img
        src="https://www.tropik.com.fj/wp-content/uploads/2019/09/FIJI_PINE_IMAGES_LR-_DSF9379-2.jpg"
        alt=""
        className="w-full h-full"
      />
      <h1 className="absolute left-5 top-1/2 text-3xl text-white font-bold">Sustainability</h1>
    </section>
  );
};

export default TestOnImage;
