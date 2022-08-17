import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Button from "./Button";

function TodoPlate({ todoText, edit, todoDelete }) {
  return (
    <div className="shadow-lg p-3 rounded-md bg-slate-200 flex justify-between">
      <p className="">{todoText}</p>
      <div className="p-1 float-right">
        <Button
          type="button"
          onClick={edit}
          className="text-red-500 text-xl p-2 bg-slate-50 rounded-full "
          text={<AiOutlineEdit />}
        />
        <Button
          type="button"
          onClick={todoDelete}
          className="text-red-500 text-xl p-2 bg-slate-50 rounded-full mt-2 ml-2"
          text={<AiOutlineDelete />}
        />
      </div>
    </div>
  );
}

export default TodoPlate;
