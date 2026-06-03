import Header from "./components/Header";
import NutritionSummary from "./components/NutritionSummary";
import NewMeal from "./components/NewFood";
import MealsToday from "./components/Meals";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="px-4">
        <NutritionSummary />
        <NewMeal />
        <MealsToday />
      </main>
      <Footer />
    </>
  );
}

export default App;
