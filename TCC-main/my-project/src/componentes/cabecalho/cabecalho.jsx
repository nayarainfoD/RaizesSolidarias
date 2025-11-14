import React, { useState, useEffect } from 'react'
import "./cabecalho.scss";
import logo from "../../images/logo..png";
import nome from "../../images/nome.png";

function Cabecalho() {
  const imagens = [
    'https://portalv1.com.br/app/wp-content/uploads/2023/01/eea8f206-3a62-45f6-b64c-a1ce8f3f8de8-Copy.jpg',
    'https://portalwp.s3.amazonaws.com/wp-content/uploads/2023/05/30101036/unisocial-cabo-verde-3-768x576.jpeg',
    'https://hs.toledoprudente.edu.br/hubfs/Blog%20Servi%C3%A7o%20Social/servi%C3%A7o_social.jpg',
    'https://www.sescdf.com.br/documents/20123/41613/Assistencia.png/6ca925a3-61b6-8d8a-d6a9-9de97ad298b9?t=1692390405231'
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <header className="cabecalho">
      <div className="cabecalho-titulo">
        <img
          className="titulo-img"
          src= {nome}
          alt="RAÍZES SOLIDÁRIAS"
        />
      </div>

      <div className="cabecalho-linha">
        <div className="area-logo">
          <img
            className="logo"
            src={logo}
            alt="Logo"
          />
        </div>

        <nav className="area-menu">
          <div className="dropdown">
            <button className="dropbtn">Notícias ▾</button>
            <div className="dropdown-content">
              <a href="#">Últimas</a>
              <a href="#">Eventos</a>
              <a href="#">Artigos</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Serviços ▾</button>
            <div className="dropdown-content">
              <a href="#">Projetos</a>
              <a href="#">Parcerias</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Quem somos ▾</button>
            <div className="dropdown-content">
              <a href="#">História</a>
              <a href="#">Equipe</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Atendimento ▾</button>
            <div className="dropdown-content">
              <a href="#">Fale Conosco</a>
              <a href="#">FAQ</a>
              <a href="#">Localização</a>
            </div>
          </div>
        </nav>

        <div className="area-botoes">
          <button className="botao portal">Seu Portal</button>
          <button className="botao entrar">Entrar</button>
        </div>
      </div>

      <div className="cabecalho-carrossel">
        <div
          className="faixa"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {imagens.map((src, i) => (
            <div key={i} className="item">
              <img src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="botoes">
          {imagens.map((_, i) => (
            <span
              key={i}
              className={`bolinha ${indice === i ? 'ativo' : ''}`}
              onClick={() => setIndice(i)}
            ></span>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;
