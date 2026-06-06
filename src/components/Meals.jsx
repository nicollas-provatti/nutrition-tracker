import { useContext } from "react";

import Card from "./Card";
import Meal from "./Meal";
import { FoodsContext } from "../context/foods-context";

import { LuSalad } from "react-icons/lu";
import { LuCoffee } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { LuApple } from "react-icons/lu";

function Meals() {
  const { foods } = useContext(FoodsContext);

  const breakfastFoods = foods.filter((food) => food.mealType === "breakfast");
  const lunchFoods = foods.filter((food) => food.mealType === "lunch");
  const dinnerFoods = foods.filter((food) => food.mealType === "dinner");
  const snackFoods = foods.filter((food) => food.mealType === "snack");

  const breakfastTotalColories = breakfastFoods.reduce((acc, cur) => acc + cur.kcal, 0);
  const lunchTotalColories = lunchFoods.reduce((acc, cur) => acc + cur.kcal, 0);
  const dinnerTotalColories = dinnerFoods.reduce((acc, cur) => acc + cur.kcal, 0);
  const snakTotalColories = snackFoods.reduce((acc, cur) => acc + cur.kcal, 0);


  return (
    <Card
      icon={<LuSalad color="#2b7fff" size={20} />}
      title="Registar Alimentos"
    >
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        <Meal
          icon={<LuCoffee />}
          meal="Café da Manhã"
          calories={breakfastTotalColories}
          type="breakfast"
          foods={breakfastFoods}
        />
        <Meal
          icon={<LuSun />}
          meal="Almoço"
          calories={lunchTotalColories}
          type="lunch"
          foods={lunchFoods}
        />
        <Meal
          icon={<LuMoon />}
          meal="Janta"
          calories={dinnerTotalColories}
          type="dinner"
          foods={dinnerFoods}
        />
        <Meal
          icon={<LuApple />}
          meal="Lanche"
          calories={snakTotalColories}
          type="snack"
          foods={snackFoods}
        />
      </div>
    </Card>
  );
}

export default Meals;
