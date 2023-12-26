import React from "react";

const Sustainability = () => {
  return (
    <section className="Sustainability flex flex-row flex-wrap w-screen">
      <div className="flex flex-col flex-wrap h-[500px] my-10">
        <div className="flex flex-wrap w-3/5 p-5 h-full">
          <h1 className="text-3xl font-light text-[#CA1E58]">
            Upholding Global Standards
          </h1>
          <p className="text-xl">
            Tropik Wood Industries Limited is dedicated to Sustainable Forest
            Management. Our approach has a focus on conserving the natural
            habitats of plants and animals and respecting the rights of forestry
            workers and local communities.
            <br />
            <br /> Growing and harvesting timber sustainably provides valuable
            income and work opportunities whilst conserving the forest for
            future generations. For us and for those that come after us, there
            is an ongoing incentive to manage the forest responsibly, with equal
            emphasis on the social, environmental and economic aspects.
            <br />
            <br /> Tropik Wood Industries Limited is proudly FSC™ certified, a
            global certification standard that monitors, measures and evaluates
            the forestry industry to ensure that it is operating sustainably.
            Our FSC™ certification proves that we care about the origin of our
            products, and the impact on the world of making them. Please ask
            about our FSC™ certified products.
          </p>
        </div>
        <div className="flex flex-wrap w-2/5 h-full p-5 justify-center">
          <img
            width="300"
            height="300"
            src="https://www.tropik.com.fj/wp-content/uploads/2023/04/FSC_C117912_MIX_Wood_Portrait_WhiteOnGreen_tm_CRNB0c-192x300.png"
            alt=""
            srcSet="https://www.tropik.com.fj/wp-content/uploads/2023/04/FSC_C117912_MIX_Wood_Portrait_WhiteOnGreen_tm_CRNB0c-192x300.png 192w, https://www.tropik.com.fj/wp-content/uploads/2023/04/FSC_C117912_MIX_Wood_Portrait_WhiteOnGreen_tm_CRNB0c-657x1024.png 657w, https://www.tropik.com.fj/wp-content/uploads/2023/04/FSC_C117912_MIX_Wood_Portrait_WhiteOnGreen_tm_CRNB0c-768x1198.png 768w, https://www.tropik.com.fj/wp-content/uploads/2023/04/FSC_C117912_MIX_Wood_Portrait_WhiteOnGreen_tm_CRNB0c-985x1536.png 985w, https://www.tropik.com.fj/wp-content/uploads/2023/04/FSC_C117912_MIX_Wood_Portrait_WhiteOnGreen_tm_CRNB0c.png 1024w"
            sizes="(max-width: 192px) 100vw, 192px"
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap h-96 my-10">
        <div className="flex flex-wrap w-2/5 h-full p-5 justify-center">
          <img
            width="300"
            height="200"
            src="https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0030-1-300x200.jpg"
            alt=""
            srcSet="https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0030-1-300x200.jpg 300w, https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0030-1-768x512.jpg 768w, https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0030-1-1024x682.jpg 1024w"
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </div>
        <div className="flex flex-wrap w-3/5 p-5 h-full">
          <h1 className="text-3xl font-light text-[#CA1E58]">
            Sustainability Benefits All
          </h1>
          <p className="text-xl">
            Successfully achieving sustainable forest management will provide
            integrated benefits to all, ranging from safeguarding local
            livelihoods to protecting the biodiversity and ecosystems provided
            by forests, reducing rural poverty and mitigating some of the
            effects of climate change.
            <br />
            <br /> By working in partnership with our communities, land lease
            holders and our shareholders we can help ensure that our future is
            bright.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap h-[550px] my-10">
        <div className="flex flex-wrap w-3/5 p-5 h-full">
          <h1 className="text-3xl font-light text-[#CA1E58]">
            How We Promote Sustainability
          </h1>
          <div className="text-xl">
            Here are some of the things that we do to ensure the sustainable
            management of our forests:
            <br />
            <ul className="list-disc list-inside p-10">
              <li className="">
                Planting more than we harvest – we are increasing our stocked
                area in all our forest;
              </li>
              <li>
                Logging is performed in a sustainable manner with an increased
                age from 20 – 25yrs (we do not harvest anything younger than
                this age)
              </li>
              <li>
                Following the forestry harvesting code of practice for all of
                our logging operations
              </li>
              <li>Protecting our forests from Fires and illegal logging</li>
              <li>
                Protecting the soil cover and natural vegetation in our forests
              </li>
              <li>
                Maintaining great relationships with our stakeholders, with
                particular focus on our land owners to help ensure that they
                look after our forest well
              </li>
              <li>We do not disturb areas which are not under operations</li>
              <li>Planned logging is carried out</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap w-2/5 h-full items-center p-5 justify-center">
          <img
            width="300"
            height="200"
            src="https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0015-2-1-300x200.jpg"
            alt=""
            srcSet="https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0015-2-1-300x200.jpg 300w, https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0015-2-1-768x512.jpg 768w, https://www.tropik.com.fj/wp-content/uploads/2019/08/FIJI_PINE_IMAGES_LR-DJI_0015-2-1-1024x682.jpg 1024w"
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
