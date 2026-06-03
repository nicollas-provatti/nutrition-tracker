import { LuUtensils } from "react-icons/lu";

function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-6">
      <div className="max-w-7xl m-auto flex items-center gap-4">
        <div className="bg-blue-500 text-white p-2 rounded-md">
          <LuUtensils size={24} />
        </div>
        <div>
          <h1 className="font-semibold text-2xl">Plane sua Dieta</h1>
          <p className="text-sm text-gray-600">
            Monitore suas refeições e alcance seus objetivos nutricionais
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
