import React from "react";
import thankYouImage from "../assets/thank-you.svg"; // Bu rasmingiz uchun manzil, to'g'rilang

export default function ThankYouSection({ rating }) {
  return (
    <div className="text-center">
      <img src={thankYouImage} alt="Thank You" className="mx-auto mb-7 " />
      <p className="text-orange-500 text-lg mb-8">
        <span className="bg-[#272E38] rounded-full pt-2 pb-1 px-8">
          You selected {rating} out of 5
        </span>
      </p>
      <h2 className="text-3xl text-white font-medium mb-4">Thank you!</h2>
      <p className="text-gray-400">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
