import React from "react";
import "./duvidas.scss";

function Duvida() {
  return (
      <section className="beneficio-duvidas">
        <h2>Dúvidas Frequentes</h2>

        <div className="beneficio-perguntas">
          <div className="beneficio-pergunta">
            <p>Como faço para me cadastrar no Cadastro Único em São Paulo?</p>
          </div>

          <div className="beneficio-pergunta">
            <p>Quem tem direito ao Bolsa Família em SP?</p>
          </div>
        </div>
      </section>
  );
}

export default Duvida;
