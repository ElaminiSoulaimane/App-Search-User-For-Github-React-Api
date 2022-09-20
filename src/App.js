import React from "react";
import Users from "./Components/User/Users";
import Navbar from "./Components/Partials/Navbar";
import Useritem from "./Components/User/Useritem";
import { BrowserRouter as  Router ,Route , Routes  } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div className = "App" >
        <Navbar />
        <div className = "container mt-2" >
            <Routes>
              <Route exact path="/"  element={<Users/>} />
              <Route exact path="/users/:login" element={<Useritem/>} />
              <Route exact element={<Users/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
