import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Onboarding from "./views/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Onboarding />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
