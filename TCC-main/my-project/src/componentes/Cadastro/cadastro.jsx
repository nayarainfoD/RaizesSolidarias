import React from "react";
import "./cadastro.scss";
import nome from "../../images/nome.png";


function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-header">
        <img src={nome} alt="Logo Raízes Solidárias" className="logo" />
        <h1>Cadastre-se</h1>
      </div>

      <form className="cadastro-form">
        <h2>Dados pessoais:</h2>

        <div className="form-grid">
          <label>Nome:<input type="text" /></label>
          <label>CPF:<input type="text" /></label>
          <label>Filiação:<input type="text" /></label>
          <label>RG:<input type="text" /></label>
          <label>Data de Nascimento:<input type="date" /></label>
          <label>Número de ID Social:<input type="text" /></label>
          <div className="sexo-group">
            <p>Sexo:</p>
            <label><input type="radio" name="sexo" /> Feminino</label>
            <label><input type="radio" name="sexo" /> Masculino</label>
            <label><input type="radio" name="sexo" /> Personalizado</label>
          </div>
          <label>Crie uma Senha:<input type="password" /></label>
        </div>

        <h2>Endereço</h2>
        <div className="form-grid">
          <label>Rua:<input type="text" /></label>
          <label>Cidade:<input type="text" /></label>
          <label>Número:<input type="text" /></label>
          <label>Município:<input type="text" /></label>
          <label>Bairro:<input type="text" /></label>
          <label>Complemento:<input type="text" placeholder="opcional*" /></label>
        </div>

        <h2>Dados do Domicílio:</h2>
        <div className="form-grid">
          <label>Nome do Responsável familiar:<input type="text" /></label>
          <label>Nome de cada membro:<input type="text" /></label>
          <label>CPF Responsável familiar:<input type="text" /></label>
          <label>Parentesco c/ resp:<input type="text" /></label>
          <label>Total de moradores:<input type="number" /></label>
          <label>Nome e CPF membros:<input type="text" /></label>
          <label>Idades dos integrantes:<input type="text" /></label>
          <label>Escolaridade membros:<input type="text" /></label>
        </div>
<div className="sexo-group">
  <p>Sexo dos membros:</p>
  <div className="opcoes-sexo">
    <label>
      <input type="radio" name="sexo" /> Feminino
    </label>
    <label>
      <input type="radio" name="sexo" /> Masculino
    </label>
    <label>
      <input type="radio" name="sexo" /> Personalizado
    </label>
  </div>
  <p className="aviso">clicar marca mais de uma opção</p>
</div>

        <button type="submit" className="botao-proximo">Próximo</button>
      </form>
    </div>
  );
}

export default Cadastro;
