import React from 'react';
import { Counter } from './features/counter/Counter';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AllJobs from './components/AllJobs';
import AddJob from './components/AddJob';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">

        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' element={<AllJobs />} />
            <Route path='/jobs' element={<AddJob />} />
            <Route path='/edit/:id' element={<AddJob />} />
          </Routes>

        </Router>


      </div>
    </div>
  );
}

export default App;
