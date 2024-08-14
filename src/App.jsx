import { BrowserRouter, Routes, Route } from "react-router-dom"
import {  Home } from './pages'
import { Landing } from "./pages/landing"
import { Dashboard } from "./pages/dashboard"
import ProtectedRoute from './components/ProtectedRoute'
import { useEffect } from "react"
import Axios from './hooks/useAxios.jsx'
import Ayuda from "./pages/ayuda"
function App() {
  useEffect(() => {
    Axios('POST', 'login/validacion', null)
        .then((res) => {
            console.log('entrando validando', res)
        })
        .catch(err => {
            console.log(err.response.data)
        })

}, [])
  return (
    <>
      <BrowserRouter>
        <div className="contenedor">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route element={<ProtectedRoute />} >
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}




export default App