import React, { useState } from "react";
import Swal from "sweetalert2";

export default function RatingBtns({ setIsSubmitted, setRating }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (button) => {
    setSelected(button);
  };

  const handleSubmitClick = () => {
    if (selected) {
      setRating(selected); // Tanlangan ratingni saqlaymiz
      setIsSubmitted(true); // Submit holatini true ga o'zgartiramiz
    } else {
      Swal.fire({
        icon: "warning",
        iconColor: "red",
        title: "No rating selected",
        text: "Please select a rating before submitting.",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF7610",
        background: "#1e252f", // Alert fon rangi
        color: "white", // Matn rangi
        customClass: {
          popup: "rounded-lg", // Popup qismiga o'zingiz xohlagan stil berish uchun
        },
      });
    }
  };

  return (
    <>
      <div className="flex gap-x-4 mx-auto mb-7 justify-center">
        {["1", "2", "3", "4", "5"].map((label) => (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={`text-center w-12 h-12 p-2 pb-1 font-semibold hover:bg-[#FF7610] hover:text-black text-md rounded-full ${
              selected === label
                ? "bg-white text-black"
                : "text-white bg-[#272E38]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmitClick}
          className={`w-full cursor-pointer text-black text-lg font-semibold pt-2 pb-1 rounded-full active:bg-white bg-[#FF7610] hover:bg-[#ff923e]`}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}
