import { useState } from 'react'
import './App.scss'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Header from './components/Home/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
      
    
  )
}

export default App
