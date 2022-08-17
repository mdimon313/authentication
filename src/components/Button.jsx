import React from "react";

export default function Button({ type, text, ...res }) {
  return (
    <button type={type} {...res}>
      {text}
    </button>
  );
}
