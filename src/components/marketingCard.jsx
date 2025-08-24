import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import Marketing from "../assets/images/marketing.svg"
import Sales from "../assets/images/sales.svg"
import Media from "../assets/images/media.svg"
import Mobile from "../assets/images/mobile-scrolling.svg"
const MarketingCard = ({ title, description, image, bgColor }) => {
  return (
    <div
      className={`lg:mt-20 md:mt-7 mark sm:mt-10 w-[350px] lg:h-[460px] md:h-[450px] h-[380px] sm:h-[400px] xl:h-[483px] 
        flex justify-center items-center rounded-[20px] px-10 ${bgColor}`}
    >
      <div>
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            className="xl:w-[200px] lg:w-[170px] md:w-[160px] sm:w-[150px] w-[140px]"
            src={image}
            alt={title}
          />
        </div>

        {/* Text */}
        <div className="mt-7">
          <p className="m-0 text-center lg:text-[24px] md:text-[22px] pb-3 font-semibold text-[20px] text-white">
            {title}
          </p>
          <p className="m-0 text-center text-[#fff] opacity-[80%] lg:text-[17px] md:text-[16px] text-[15px]">
            {description}
          </p>
        </div>

        {/* Link */}
        <Link className="flex justify-center items-center mt-10 gap-3" to="#">
          <p className="m-0 text-white">Learn More</p>
          <ArrowBack className="rotate-180 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default function MarketingSection() {
  const cards = [
    {
      title: "Digital Marketing",
      description:
        "Reach the right audience with data-driven campaigns that maximize ROI and brand visibility.",
      image: Marketing,
      bgColor: "bg-green-600",
    },
    {
      title: "SM Management",
      description:
        "Grow your community, increase engagement, and turn followers into loyal customers.",
      image: Sales,
      bgColor: "bg-red-600",
    },
    {
      title: "Content Creation",
      description:
        "Compelling visuals, blogs, and videos that tell your story and drive conversions.",
      image: Media,
      bgColor: "bg-blue-600",
    },
    {
      title: "SEO & Analytics",
      description:
        "Rank higher on search engines and gain insights into what drives traffic and sales.",
      image: Mobile,
      bgColor: "bg-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-1 justify-center">
      {cards.map((card, index) => (
        <div className="flex justify-center">  
          <MarketingCard key={index} {...card} />
        </div>
      ))}
    </div>
  );
}
