// Precisa ter acesso ao total de kcal, proteína, gordura e carbo dos alimentos registrados em cada refeição.
import { useContext } from "react";
import { FoodsContext } from "../context/foods-context";
import Card from "./Card";

import {
  LuTarget,
  LuActivity,
  LuBeef,
  LuWheat,
  LuDroplet,
} from "react-icons/lu";

function Info({ icon, data, text, macro }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="text-lg md:text-2xl">
        {data.toFixed(0)} {macro && "g"}
      </h3>
      <p className="text-sm text-zinc-600 ">({text})</p>
    </div>
  );
}

function NutritionSummary() {
  const { foods } = useContext(FoodsContext);

  const totalCalories = foods.reduce((acc, cur) => acc + cur.kcal, 0);
  const totalProtein = foods.reduce((acc, cur) => acc + cur.protein, 0);
  const totalFat = foods.reduce((acc, cur) => acc + cur.fat, 0);
  const totalCarb = foods.reduce((acc, cur) => acc + cur.carb, 0);

  return (
    <Card
      icon={<LuTarget color="#2b7fff" size={20} />}
      title="Resumo Nutricional"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Info
          icon={<LuBeef size={18} />}
          data={totalProtein}
          text="proteína"
          macro
        />
        <Info
          icon={<LuDroplet size={18} />}
          data={totalFat}
          text="gordura"
          macro
        />
        <Info
          icon={<LuWheat size={18} />}
          data={totalCarb}
          text="carboidrato"
          macro
        />
        <Info
          icon={<LuActivity size={18} />}
          data={totalCalories}
          text="kcal"
        />
      </div>
    </Card>
  );
}

export default NutritionSummary;
