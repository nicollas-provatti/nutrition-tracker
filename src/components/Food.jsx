import { useContext, useState } from "react";
import { FoodsContext } from "../context/foods-context";

import { foods } from "../data/foods";

import { LuTrash2, LuBeef, LuWheat, LuDroplet, LuPencil } from "react-icons/lu";

function Food({ food }) {
  const { removeFood, updateQuantity } = useContext(FoodsContext);

  const { id, name, quantity, protein, fat, carb } = food;

  const [isEditing, setIsEditing] = useState(false);
  const [newQuantity, setNewQuantity] = useState(food.quantity);

  function handleUpdateFood() {
    const baseFood = foods.find((f) => f.name === food.name);

    const fator = newQuantity / 100;

    const updatedFood = {
      ...food,
      quantity: newQuantity,
      kcal: baseFood.kcal * fator,
      protein: baseFood.protein * fator,
      fat: baseFood.fat * fator,
      carb: baseFood.carb * fator,
    };

    updateQuantity(id, updatedFood);
  }

  return (
    <div className="flex justify-between bg-gray-50 rounded p-2">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-sm">{name}</h3>

          {isEditing ? (
            <input
              type="number"
              defaultValue={newQuantity}
              onChange={(e) => setNewQuantity(Number(e.target.value))}
              onBlur={() => {
                handleUpdateFood();
                setIsEditing(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateFood();
                  setIsEditing(false);
                }
              }}
              className=" text-xs w-16 border border-gray-400 outline-0 rounded px-1"
              autoFocus
            />
          ) : (
            <span
              className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-blue-500"
              onClick={() => setIsEditing(true)}
            >
              ({quantity}g <LuPencil />){" "}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
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
        </div>
      </div>
      <button
        className="self-center p-1 cursor-pointer text-red-500 transition-colors hover:bg-red-50"
        onClick={() => removeFood(id)}
      >
        <LuTrash2 />
      </button>
    </div>
  );
}

export default Food;
