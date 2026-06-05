import Header from "./components/Header";
import NutritionSummary from "./components/NutritionSummary";
import NewMeal from "./components/NewFood";
import Meals from "./components/Meals";
import Footer from "./components/Footer";
import FoodsContextProvider from "./context/foods-provider";

function App() {
  return (
    <>
      <Header />
      <main className="px-4">
        <FoodsContextProvider>
          <NutritionSummary />
          <NewMeal />
          <Meals />
        </FoodsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
