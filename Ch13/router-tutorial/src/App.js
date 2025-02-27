import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import About from './pages/About';
import Layout from './Layout';
import AboutQueryString from './pages/AboutQueryString'; // 13.4.1 추가
import Home from './pages/Home';
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
    </Routes>
    </div>
    </Router>
  );
}

export default App;
