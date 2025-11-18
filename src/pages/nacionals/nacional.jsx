import React, { useState } from "react";

export default function Nacionais() {
  const [municipio, setMunicipio] = useState("");

  const programas = [
    {
      titulo: "Benefícios Nacionais",
      descricao:
        "Acesso a programas, descontos e vantagens disponíveis em todo o território nacional.",
    },
    {
      titulo: "Benefícios Nacionais",
      descricao:
        "Acesso a programas, descontos e vantagens disponíveis em todo o território nacional.",
    },
    {
      titulo: "Benefícios Nacionais",
      descricao:
        "Acesso a programas, descontos e vantagens disponíveis em todo o território nacional.",
    },
  ];

  const municipiosSP = ["Osasco"];

  return (
    <section className="municipios">
      <div className="muni">
        <h5>Benefícios Municipais</h5>
      </div>

      <div className="select-area">
        <h3>Selecione o município desejado</h3>
        <select value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
          <option value="">Selecione</option>
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
