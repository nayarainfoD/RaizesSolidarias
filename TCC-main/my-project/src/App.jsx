import Cabecalho from "./componentes/cabecalho/cabecalho";
import Rodape from "./componentes/rodape/rodape";
import Principal from "./componentes/paginaprincipal/principal";
import Beneficio from "./componentes/Beneficio/beneficio";
import Municipios from "./componentes/Municipio/municipios";
import Login from "./componentes/Login/Login";
import EsqueceuSenha from "./componentes/Esqueceusenha/esqueceusenha";
import Duvida from "./componentes/duvidas/duvidas";
import Cadastro from "./componentes/Cadastro/cadastro";
import CadastroRenda from "./componentes/Cadastro/cadastrorenda";
import CadastroSaude from "./componentes/Cadastro/cadastrosaude";
import Sobre from "./componentes/sobre/sobre";


function App() {
  return (
    <>
      <Cabecalho />
      <main className="conteudo">
<Principal/>     
      </main>
      <Beneficio />
      <Municipios/>
      <Login/>
 <EsqueceuSenha />
  <Duvida />
<CadastroRenda/>
      <Cadastro/>
      <Sobre/>
            <CadastroSaude/>

            <Rodape />

    </>
  );
}

export default App;
