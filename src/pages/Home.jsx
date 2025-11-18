import Cabecalho from "../componentes/cabecalho/cabecalho";
import Rodape from "../componentes/rodape/rodape";
import Principal from "../componentes/paginaprincipal/principal";
import Beneficio from "../componentes/Beneficio/beneficio";
import Duvida from "../componentes/duvidas/duvidas";
export default function Home() {
  return (
    <>
      <Cabecalho />
      <main className="conteudo">
<Principal/>     
      </main>
            <Rodape />
    </>
  );
};
