import { createContext } from "react";

export const FoodsContext = createContext({
  foods: [],
  addFood: () => {},
  removeFood: () => {},
  editFood: () => {},
});