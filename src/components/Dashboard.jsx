import { onValue, ref, remove, set, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { db } from "../firebase";
import TodoPlate from "./TodoPlate";

function Dashboard() {
  window.document.title = "Dashboard";
  const [inputData, setData] = useState();
  const [todos, setTodos] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState();

  // red
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) =>
          setTodos((oldArray) => [...oldArray, todo])
        );
      }
    });
  }, []);

  // creat
  function createTodo(e) {
    e.preventDefault();
    const uid = Math.floor(Math.random() * 1111111);
    if (inputData !== "") {
      set(ref(db, `/${uid}`), {
        todo: inputData,
        uid: uid,
      });
      setData("");
      return;
    } else {
      alert("Blank not allowed!");
      return;
    }
  }

  // update
  function updates(todo) {
    setIsEdit(true);
    setTempUuid(todo.uid);
    setData(todo.todo);
  }

  function handleUpdate(e) {
    e.preventDefault();
    update(ref(db, `/${tempUuid}`), {
      todo: inputData,
    });
    setData("");
    setIsEdit(false);
  }

  // delete
  function handleDelete(id) {
    return remove(ref(db, `/${id}`));
  }

  // style
  const style = {
    formDiv: `bg-slate-200 p-2 md:w-[500px] mx-auto rounded-md sticky top-0`,
    form: `w-full flex items-center`,
    formInput: `w-full mr-2 px-3 py-1 bg-transparent overflow-hidden text-ellipsis outline-none focus:outline-none focus:border-b-[1px] focus:border-gray-400 rounded-md transition-all`,
    formButton: `bg-green-300 hover:bg-green-400 p-3 rounded-md`,
    todoMain: `mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3`,
  };

  return (
    <div className="p-5">
      <div className={style.formDiv}>
        <form className={style.form}>
          <input
            type="text"
            placeholder="todos..."
            className={style.formInput}
            value={inputData}
            onChange={(e) => setData(e.target.value)}
          />

          {!isEdit ? (
            <button
              type="submit"
              onClick={createTodo}
              className={style.formButton}
            >
              <AiOutlinePlus className="text-lg select-none" />
            </button>
          ) : (
            <>
              <button type="button" onClick={handleUpdate}>
                update change
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEdit(false);
                  setData("");
                }}
              >
                <AiOutlineClose />
              </button>
            </>
          )}
        </form>
      </div>
      <div className={style.todoMain}>
        {todos?.length !== 0 ? (
          <>
            {todos?.map((todo) => (
              <TodoPlate
                key={todo.uid}
                todoText={todo.todo}
                edit={() => updates(todo)}
                todoDelete={() => handleDelete(todo.uid)}
              />
            ))}
          </>
        ) : (
          <small className="text-gray-400 text-lg font-semibold">
            Empty...
          </small>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
