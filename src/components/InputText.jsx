import React from "react";

function InputText({ type, placeholder, ...res }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...res}
      className="block border w-full px-5 py-2 rounded-md outline-none text-gray-700 transition-all focus:border-green-300"
    />
  );
}

export default InputText;
