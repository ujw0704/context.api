// import logo from './logo.svg';+
// import './App.css';
// // import Functional from './Components/Functional';
// import Counter from './Components/Counter'
// import Todo from './Components/Todo/Todo.js'
// import Task from './Components/New Task/Task.js';
import Header from "./Components/ContextApi/Header";
import Body from "./Components/ContextApi/Body";
import Footer from "./Components/ContextApi/Footer";
import Product from "./Components/ContextApi/Product";
import React, { createContext, useState } from 'react'

export const ecom = createContext({})


function App() {

  const [cart, setCart] = useState([])


  return (
    <div className="App">

      <ecom.Provider value={{ cart, setCart }}>

        <Header />
        <Body />
        <Footer />
        <Product />
      </ecom.Provider>

    </div>
  );
}

export default App;
