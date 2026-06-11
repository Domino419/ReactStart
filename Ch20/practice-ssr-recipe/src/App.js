import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr/>
      <Routes>
        <Route path="/" element={<RedPage/>}></Route> 
        <Route path="/red" element={<RedPage/>}></Route>
        <Route path="/blue" element={<BluePage/>}></Route>
      </Routes>

    </div>
  );
};

export default App;
