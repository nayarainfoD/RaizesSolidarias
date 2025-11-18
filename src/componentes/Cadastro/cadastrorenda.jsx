import React from "react";
import "./cadastrorenda.scss";
import nome from "../../images/nome.png";
import { Link } from 'react-router-dom'
function CadastroRenda() {
  return (
    <div className="renda-container">
      <div className="renda-header">
        <img src={nome} alt="Logo Raízes Solidárias" className="logo" />
        <h1>Cadastre-se</h1>
      </div>

      <form className="renda-form">
        <h2>Rendas:</h2>
        <div className="form-grid">
          <label>Renda declarada no CadÚnico:<input type="text" /></label>
          <label>CNIS:<input type="text" /></label>
          <label>Empregos formais:<input type="text" /></label>
          <label>GFIP:<input type="text" /></label>
          <label>Benefícios previdenciários:<input type="text" /></label>
          <label>RAIS:<input type="text" /></label>
          <label>Auxílios sociais:<input type="text" /></label>
          <label>Seguro-Desemprego:<input type="text" /></label>
        </div>

        <h2>Qualificação profissional ou ocupação:</h2>
        <div className="form-grid">
          <label>Qualificação profissional:<input type="text" /></label>
          <label>Metas de qualificação:<input type="text" /></label>
          <label>Capacidade de trabalho:<input type="text" /></label>
          <label>Níveis de formação:<input type="text" /></label>
          <label>Inserção no mercado:<input type="text" /></label>
          <label>Funções profissionais:<input type="text" /></label>
        </div>

        <h2>Condições do domicílio:</h2>
        <div className="form-grid">
          <div className="sexo-group">
            <p>Tipo de moradia:</p>
            <label><input type="radio" name="moradia" /> Casa própria</label>
            <label><input type="radio" name="moradia" /> Casa alugada</label>
            <label><input type="radio" name="moradia" /> Outra forma de moradia</label>
          </div>

          <div className="sexo-group">
            <p>Estado de conservação:</p>
            <label><input type="radio" name="estado" /> Boa</label>
            <label><input type="radio" name="estado" /> Regular</label>
            <label><input type="radio" name="estado" /> Precária</label>
          </div>

          <div className="sexo-group">
            <p>Existência de serviços básicos:</p>
            <label><input type="checkbox" /> Abastecimento de água</label>
            <label><input type="checkbox" /> Energia elétrica</label>
            <label><input type="checkbox" /> Saneamento básico</label>
            <p className="aviso">* Clicar marca mais de uma opção</p>
          </div>

          <label htmlFor="numeroComodos">
            Número de cômodos:
            <input type="number" id="numeroComodos" name="numeroComodos" />
          </label>
        </div>
        <Link to="/login/cadastro3">
        <button type="submit" className="botao-proximo">Próximo</button>
        </Link>
      </form>
    </div>
  );
}

export default CadastroRenda;
