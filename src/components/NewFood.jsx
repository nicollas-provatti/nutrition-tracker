import Card from "./Card";
import MealType from "./MealType";
import { foods } from "../data/foods";
import { LuNotebookPen, LuPlus } from "react-icons/lu";

function NewFood() {
  return (
    <Card
      icon={<LuNotebookPen color="#2b7fff" size={20} />}
      title="Registrar Alimentos"
    >
      <MealType />

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <label className="block mb-2 font-semibold">
            Escolha um Alimento
          </label>
          <select
            defaultValue="Escolha um Alimento"
            className="select w-full"
            required
          >
            <option disabled={true}>Escolha um Alimento</option>
            {foods.map((food) => (
              <option key={food.nome} value={food.nome}>
                {food.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-2 font-semibold">
            Informe a Quantidade
          </label>
          <input
            type="number"
            className="input w-full"
            required
            placeholder="Em gramas ou unidades (100g ou 1)"
            title="Must be between be 1 to 10"
          />
        </div>

        <button className="self-end px-2 py-2 rounded-full transition-colors bg-blue-500 text-white cursor-pointer hover:bg-blue-600">
          <LuPlus size={24} />
        </button>
      </div>
    </Card>
  );
}

export default NewFood;

