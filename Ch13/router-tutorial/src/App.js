import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import About from './pages/About';
import Layout from './Layout';
import AboutQueryString from './pages/AboutQueryString'; // 13.4.1 추가
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';

const App = () => {
  return (
    <Router>
    <div>
    <Routes>
        <Route element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/aboutQueryString" element={<AboutQueryString />} />
        <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
