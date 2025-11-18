import React, { useState } from "react";
import "./municipios.scss";
import { Link } from 'react-router-dom'

function Municipios() {
  const [municipio, setMunicipio] = useState("Osasco");

  // PROGRAMAS DE CADA MUNICÍPIO
  const programasPorMunicipio = {
    "São Paulo": [
      {
        titulo: "Programa de Descontos São Paulo",
        descricao:
          "Parcerias com empresas oferecendo benefícios exclusivos aos moradores da capital.",
      },
      {
        titulo: "Programa Emprego SP",
        descricao:
          "Capacitação profissional e recolocação no mercado de trabalho.",
      },
      {
        titulo: "Saúde SP",
        descricao:
          "Rede conveniada com descontos em consultas e exames.",
      },
    ],

    Osasco: [
      {
        titulo: "Programa de Parcerias Osasco",
        descricao:
          "Descontos e vantagens em diversos setores comerciais.",
      },
      {
        titulo: "Mobilidade Osasco",
        descricao:
          "Benefícios e apoios para transporte urbano.",
      },
      {
        titulo: "Osasco Social",
        descricao:
          "Programas assistenciais para famílias e comunidades.",
      },
    ],

    Guarulhos: [
      {
        titulo: "Emprego Guarulhos",
        descricao:
          "Oportunidades e cursos profissionalizantes.",
      },
      {
        titulo: "Cultura Guarulhos",
        descricao:
          "Eventos culturais e incentivos artísticos.",
      },
      {
        titulo: "Saúde Guarulhos",
        descricao:
          "Atendimentos médicos e odontológicos com descontos.",
      },
    ],

    "Santo André": [
      {
        titulo: "Qualifica Santo André",
        descricao:
          "Cursos profissionalizantes gratuitos.",
      },
      {
        titulo: "Bem-Estar Santo André",
        descricao:
          "Serviços voltados à saúde física e mental.",
      },
      {
        titulo: "Cultura Viva",
        descricao:
          "Oficinas e eventos culturais abertos à população.",
      },
    ],

    "São Bernardo do Campo": [
      {
        titulo: "Família SBC",
        descricao:
          "Apoio social e benefícios para famílias da região.",
      },
      {
        titulo: "Mobilidade SBC",
        descricao:
          "Descontos em integração de transporte.",
      },
      {
        titulo: "Esporte SBC",
        descricao:
          "Atividades esportivas e recreativas gratuitas.",
      },
    ],

    Campinas: [
      {
        titulo: "Inova Campinas",
        descricao:
          "Parcerias com empresas de tecnologia e inovação.",
      },
      {
        titulo: "Saúde Campinas",
        descricao:
          "Consultas e exames com valores acessíveis.",
      },
      {
        titulo: "Arte Campinas",
        descricao:
          "Atividades culturais e exposições.",
      },
    ],

    "Mogi das Cruzes": [
      {
        titulo: "Mogi Capacita",
        descricao:
          "Cursos e formações em diversas áreas.",
      },
      {
        titulo: "Mogi Saúde",
        descricao:
          "Benefícios em serviços de saúde conveniada.",
      },
      {
        titulo: "Mogi Verde",
        descricao:
          "Projetos ambientais e participação comunitária.",
      },
    ],

    Barueri: [
      {
        titulo: "Barueri Benefícios",
        descricao:
          "Parcerias com empresas e descontos exclusivos.",
      },
      {
        titulo: "Educação Barueri",
        descricao:
          "Capacitação e eventos educacionais.",
      },
      {
        titulo: "Saúde Barueri",
        descricao:
          "Serviços médicos conveniados.",
      },
    ],

    Carapicuíba: [
      {
        titulo: "Carapicuíba Social",
        descricao:
          "Programas sociais e apoio comunitário.",
      },
      {
        titulo: "Carapicuíba Emprega",
        descricao:
          "Vagas e qualificação profissional.",
      },
      {
        titulo: "Esporte Carapicuíba",
        descricao:
          "Atividades físicas gratuitas.",
      },
    ],

    Suzano: [
      {
        titulo: "Suzano Mais Saúde",
        descricao:
          "Descontos em atendimentos médicos.",
      },
      {
        titulo: "Suzano Empreende",
        descricao:
          "Apoio e incentivo a empreendedores.",
      },
      {
        titulo: "Cultura Suzano",
        descricao:
          "Eventos culturais e oficinas artísticas.",
      },
    ],

    "Taboão da Serra": [
      {
        titulo: "Taboão Social",
        descricao:
          "Projetos de assistência e inclusão.",
      },
      {
        titulo: "Educação Taboão",
        descricao:
          "Cursos e formações diversas.",
      },
      {
        titulo: "Saúde Taboão",
        descricao:
          "Atendimentos médicos e odontológicos conveniados.",
      },
    ],

    Santos: [
      {
        titulo: "Santos Mar Azul",
        descricao:
          "Projetos ambientais e atividades no litoral.",
      },
      {
        titulo: "Santos Saúde",
        descricao:
          "Rede médica com descontos.",
      },
      {
        titulo: "Turismo Santos",
        descricao:
          "Benefícios em pontos turísticos da cidade.",
      },
    ],

    "São Caetano do Sul": [
      {
        titulo: "São Caetano Educação",
        descricao:
          "Excelência educacional e cursos técnicos.",
      },
      {
        titulo: "Saúde Premium SCS",
        descricao:
          "Atendimentos de alta qualidade com preços reduzidos.",
      },
      {
        titulo: "Cultura SCS",
        descricao:
          "Eventos e atividades culturais.",
      },
    ],

    Jundiaí: [
      {
        titulo: "Jundiaí Verde",
        descricao:
          "Programas ambientais e hortas comunitárias.",
      },
      {
        titulo: "Jundiaí Educação",
        descricao:
          "Cursos e capacitações.",
      },
      {
        titulo: "Jundiaí Esporte",
        descricao:
          "Atividades esportivas gratuitas.",
      },
    ],

    Sorocaba: [
      {
        titulo: "Sorocaba Empreende",
        descricao:
          "Apoio a empresas e empreendedores.",
      },
      {
        titulo: "Sorocaba Saúde",
        descricao:
          "Consultas e exames com preços populares.",
      },
      {
        titulo: "Cultura Sorocaba",
        descricao:
          "Ações e eventos culturais.",
      },
    ],

    "Ribeirão Preto": [
      {
        titulo: "Ribeirão Emprega",
        descricao:
          "Capacitação e empregos.",
      },
      {
        titulo: "Saúde Ribeirão",
        descricao:
          "Atendimentos médicos com descontos.",
      },
      {
        titulo: "Cultura RP",
        descricao:
          "Eventos e oficinas culturais.",
      },
    ],

    Diadema: [
      {
        titulo: "Diadema Social",
        descricao:
          "Programas assistenciais.",
      },
      {
        titulo: "Diadema Emprega",
        descricao:
          "Vagas e cursos gratuitos.",
      },
      {
        titulo: "Esporte Diadema",
        descricao:
          "Esporte e lazer para a população.",
      },
    ],

    Mauá: [
      {
        titulo: "Mauá Empreende",
        descricao:
          "Apoio ao empreendedor local.",
      },
      {
        titulo: "Mauá Saúde",
        descricao:
          "Rede médica conveniada.",
      },
      {
        titulo: "Cultura Mauá",
        descricao:
          "Eventos e atividades culturais.",
      },
    ],

    Itapevi: [
      {
        titulo: "Itapevi Avança",
        descricao:
          "Parcerias para desenvolvimento profissional.",
      },
      {
        titulo: "Saúde Itapevi",
        descricao:
          "Consultas acessíveis.",
      },
      {
        titulo: "Itapevi Cultural",
        descricao:
          "Atividades artísticas e educativas.",
      },
    ],

    Cotia: [
      {
        titulo: "Cotia Verde",
        descricao:
          "Projetos ambientais e trilhas ecológicas.",
      },
      {
        titulo: "Cotia Emprega",
        descricao:
          "Capacitação e inclusão profissional.",
      },
      {
        titulo: "Cultura Cotia",
        descricao:
          "Eventos e atividades culturais.",
      },
    ],

    "Embu das Artes": [
      {
        titulo: "Cultura Embu",
        descricao:
          "Apoio aos artistas locais e eventos de arte.",
      },
      {
        titulo: "Saúde Embu",
        descricao:
          "Atendimentos com valores reduzidos.",
      },
      {
        titulo: "Emprego Embu",
        descricao:
          "Vagas e cursos para capacitação.",
      },
    ],

    "Ferraz de Vasconcelos": [
      {
        titulo: "Ferraz Emprega",
        descricao:
          "Cursos e oportunidades profissionais.",
      },
      {
        titulo: "Ferraz Saúde",
        descricao:
          "Descontos em consultas e exames.",
      },
      {
        titulo: "Ferraz Social",
        descricao:
          "Programas para famílias carentes.",
      },
    ],

    Poá: [
      {
        titulo: "Poá Social",
        descricao:
          "Assistência a famílias e comunidades.",
      },
      {
        titulo: "Poá Saúde",
        descricao:
          "Clínicas conveniadas com preços populares.",
      },
      {
        titulo: "Poá Educação",
        descricao:
          "Cursos e formações gratuitas.",
      },
    ],

    Itaquaquecetuba: [
      {
        titulo: "Itaqua Emprega",
        descricao:
          "Capacitação e recolocação profissional.",
      },
      {
        titulo: "Itaqua Saúde",
        descricao:
          "Consultas e exames com descontos.",
      },
      {
        titulo: "Cultura Itaqua",
        descricao:
          "Eventos culturais e oficinas.",
      },
    ],

    Americana: [
      {
        titulo: "Americana Avança",
        descricao:
          "Cursos técnicos e qualificação profissional.",
      },
      {
        titulo: "Saúde Americana",
        descricao:
          "Serviços médicos conveniados.",
      },
      {
        titulo: "Cultura Americana",
        descricao:
          "Exposições e eventos culturais.",
      },
    ],

    Piracicaba: [
      {
        titulo: "Piracicaba Empreende",
        descricao:
          "Apoio ao empreendedor e microempresas.",
      },
      {
        titulo: "Piracicaba Saúde",
        descricao:
          "Consultas e exames acessíveis.",
      },
      {
        titulo: "Cultura Piracicaba",
        descricao:
          "Eventos culturais e gastronômicos.",
      },
    ],
  };

  // PROGRAMAS EXIBIDOS NA TELA
  const programas = programasPorMunicipio[municipio] || [];

  const municipiosSP = Object.keys(programasPorMunicipio);

  return (
    <section className="municipios">
      <div className="muni">
        <h5>Benefícios Municipais</h5>
      </div>

      <div className="select-area">
        <h3>Selecione o município desejado</h3>
        <select value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
          {municipiosSP.map((mun) => (
            <option key={mun} value={mun}>{mun}</option>
          ))}
        </select>
      </div>

      <h2>Programas e benefícios</h2>

      <div className="programas-lista">
        {programas.map((item, i) => (
          <div className="programa-card" key={i}>
            <a href="#" className="titulo">{item.titulo}</a>
            <p>{item.descricao}</p>
            <Link to='/Beneficio'>
            <span className="veja-mais">Veja mais →</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Municipios;