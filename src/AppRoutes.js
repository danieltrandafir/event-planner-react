import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { CreatePlan } from "./pages/CreatePlan";
import { SearchEvent } from "./pages/SearchEvent";
import { MyPlans } from "./pages/MyPlans";
import { Plan } from "./pages/Plan";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-plan" element={<CreatePlan />} />
      <Route path="/search-event" element={<SearchEvent />} />
      <Route path="/plans" element={<MyPlans />} />
      <Route path="/plans/:planId" element={<Plan />} />
    </Routes>
  );
};
