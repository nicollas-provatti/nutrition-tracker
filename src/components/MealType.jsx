function Button({ text, type, selectedMeal, onClick }) {
  let classes =
    "px-3 py-2 rounded-lg transition-colors bg-gray-100 text-sm text-gray-700 cursor-pointer hover:bg-gray-200";

  if (type === selectedMeal) {
    classes =
      "px-3 py-2 rounded-lg transition-colors bg-blue-500 text-sm text-white hover:bg-blue-600";
  }
  return (
    <button className={classes} onClick={() => onClick(type)}>
      {text}
    </button>
  );
}

function MealType({ meal, onClick }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Tipo de Refeição</label>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Button
          text="Café da Manhã"
          type="breakfast"
          selectedMeal={meal}
          onClick={onClick}
        />
        <Button
          text="Almoço"
          type="lunch"
          selectedMeal={meal}
          onClick={onClick}
        />
        <Button
          text="Janta"
          type="dinner"
          selectedMeal={meal}
          onClick={onClick}
        />
        <Button
          text="Lanche"
          type="snack"
          selectedMeal={meal}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default MealType;
