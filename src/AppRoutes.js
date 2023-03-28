import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CreatePlan } from "./pages/CreatePlan";
import { SearchEvent } from "./pages/SearchEvent";
import { MyPlans } from "./pages/MyPlans";
import { Plan } from "./pages/Plan";

export const AppRoutes = ({ plans, setPlans, addPlan }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-plan" element={<CreatePlan addPlan={addPlan} />} />
      <Route path="/search-event" element={<SearchEvent plans={plans} setPlans={setPlans} />} />
      <Route path="/plans" element={<MyPlans plans={plans} setPlans={setPlans} />} />
      <Route path="/plans/:planId" element={<Plan />} />
    </Routes>
  );
};
