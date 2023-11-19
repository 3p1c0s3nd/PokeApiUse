import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PokeinfoPage from "./pages/PokeinfoPage/PokeinfoPage";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";

function App() {
 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokedex/:id" element={<PokeinfoPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
