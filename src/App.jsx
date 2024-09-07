import React, { useState } from "react";
import MainSection from "./components/MainSection";
import RatingBtns from "./components/RatingBtns";
import ThankYouSection from "./components/ThankYouSection";
import { VscDebugRestart } from "react-icons/vsc"; // Ikonani import qilamiz

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null); // Tanlangan ratingni saqlash uchun

  // Sahifani yangilaydigan funksiya
  const handleRefresh = () => {
    window.location.reload(); // Sahifani refresh qiladi
  };

  return (
    <>
      <button
        onClick={handleRefresh}
        className="fixed top-10 right-10 text-black bg-[#FF7610] active:bg-white p-2 rounded-full"
      >
        <VscDebugRestart size={28} />
      </button>

      <main className="bg-[#1e252f] min-w-[300px] sm:max-w-[430px] p-7 rounded-2xl mr-[20px] ml-[20px] response sm:mx-auto text-white">
        {isSubmitted ? (
          <ThankYouSection rating={rating} />
        ) : (
          <>
            <MainSection />
            <RatingBtns setIsSubmitted={setIsSubmitted} setRating={setRating} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
