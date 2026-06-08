import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Profiles/:username" element={<Profile/>} />
      <Route path="/Articles" element={<Articles/>} />
      <Route path="/Articles/:id" element={<Article/>} />
    </Routes>
  );
}

export default App;
