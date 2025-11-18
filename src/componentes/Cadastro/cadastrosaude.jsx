import React from "react";
import "./cadastrosaude.scss";
import nome from "../../images/nome.png";
import { Link } from 'react-router-dom';

function CadastroSaude() {
  return (
    <div className="saude-container">
      <div className="saude-header">
        <img src={nome} alt="Logo Raízes Solidárias" className="logo" />
        <h1>Cadastre-se</h1>
      </div>

      <form className="saude-form">
        <h2>Dependentes no domicílio:</h2>
        <div className="form-section">
          <div className="sexo-group">
            <p>Tipos de dependentes:</p>
            <label><input type="checkbox" /> Crianças</label>
            <label><input type="checkbox" /> Idosos</label>
            <label><input type="checkbox" /> Pessoas com deficiência</label>
            <label><input type="radio" name="dependentes" /> Não há dependentes</label>
          </div>

          <div className="sexo-group">
            <p>Indica necessidade de cuidados?</p>
            <label><input type="radio" name="cuidados" /> Sim</label>
            <label><input type="radio" name="cuidados" /> Não</label>
          </div>

          <div className="sexo-group">
            <p>Impacto no orçamento e nas responsabilidades?</p>
            <label><input type="radio" name="impacto" /> Sim</label>
            <label><input type="radio" name="impacto" /> Não</label>
          </div>
        </div>

        <h2>Estado de Saúde ou Necessidades:</h2>
        <div className="form-section">
          <div className="sexo-group">
            <p>Condição de saúde:</p>
            <label><input type="radio" name="condicao" /> Boa</label>
            <label><input type="radio" name="condicao" /> Regular</label>
            <label><input type="radio" name="condicao" /> Precária</label>
          </div>

          <div className="sexo-group">
            <p>Tem algum tipo de doença?</p>
            <label><input type="radio" name="doenca" /> Sim</label>
            <label><input type="radio" name="doenca" /> Não</label>
          </div>

          <div className="sexo-group">
            <p>Qual?</p>
            <label><input type="checkbox" /> Deficiência física</label>
            <label><input type="checkbox" /> Deficiência sonora</label>
            <label><input type="checkbox" /> Condições crônicas</label>
            <label><input type="checkbox" /> Outro</label>
          </div>

          <div className="sexo-group">
            <p>Auxilia na definição de suporte e atendimento adequado?</p>
            <input type="text" placeholder="Especifique..." />
          </div>
        </div>

        <h2>Precisa acessar sua averiguação de renda?</h2>
        <div className="form-section">
          <div className="sexo-group">
            <p>Você precisa verificar se sua renda declarada confere com os registros oficiais?</p>
            <label><input type="radio" name="verificarRenda" /> Sim</label>
            <label><input type="radio" name="verificarRenda" /> Não</label>
          </div>

          <div className="sexo-group">
            <p>Quer confirmar se seus dados de renda estão corretos?</p>
            <label><input type="radio" name="confirmarRenda" /> Sim</label>
            <label><input type="radio" name="confirmarRenda" /> Não</label>
          </div>

          <div className="sexo-group">
            <p>Está passando por averiguação de renda e precisa acessar suas informações?</p>
            <label><input type="radio" name="acessoRenda" /> Sim</label>
            <label><input type="radio" name="acessoRenda" /> Não</label>
          </div>

          <div className="sexo-group">
            <p>Precisa enviar documentos para comprovar sua renda?</p>
            <label><input type="radio" name="enviarDoc" /> Sim</label>
            <label><input type="radio" name="enviarDoc" /> Não</label>
          </div>
        </div>
        <Link to="/login/cadastro3">
        <button type="submit" className="botao-entrar">Entrar</button>
        </Link>
      </form>
    </div>
  );
}

export default CadastroSaude;
