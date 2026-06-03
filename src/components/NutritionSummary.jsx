import { LuClipboardList } from "react-icons/lu";

function NutritionSummary() {
  return (
    <div className="max-w-7xl m-auto bg-white border-gray-200 shadow-sm rounded-lg mt-10 p-6">
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
        <LuClipboardList color="#2b7fff" size={24}/> 
        Resumo Nutricional
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div>
          <h3 className="text-3xl mb-1">2400</h3>
          <p className="text-zinc-600">Calorias</p>
        </div>
        <div>
          <h3 className="text-3xl mb-1">172.0g</h3>
          <p className="text-zinc-600">Proteína</p>
        </div>
        <div>
          <h3 className="text-3xl mb-1">65.0g</h3>
          <p className="text-zinc-600">Gordura</p>
        </div>
        <div>
          <h3 className="text-3xl mb-1">300.0g</h3>
          <p className="text-zinc-600">Carboidratos</p>
        </div>
      </div>
    </div>
  );
}

export default NutritionSummary;
