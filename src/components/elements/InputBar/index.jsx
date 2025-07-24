import React from "react";

const InputBar = ({children, name, type}) => {
  return (
    <>
    {name === "email" ? (
      
      <label htmlFor={name} className="relative block">
        <input
          type={type}
          id={name}
          placeholder=" "
          required
          autoComplete="off"
          className="peer border border-gray-500 w-full px-4 py-2 rounded 
           focus:outline-none focus:pt-4 transition-all duration-300
           [&:not(:placeholder-shown)]:pt-4"
        />
        <span
          className="absolute left-0 top-0 px-4 py-2 text-white transition-all duration-300 pointer-events-none
           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
           peer-focus:scale-75 peer-focus:-translate-y-[10px] peer-focus:-translate-x-3
           peer-[&:not(:placeholder-shown)]:scale-75 
           peer-[&:not(:placeholder-shown)]:-translate-y-[10px] 
           peer-[&:not(:placeholder-shown)]:-translate-x-3
           peer-[&:not(:placeholder-shown)]:text-gray-500"
        >
          {children || "Email"}
        </span>
      </label>
        ) : (
          
          <label htmlFor={name} className="relative block">
        <input
          type={type}
          id={name}
          placeholder=" " // ini penting untuk memicu peer-placeholder-shown
          required
          autoComplete="off"
          className="peer border border-gray-500 w-full px-4 py-2 rounded focus:outline-none focus:pt-4 transition-all duration-300 valid:pt-4 valid:border-gray-500"
        />
        <span
          className="absolute left-0 top-0 px-4 py-2 text-white transition-all duration-300 pointer-events-none peer-focus:text-gray-500 peer-valid:text-gray-500
    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
    peer-focus:scale-75 peer-focus:-translate-y-[10px] peer-focus:-translate-x-3
    peer-valid:scale-75 peer-valid:-translate-y-[10px] peer-valid:-translate-x-3"
        >
          {children}
        </span>
      </label>
      )}
    </>
  );
};

export default InputBar;
