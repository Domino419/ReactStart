import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  console.log(':::::::::::: src/app.js start ! ');
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />

      <Route path="/user/:username" element={<PostListPage />} />
      <Route path="/user/:username/:postId" element={<PostPage />} />
    </Routes>
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
