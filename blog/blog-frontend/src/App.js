import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet} from "react-helmet-async";

const App = () => {
  console.log(':::::::::::: src/app.js start ! ');
  return (
      <>
  <Helmet>
      <title> react ! </title>
  </Helmet>
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />

      <Route path="/:username" element={<PostListPage />} />
      <Route path="/:username/:postId" element={<PostPage />} />
    </Routes>
      </>
  );
};

export default App;

/* 
 http://localhost:3000/
 http://localhost:3000/login
 http://localhost:3000/register
 http://localhost:3000/write
 http://localhost:3000/user/tester
 http://localhost:3000/user/tester/1234
*/
