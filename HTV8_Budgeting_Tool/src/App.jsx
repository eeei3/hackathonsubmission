import Header from './components/Header';
import MyBudgets from './components/MyBudgets';
import DefaultPage from './components/DefaultPage';
import Threads from './components/Threads';
import RegistrationPage from './components/RegistrationPage';
import { Route, Routes } from 'react-router-dom';
//import {Fragment} from 'react'
import { AuthProvider } from './Auth';

import BudgetCreation from "./components/BudgetCreation.jsx";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/' element={<DefaultPage />}></Route>
        <Route path='/Threads' element={<Threads />}></Route>
        <Route path='/MyBudgets' element={<MyBudgets />}></Route>
        <Route path='/RegistrationPage' element={<RegistrationPage />}></Route>
        <Route path='/MyBudgets/budgetcreation' element={<BudgetCreation />}> </Route>
      </Routes>
    </>
  )
}

export default App
