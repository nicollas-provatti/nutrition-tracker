import { useReducer, useEffect } from "react";
import { FoodsContext } from "./foods-context";

function init() {
  const storedFoods = localStorage.getItem("foods");

  return {
    foods: storedFoods ? JSON.parse(storedFoods) : [],
  };
}

function foodsReducer(state, action) {
  if (action.type === "ADD") {
    const updateFoods = [...state.foods];
    updateFoods.push(action.payload);

    return {
      ...state, // Nesse caso, opcional.
      foods: updateFoods,
    };
  }

  if (action.type === "REMOVE") {
    const updateFoods = [...state.foods];

    const foodIndex = updateFoods.findIndex(
      (food) => food.id === action.payload,
    );

    updateFoods.splice(foodIndex, 1);

    return {
      ...state,
      foods: updateFoods,
    };
  }

  if (action.type === "UPDATE") {
    const updateFoods = [...state.foods];

    const { idFood, updateFood } = action.payload;

    const foodIndex = updateFoods.findIndex((food) => food.id === idFood);

    updateFoods[foodIndex] = updateFood;

    return {
      ...state,
      foods: updateFoods,
    };
  }

  return state;
}

export default function FoodsContextProvider({ children }) {
  const [foodsState, foodsDispatch] = useReducer(
    foodsReducer,
    { foods: [] },
    init,
  );

  function handleAddFood(food) {
    foodsDispatch({ type: "ADD", payload: food });
  }

  function handleRemoveFood(idFood) {
    foodsDispatch({ type: "REMOVE", payload: idFood });
  }

  function handleUpdateQuantity(idFood, updateFood) {
    foodsDispatch({ type: "UPDATE", payload: { idFood, updateFood } });
  }

  const ctxValue = {
    foods: foodsState.foods,
    addFood: handleAddFood,
    removeFood: handleRemoveFood,
    updateQuantity: handleUpdateQuantity,
  };

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foodsState.foods));
  }, [foodsState.foods]);

  return (
    <FoodsContext.Provider value={ctxValue}>{children}</FoodsContext.Provider>
  );
}
