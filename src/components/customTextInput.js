import React from "react";

const InputLabel = React.forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="flex flex-col ">
      <label className="font-roboto font-semibold text-lg text-gray-600">
        {label}
      </label>
      <input
        className="rounded-lg mt-1 mb-2 h-12 w-80 px-3 bg-purple-300 outline-none text-white font-medium"
        {...rest}
        ref={ref}
      />
    </div>
  );
});

export default InputLabel;
