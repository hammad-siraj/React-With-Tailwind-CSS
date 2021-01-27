import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-800 h-screen w-screen justify-center   items-center">
      {children}
    </div>
  );
};

export default Container;
