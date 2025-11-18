import React from "react";
import "./sobre.scss";
import logo from "../../images/logo..png";
import plano from "../../images/planos.png";


export default function Sobre() {
  return (
    <div className="sobre-container">

      {/* Quem Somos */}
      <section className="bloco branco">
        <h2>Quem somos</h2>
        <div className="conteudo-flex">
          <img
            src={logo}
            alt="Quem Somos"
          />
          <p>
            O Raízes Solidárias oferece ajuda humana gratuita e acessível,
            facilitando o acesso a informações de assistência social e tornando
            tudo mais simples e transparente.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="bloco branco">
        <h2>História</h2>
        <div className="conteudo-flex linha-invertida">
          <img
            src={plano}
            alt="História"
          />
          <p>
            A Raízes Solidárias nasceu em 2025 como um projeto escolar com o objetivo
            de simplificar o acesso às informações sobre benefícios sociais.
            Com o tempo, tornou-se uma plataforma completa para apoiar famílias
            em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="bloco branco mvv">
        <div className="card">
          <h3>Missão</h3>
          <p>
            Simplificar e humanizar o acesso às informações sobre benefícios sociais.
          </p>
        </div>

        <div className="card">
          <h3>Visão</h3>
          <p>
            Ser referência em tecnologia social e apoio informativo no Brasil.
          </p>
        </div>

        <div className="card">
          <h3>Valores</h3>
          <p>
            Empatia, respeito, inclusão, transparência e compromisso social.
          </p>
        </div>
      </section>

      {/* Colaboradores */}
      <section className="bloco branco colaboradores">
        <h2>Colaboradores</h2>

        <div className="bolinhas">
          {["Maria", "Nayara", "Geovanna", "Kauã"].map((nome) => (
            <div key={nome} className="item">
              <div className="circulo"></div>
              <p>{nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parceiros */}
      <section className="bloco branco parceiros">
        <h2>Parceiros</h2>

        <div className="logos">
          <div className="logo-item">
            <img 
              src="https://play-lh.googleusercontent.com/qn6t9aaqbxUJDl9SMRlBkgG6SArPRfk_g_m5lyG6SjhpUfiW1PsHuJ6jSuL9GVDqnA" 
            />
            <p>Gov</p>
          </div>

          <div className="logo-item">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnlEwWXo_b-4Wv3bIXoLiE0XHFnoWZVOxZg&s" 
            />
            <p>Ministério</p>
          </div>

          <div className="logo-item">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm43Z9LOh2MwuclRB28dWgFgGhkm6VlTgruA&s" 
            />
            <p>DRSP</p>
          </div>

          <div className="logo-item">
            <img 
              src="https://img.elo7.com.br/product/685x685/441AEA9/matriz-bordada-logo-usp-matriz-bordada-logo-usp.jpg" 
            />
            <p>USP</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bloco branco servicos">
        <h2>Serviços prestados</h2>

        <p className="texto">
          O Raízes Solidárias centraliza informações sobre benefícios,
          orienta famílias e disponibiliza serviços gratuitos e acessíveis.
        </p>

        <div className="botoes">
          <button>Centralização de Informações</button>
          <button>Acesso Personalizado</button>
          <button>Orientação Social</button>
          <button>Transparência</button>
          <button>Apoio Gratuito</button>
        </div>
      </section>

    </div>
  );
}
