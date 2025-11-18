import React, { useState } from "react";
import "./municipios.scss";

function Municipios() {
  const [municipio, setMunicipio] = useState("Osasco");

  const programas = [
    {
      titulo: "Programa de Parcerias para Concessão de Descontos e Benefícios",
      descricao:
        "Descontos e vantagens na aquisição de bens e serviços por meio de parcerias da Prefeitura com empresas privadas.",
    },
    {
      titulo: "Programa de Parcerias para Concessão de Descontos e Benefícios",
      descricao:
        "Descontos e vantagens na aquisição de bens e serviços por meio de parcerias da Prefeitura com empresas privadas.",
    },
    {
      titulo: "Programa de Parcerias para Concessão de Descontos e Benefícios",
      descricao:
        "Descontos e vantagens na aquisição de bens e serviços por meio de parcerias da Prefeitura com empresas privadas.",
    },
    {
      titulo: "Programa de Parcerias para Concessão de Descontos e Benefícios",
      descricao:
        "Descontos e vantagens na aquisição de bens e serviços por meio de parcerias da Prefeitura com empresas privadas.",
    },
  ];

  const municipiosSP = [
    "São Paulo",
    "Osasco",
    "Guarulhos",
    "Santo André",
    "São Bernardo do Campo",
    "Campinas",
    "Mogi das Cruzes",
    "Barueri",
    "Carapicuíba",
    "Suzano",
    "Taboão da Serra",
    "Santos",
    "São Caetano do Sul",
    "Jundiaí",
    "Sorocaba",
    "Ribeirão Preto",
    "Diadema",
    "Mauá",
    "Itapevi",
    "Cotia",
    "Embu das Artes",
    "Ferraz de Vasconcelos",
    "Poá",
    "Itaquaquecetuba",
    "Americana",
    "Piracicaba",
  ];

  return (
    
    <section className="municipios">
        <div className="muni">
            <h5>Beneficios Municipais</h5>
        </div>
      <div className="select-area">
        <h3>Selecione o município desejado</h3>
        <select value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
          {municipiosSP.map((mun) => (
            <option key={mun} value={mun}>
              {mun}
            </option>
          ))}
        </select>
      </div>

      <h2>Programas e benefícios</h2>

      <div className="programas-lista">
        {programas.map((item, i) => (
          <div className="programa-card" key={i}>
            <a href="#" className="titulo">{item.titulo}</a>
            <p>{item.descricao}</p>
            <span className="veja-mais">Veja mais →</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Municipios;
