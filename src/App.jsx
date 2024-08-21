import React, { useState } from "react";
import MainSection from "./components/MainSection";
import RatingBtns from "./components/RatingBtns";
import ThankYouSection from "./components/ThankYouSection";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null); // Tanlangan ratingni saqlash uchun

  return (
    <main className="bg-[#1e252f] min-w-[300px] sm:max-w-[430px] p-7 rounded-2xl mr-[20px] ml-[20px] response sm:mx-auto text-white">
      {isSubmitted ? (
        <ThankYouSection rating={rating} /> // Tanlangan ratingni uzatamiz
      ) : (
        <>
          <MainSection />
          <RatingBtns setIsSubmitted={setIsSubmitted} setRating={setRating} />
        </>
      )}
    </main>
  );
}

export default App;
