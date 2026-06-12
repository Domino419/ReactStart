import { Route, Routes } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import UserPage from "./UserPage";

const UsersPage = () => {
  return (
    <div>
      <UsersContainer />
        <Routes>
          <Route path=":id" element={<UserPage />} />
        </Routes>
    </div>
  );
};

export default UsersPage;

//583page 