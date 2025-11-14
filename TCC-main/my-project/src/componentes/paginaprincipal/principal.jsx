import React, { useState, useEffect } from "react";
import "./principal.scss";
import logo from "../../images/logo..png";

function Principal() {
  const dados = [
    {
      nome: "Municipal",
      imagem:
        "https://images.seeklogo.com/logo-png/11/1/prefeitura-de-sao-paulo-logo-png_seeklogo-111572.png?v=1956755543522096648",
    },
    {
      nome: "Nacional",
      imagem:
        "https://static.vecteezy.com/system/resources/previews/011/571/240/original/circle-flag-of-brazil-free-png.png",
    },
    {
      nome: "Federal",
      imagem:
        "https://logospng.org/download/governo-federal/governo-federal-brasil-4096.png",
    },
  ];

  const banners = [
    "https://www.pensarcursos.com.br/blog/wp-content/uploads/2023/11/logo_bolsa-familia_site_770x420px-750x430.png",
    "https://programadogoverno.com/wp-content/uploads/2023/12/Screenshot_43-1.jpg" ,
    "https://monitordomercado.com.br/wp-content/uploads/2024/01/unnamed_resized-1-750x375.png",
  ];

  const [atual, setAtual] = useState(0);

  const proximo = () => {
    setAtual((prev) => (prev + 1) % banners.length);
  };

  const anterior = () => {
    setAtual((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAtual((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <main>
      <section className="principal">
        <h2>Principais Programas e Benefícios</h2>

        <div className="principal-cards">
          {dados.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.imagem} alt={item.nome} />
              <p>{item.nome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="noticias">
        <h2>Principais Notícias</h2>

        <div className="noticias-carrossel">
          <button className="seta seta-esquerda" onClick={anterior}>
            ‹
          </button>

          <img
            className="noticia-banner"
            src={banners[atual]}
            alt={`Banner ${atual + 1}`}
          />

          <button className="seta seta-direita" onClick={proximo}>
            ›
          </button>
        </div>

        <div className="noticias-grid">
          <div className="noticia-card">
            <img
              src={logo}
              alt="Programa Criança Feliz"
            />
            <p>
             Programa Criança Feliz
            </p>
          </div>

          <div className="noticia-card">
            <img
              src="https://i.ytimg.com/vi/V4lcsYv_sNA/maxresdefault.jpg"
              alt="Rede Amigo da Criança"
            />
            <p>
              Governo Federal investe R$ 25 milhões para ampliar rede Amigo da
              Criança
            </p>
          </div>

          <div className="noticia-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.CZjwK2xuIYlJZRe1NJLHmwHaDV?pid=Api&P=0&h=180"
              alt="Guardas municipais"
            />
            <p>
              Ação de guardas municipais em medidas protetivas de mulheres
              cresce 130% em 4 anos
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Principal;
