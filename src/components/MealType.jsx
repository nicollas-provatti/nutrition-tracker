import { useState } from "react";

function Button({ text, mealType, onClick }) {
  let classes =
    "px-3 py-2 rounded-lg transition-colors bg-gray-100 text-xs text-gray-700 cursor-pointer hover:bg-gray-200";

  if (mealType === text) {
    classes = "px-3 py-2 rounded-lg transition-colors bg-blue-500 text-xs text-white hover:bg-blue-600";
  }
  return (
    <button className={classes} onClick={() => onClick(text)}>
      {text}
    </button>
  );
}

function MealType() {
  const [chosenMeal, setChosenMeal] = useState("Café da Manhã");

  function handleChoseMeal(mealType) {
    setChosenMeal(mealType);
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Tipo de Refeição</label>
      <div className="flex gap-2">
        <Button
          text="Café da Manhã"
          mealType={chosenMeal}
          onClick={handleChoseMeal}
        />
        <Button text="Almoço" mealType={chosenMeal} onClick={handleChoseMeal} />
        <Button text="Janta" mealType={chosenMeal} onClick={handleChoseMeal} />
        <Button text="Lanche" mealType={chosenMeal} onClick={handleChoseMeal} />
      </div>
    </div>
  );
}

export default MealType;
