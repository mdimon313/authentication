import React from "react";

function Lable({ title }) {
  return (
    <label
      htmlFor={title}
      className="mb-2 text-gray-500 capitalize inline-block"
    >
      {title}
    </label>
  );
}

export default Lable;
