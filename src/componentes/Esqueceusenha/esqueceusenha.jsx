import React, { useState } from "react";
import "./EsqueceuSenha.scss";
import nome from "../../images/nome.png";

function EsqueceuSenha() {
  const [codigo, setCodigo] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const novoCodigo = [...codigo];
    novoCodigo[index] = value;
    setCodigo(novoCodigo);
  };

  return (
    <div className="esqueceu-container">
      <div className="esqueceu-card">
        <div className="esqueceu-header">
          <img
            src={nome}
            alt="Logo"
            className="logo"
          />
          <h2>Já tem uma conta?</h2>
        </div>

        <div className="profile-circle">
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Usuário" />
        </div>

        <form className="esqueceu-form">
          <label>Email ou número de Telefone:</label>
          <input type="text" placeholder="Digite seu email ou telefone" />

          <p className="info-text">Enviaremos um código para seu telefone</p>

          <label>Digite o código:</label>
          <div className="codigo-container">
            {codigo.map((num, i) => (
              <input className="inputi"
                key={i}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e.target.value, i)}
              />
            ))}
          </div>

          <a href="#" className="reenviar">Reenviar código</a>

          <button type="submit" className="entrar-btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EsqueceuSenha;
