import { LuTrash2 , LuBeef, LuWheat, LuDroplet } from "react-icons/lu";

function Food({ food }) {
  const { name, quantity, protein, fat, carb, kcal } = food;
  return (
    <div className="flex justify-between bg-gray-50 rounded p-2">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-sm">{name}</h3>
          <span className="text-xs text-gray-500">({quantity}g) </span>
        </div>
        <div className="flex gap-1 items-center text-xs text-gray-500">
          <span className="flex gap-1 items-center ">
            <LuBeef />
            {protein.toFixed(1)}g
          </span>{" "}
          •
          <span className="flex gap-1 items-center">
            <LuDroplet />
            {fat.toFixed(1)}g
          </span>{" "}
          •
          <span className="flex gap-1 items-center">
            <LuWheat />
            {carb.toFixed(1)}g
          </span>{" "}
          | <span className="flex gap-1 items-center">{kcal} kcal</span>
        </div>
      </div>
      <button className="self-center p-1 cursor-pointer text-red-500 transition-colors hover:bg-red-50">
        <LuTrash2 />
      </button>
    </div>
  );
}

export default Food;
