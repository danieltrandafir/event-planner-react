import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import { NavBar } from "./components/NavBar";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";
import { SearchProvider } from "./context/SearchProvider";

export const App = () => {
  const [plans, setPlans] = useState(getFromLocalStorage("plans", []));

  const addPlan = (plan) => {
    const newPlans = [plan, ...plans];
    localStorage.setItem("plans", JSON.stringify(newPlans));
    setPlans(newPlans);
  };

  return (
    <SearchProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes plans={plans} setPlans={setPlans} addPlan={addPlan} />
      </BrowserRouter>
    </SearchProvider>
  );
};
