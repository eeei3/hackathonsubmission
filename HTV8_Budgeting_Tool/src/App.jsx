import Header from './components/Header';
import MyBudgets from './components/MyBudgets';
import DefaultPage from './components/DefaultPage';
import Threads from './components/Threads';
import RegistrationPage from './components/RegistrationPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <div>
      <Routes>
        <Route exact path='/' element={<DefaultPage />}></Route>
        <Route path='/Threads' element={<Threads />}></Route>
        <Route path='/MyBudgets' element={<MyBudgets />}></Route>
        <Route path='/RegistrationPage' element={<RegistrationPage />}></Route>

      </Routes>
    </div>
    </>
  )
}

export default App
