import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AboutQueryString from './pages/AboutQueryString'; // 13.4.1 추가

const App = () => {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutQueryString" element={<AboutQueryString />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Routes>
      </div>
    </Router> 
  );
};

export default App;
/*
Route 컴포넌트 사용방법 :  <Route path ="주소규칙" element ={보여줄 컴포넌트 jsx} />
 */