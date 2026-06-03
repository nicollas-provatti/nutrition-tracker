import Card from "./Card";
import Meal from "./Meal";

import { LuSalad } from "react-icons/lu";
import { LuCoffee } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { LuApple } from "react-icons/lu";

function Meals() {
  return (
    <Card
      icon={<LuSalad color="#2b7fff" size={20} />}
      title="Registar Alimentos"
    >
      <div className="flex flex-col gap-4">
        <Meal
          icon={<LuCoffee />}
          meal="Café da Manhã"
          calories={0}
          type="breakfast"
        />
        <Meal icon={<LuSun />} meal="Almoço" calories={0} type="lunch" />
        <Meal icon={<LuMoon />} meal="Janta" calories={0} type="dinner" />
        <Meal icon={<LuApple />} meal="Lanche" calories={0} type="snack" />
      </div>
    </Card>
  );
}

export default Meals;
