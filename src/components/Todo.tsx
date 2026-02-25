import TodoItem from "./TodoItem";
import add_icon_white from "../assets/add_circle_white.png";
import { useRef, useState } from "react";

const Todo = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [todos, setTodos] = useState<string[]>([]);
    const [completed, setCompleted] = useState<boolean[]>([]);

const addTodo = () => {
    if (inputRef.current && inputRef.current.value != "") {
        const inputText = inputRef.current.value;
        setTodos([...todos, inputText]);
        setCompleted([...completed, false]);
        inputRef.current.value = "";
    }
}

const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    setCompleted(completed.filter((_, i) => i !== index));
}

const toggleComplete = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
}

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137.5 rounded-xl">
        <div className="flex my-2 gap-2 justify-center items-center">
            <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

        <div className="flex flex-row w-full my-4 bg-gray-200 rounded-full">
            <input ref={inputRef} className="w-[70%] bg-transparent border-0 outline-none h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add Task"/>
            <button onClick={addTodo} className="w-[30%] flex justify-center items-center border-none rounded-full bg-blue-600 outline-none h-14 cursor-pointer"><img src={add_icon_white} alt="" /></button>
        </div>

        <div>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo} index={index} onDelete={deleteTodo} isCompleted={completed[index] || false} onToggle={toggleComplete}/>
            ))}
        </div>
    </div>
    );
};

export default Todo;
