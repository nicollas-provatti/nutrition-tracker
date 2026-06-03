//import { LuClipboardList } from "react-icons/lu";
import Card from "./Card";

import {
  LuTarget,
  LuActivity,
  LuBeef,
  LuWheat,
  LuDroplet,
} from "react-icons/lu";

function Info({ icon, data, text }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="text-lg md:text-2xl">{data}</h3>
      <p className="text-zinc-600 ">{text}</p>
    </div>
  );
}

function NutritionSummary() {
  return (
    <Card
      icon={<LuTarget color="#2b7fff" size={20} />}
      title="Resumo Nutricional"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Info icon={<LuBeef size={18} />} data="170g" text="Proteína" />
        <Info icon={<LuDroplet size={18} />} data="65g" text="Gordura" />
        <Info icon={<LuWheat size={18} />} data="290g" text="Carboidrato" />
        <Info icon={<LuActivity size={18} />} data="2400" text="kcal" />
      </div>
    </Card>
  );
}

export default NutritionSummary;
