import React from "react";
import star from "../assets/icon-star.svg"; // Bu rasmingiz uchun manzil, to'g'rilang

export default function MainSection() {
  return (
    <section>
      <div className="w-12 h-12 p-4 rounded-full mb-9 bg-[#272E38]">
        <img src={star} alt="star" />
      </div>
      <h2 className="sm:text-3xl text-2xl text-start font-medium mb-4">
        How did we do?
      </h2>
      <p className="text-start text-sm sm:text-base text-gray-400 mb-7">
        Please let us know how we did with your support <br /> request. All
        feedback is appreciated to help us <br /> improve our offering!
      </p>
    </section>
  );
}

// w-12 h-12 p-4     icon's 2-type of style
