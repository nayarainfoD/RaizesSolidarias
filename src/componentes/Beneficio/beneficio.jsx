import React from "react";
import "./beneficio.scss";

function Beneficio() {
  return (
    <div className="beneficio-container">
      <section className="beneficio-intro">
        <h1>Auxílio Brasil</h1>
        <p>
          O Auxílio Brasil (hoje Bolsa Família) é destinado às famílias de baixa renda.
          O governo define quem tem direito conforme a renda por pessoa e a composição familiar.
        </p>
        <img
          className="beneficio-foto"
          src="https://fusne.com/wp-content/uploads/2022/11/auxilio-brasil-2023.jpg"
          alt="Auxílio Brasil"
        />
      </section>

      <section className="beneficio-duvidas">
        <h2>👨‍👩‍👧‍👦 Quem tem direito?</h2>
        <p>
          O Auxílio Brasil foi substituído pelo Bolsa Família em 2023, mantendo o mesmo
          objetivo de transferência de renda às famílias de baixa renda.
        </p>
      </section>

      <section className="beneficio-duvidas">
        <h2>🧾 Como se cadastrar</h2>
        <p>
          O cadastro é feito no CadÚnico, no CRAS da cidade, levando documentos de todos os moradores.
          Após a análise, o benefício é pago pela Caixa Econômica Federal.
        </p>
      </section>

      <section className="beneficio-noticias">
        <div className="beneficio-card">
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p3/6571991-telefone-desenho-ilustracao-gratis-vetor.jpg"
            alt="Atendimento"
          />
          <p>Outros Canais de Atendimento</p>
        </div>

        <div className="beneficio-card">
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/9954017-duvidas-e-pensamentos-do-icone-isolado-simbolo-ilustracao-vetor.jpg"
            alt="Perguntas Frequentes"
          />
          <p>Perguntas Frequentes</p>
        </div>
      </section>
    </div>
  );
}

export default Beneficio;
