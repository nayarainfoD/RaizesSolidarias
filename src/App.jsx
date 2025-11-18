import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Municipios from './pages/Municipio/municipios'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Municipio' element={<Municipios />} />
      </Routes>
    </BrowserRouter>
  );
}
