import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Municipios from './pages/Municipio/municipios'
import Cadastro from './componentes/Cadastro/cadastro'
import CadastroRenda from './componentes/Cadastro/cadastrorenda'
import CadastroSaude from './componentes/Cadastro/cadastrosaude'
import Beneficio from './componentes/Beneficio/beneficio'
import Sobre from './componentes/sobre/sobre'
import EsqueceuSenha from './componentes/Esqueceusenha/esqueceusenha'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Municipio' element={<Municipios />} />
        <Route path='/login/cadastro' element={<Cadastro />} />
        <Route path='/login/cadastro2' element={<CadastroRenda />} />
        <Route path='/login/cadastro3' element={<CadastroSaude />} />
        <Route path='/Beneficio' element={<Beneficio />} />
        <Route path='/quemsomos' element={<Sobre />} />
        <Route path='/esqueceu' element={<EsqueceuSenha />} />
      </Routes>
    </BrowserRouter>
  );
}
