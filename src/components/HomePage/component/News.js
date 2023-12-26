import React from "react";
import Card from "../assets/Card";
import data from "../assets/newsData";

const News = () => {
  return (
    <section className="News flex flex-row flex-wrap w-full mt-10">
      <div className="flex flex-wrap h-[10vh] justify-start px-10">
        <h2 className="text-[#CA1E58] text-4xl">
          <strong>LATEST NEWS</strong>
        </h2>
      </div>
      <div className="flex flex-wrap h-[90vh] justify-start">
        {data.map((d, idx) => {
          return <Card key={idx} d={d} />;
        })}
      </div>
    </section>
  );
};

export default News;
