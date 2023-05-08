import logo from "./logo.svg"
import "./App.css"
import Dashboard from "./features/dashboard/Dashboard"
import AppStructure from "./features/app-structure/AppStructure"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppStructure/>
    </Router>
  )
}

export default App
