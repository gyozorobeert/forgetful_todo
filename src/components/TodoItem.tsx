import white_tick from "../assets/check_circle_white.png"
import no_tick from "../assets/circle_white.png";
import delete_icon from "../assets/delete.png";

const TodoItem = ({text, index, onDelete, isCompleted, onToggle} : {text : string, index: number, onDelete: (index: number) => void, isCompleted: boolean, onToggle: (index: number) => void}) => {

const deleteTodo = () => {
    onDelete(index);
}

const handleToggle = () => {
    onToggle(index);
} 
    return (
       <div className="flex items-center my-3 gap-2 w-full">
            <div className="flex flex-row items-center w-[80%]">
                <div onClick={handleToggle} className={`${isCompleted ? 'bg-green-500' : 'bg-yellow-500'} cursor-pointer m-2 rounded-full p-2`}>
                    <img className="w-7" src={isCompleted ? white_tick : no_tick} alt="" /> 
                </div>
                <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
            </div>

            <div className="w-[20%] flex items-center justify-center bg-slate-300 rounded-full py-2 cursor-pointer">
                <img onClick={deleteTodo} className="w-7" src={delete_icon} alt="" />
            </div>
       </div>
    );
}

export default TodoItem;