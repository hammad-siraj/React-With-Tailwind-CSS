import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      style={{ borderRadius: 8 }}
      className="
        bg-purple-700 
        w-72 
        h-12
        text-white 
        font-black 
        mt-2 
        hover:bg-purple-800 
        transition 
        duration-500
        outline-none
        border-none
        border-0"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
