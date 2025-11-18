import React from "react";
import "./sobre.scss";

export default function Sobre() {
  return (
    <div className="sobre-container">

      {/* Quem Somos */}
      <section className="bloco branco">
        <h2>Quem somos</h2>
        <div className="conteudo-flex">
          <img
            src="https://media.discordapp.net/attachments/1421651223668461631/1438980072760545381/065a84cd779fc035ff59c8a72a88fb37.jpg?format=webp"
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
            src="https://media.discordapp.net/attachments/1421651223668461631/1438980072760545381/065a84cd779fc035ff59c8a72a88fb37.jpg?format=webp"
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
              src="https://media.discordapp.net/attachments/1421651223668461631/1438980072760545381/065a84cd779fc035ff59c8a72a88fb37.jpg?format=webp" 
            />
            <p>Secretaria M.</p>
          </div>

          <div className="logo-item">
            <img 
              src="https://media.discordapp.net/attachments/1421651223668461631/1438980072760545381/065a84cd779fc035ff59c8a72a88fb37.jpg?format=webp" 
            />
            <p>Ministério</p>
          </div>

          <div className="logo-item">
            <img 
              src="https://media.discordapp.net/attachments/1421651223668461631/1438980072760545381/065a84cd779fc035ff59c8a72a88fb37.jpg?format=webp" 
            />
            <p>DRSP</p>
          </div>

          <div className="logo-item">
            <img 
              src="https://media.discordapp.net/attachments/1421651223668461631/1438980072760545381/065a84cd779fc035ff59c8a72a88fb37.jpg?format=webp" 
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
