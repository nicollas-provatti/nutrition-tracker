import { useContext, useRef, useState } from "react";

import { FoodsContext } from "../context/foods-context";
import Card from "./Card";
import MealType from "./MealType";
import { foods } from "../data/foods";
import { LuNotebookPen, LuPlus } from "react-icons/lu";

function NewFood() {
  const { addFood } = useContext(FoodsContext);

  const fd = useRef();
  const qtd = useRef();

  const [chosenMeal, setChosenMeal] = useState("breakfast");

  function handleChooseMeal(mealType) {
    setChosenMeal(mealType);
  }

  function pressEnter(event) {
    if (event.key === "Enter") {
      handleRegisterFood();
      qtd.current.blur();
    }
  }

  function handleRegisterFood() {
    const food = foods[fd.current.value];

    const quantity = qtd.current.value;
    const fator = quantity / 100;

    const newFood = {
      id: crypto.randomUUID(),
      mealType: chosenMeal,
      name: food.name,
      quantity,
      kcal: food.kcal * fator,
      protein: food.protein * fator,
      fat: food.fat * fator,
      carb: food.carb * fator,
    };

    fd.current.value = "Escolha um Alimento";
    qtd.current.value = "";

    addFood(newFood);
  }

  return (
    <Card
      icon={<LuNotebookPen color="#2b7fff" size={20} />}
      title="Registrar Alimentos"
    >
      <MealType meal={chosenMeal} onClick={handleChooseMeal} />

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <label className="block mb-2 font-semibold">
            Escolha um Alimento
          </label>
          <select
            ref={fd}
            defaultValue="Escolha um Alimento"
            className="select w-full"
            required
          >
            <option disabled={true}>Escolha um Alimento</option>
            {foods.map((food, index) => (
              <option key={food.name} value={index}>
                {food.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-2 font-semibold">
            Informe a Quantidade
          </label>
          <input
            ref={qtd}
            type="number"
            className="input w-full"
            required
            placeholder="Em gramas (ex.: 100)"
            title="Must be between be 1 to 10"
            onKeyDown={pressEnter}
          />
        </div>

        <button
          className="self-end px-2 py-2 rounded-full transition-colors bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          onClick={handleRegisterFood}
        >
          <LuPlus size={24} />
        </button>
      </div>
    </Card>
  );
}

export default NewFood;
