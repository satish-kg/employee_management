// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Switch from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';

// import {BrowserRouter as Switch} from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<ListEmployeeComponent/>} />
                    <Route path="/employee/getAll" element={<ListEmployeeComponent/>} />
                    <Route path="/employee/create" element={<CreateEmployee />}></Route>
                    <Route path="/employee/update/:id" element={<UpdateEmployee />}></Route>
                    {/* <ListEmployeeComponent />  */}
                </Routes  >
            </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
