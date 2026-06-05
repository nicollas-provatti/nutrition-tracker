import Food from "./Food";

function Meal({ icon, meal, calories, type, foods }) {
  const mealStyles = {
    breakfast: "bg-orange-100 text-orange-700",
    lunch: "bg-yellow-100 text-yellow-700",
    dinner: "bg-purple-100 text-purple-700",
    snack: "bg-green-100 text-green-700",
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-2 rounded-lg ${mealStyles[type]}`}>{icon}</div>
        <h3 className="font-semibold">{meal}</h3>
        <p className="text-sm text-gray-500">({calories} kcal)</p>
      </div>

      {foods.length === 0 && (
        <p className="text-sm text-gray-400 italic">
          Nenhum item adicionado ainda
        </p>
      )}

      {foods.length !== 0 && (
        <div className="space-y-3">
          {foods.map((food) => (
            <Food key={food.name} food={food}></Food>
          ))}
        </div>
      )}
    </div>
  );
}

export default Meal;
