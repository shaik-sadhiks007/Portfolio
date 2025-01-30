import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./Dashboard"
import MyChamp from "./MYChamp/MyChamp"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/mychamp' element={<MyChamp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

