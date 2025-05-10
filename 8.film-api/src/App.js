import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Anime from "./pages/AnimeDetail";
import SearchPage from "./pages/SearchPage";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/anime/:id" element={<Anime />} />
      </Routes>
    </Router>
  );
}

export default App;
