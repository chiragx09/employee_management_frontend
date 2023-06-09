import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element = {<ListEmployeeComponent/>}></Route>
              <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
              <Route path = "/addemp" element = {<AddEmployeeComponent/>} ></Route>
              <Route path = "/editemp/:id" element = {<AddEmployeeComponent/>}></Route>
            </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;