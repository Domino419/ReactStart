import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import loadable from '@loadable/component';

//import RedPage from "./pages/RedPage";
//import BluePage from "./pages/BluePage";
//import UsersPage from "./pages/UsersPage";

const RedPage = loadable(() => import('./pages/RedPage')) ; 
const BluePage = loadable(() => import('./pages/BluePage')) ; 
const UsersPage = loadable(() => import('./pages/UsersPage')) ; 

const App = () => {
  return (
    <div>
      <Menu />
      <hr/>
      <Routes>
        <Route path="/" element={<RedPage/>}></Route> 
        <Route path="/red" element={<RedPage/>}></Route>
        <Route path="/blue" element={<BluePage/>}></Route>
        <Route path="/users/*" element={<UsersPage/>}></Route>
      </Routes>

    </div>
  );
};

export default App;