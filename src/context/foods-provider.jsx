import { useReducer } from "react";
import { FoodsContext } from "./foods-context";

function foodsReducer(state, action) {
  if (action.type === "ADD") {
    const updateFoods = [...state.foods];
    updateFoods.push(action.payload);

    return {
      ...state, // Nesse caso, opcional.
      foods: updateFoods,
    };
  }
}

export default function FoodsContextProvider({ children }) {
  const [foodsState, foodsDispatch] = useReducer(foodsReducer, { foods: [] });

  function handleAddFood(food) {
    foodsDispatch({ type: "ADD", payload: food });
  }

  const ctxValue = {
    foods: foodsState.foods,
    addFood: handleAddFood,
  };

  return (
    <FoodsContext.Provider value={ctxValue}>{children}</FoodsContext.Provider>
  );
}
