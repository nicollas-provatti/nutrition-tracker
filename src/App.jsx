import Header from "./components/Header";
import NutritionSummary from "./components/NutritionSummary";
import NewMeal from "./components/NewFood";

function App() {
  return (
    <>
      <Header />
      <main className="px-4">
        <NutritionSummary />
        <NewMeal />
      </main>
    </>
  );
}

export default App;
