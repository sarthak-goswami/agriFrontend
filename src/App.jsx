
import {  BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Farmer from './components/Farmer'
import Government from './components/Government'
import Login from './components/Login'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Farmer/>}/>
        <Route path='/Government' element={<Government/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
