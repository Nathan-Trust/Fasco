import { useState } from "react";
import RatingStars from "../shared/RatingStar";
import { sampleCardDetails, tabs } from "../../store/new-arrival";

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="screen-max-width px-2 py-16 flex flex-col items-center">
      <p className="text-[#484848] text-center text-4xl font-medium">
        New Arrivals
      </p>
      <p className="text-center w-[600px] text-sm mx-auto my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </p>

      {/* Tab mapping */}
      <div className="flex gap-2 mx-auto mt-5 w-fit">
        {tabs.map((tab) => (
          <div key={tab} className="flex flex-row gap-2">
            <button
              className={`py-2 px-4 rounded-md text-sm  ${
                activeTab === tab
                  ? "text-white bg-black"
                  : "text-gray-700 bg-[#FAFAFA] hover:bg-[#FAFAFA]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 mt-8  gap-8 w-full">
        {sampleCardDetails.map((detail) => {
          const { img, rating, title, content, review, amount, status } =
            detail;
          return (
            <div
              key={detail.title}
              className="bg-white col-span-4 shadow-lg p-4 rounded-lg"
            >
              <div
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "start",
                }}
                className="h-64 w-full border rounded-lg"
              ></div>

              <div className="w-full flex flex-col gap-5">
                <div className="flex justify-between">
                  <div>
                    <p>{title}</p>
                    <p>{content}</p>
                  </div>
                  <RatingStars rating={rating} />
                </div>
                <p>({review}k) Customer Reviews</p>
                <div className="flex items-center justify-between">
                  <p className="text-[#484848] text-lg font-medium">{amount}</p>
                  <p className="text-[#FF4646]">{status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="px-4 mt-10 w-fit py-2 bg-[#000000] text-white rounded hover:bg-[#000000]/50 transition">
        View More
      </button>
    </div>
  );
};

export default NewArrivals;
