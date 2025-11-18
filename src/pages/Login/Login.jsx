import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "./login.scss";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import nome from "../../images/nome.png";


function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-header">
          <img
            src={nome}
            alt="Logo"
            className="logo"
          />
          <h2>Já tem uma conta?</h2>
        </div>

        <div className="profile-circle">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Usuário"
          />
        </div>

        <form className="login-form">
          <label>CPF:</label>
          <input type="text" placeholder="Digite seu CPF" />

          <label>Senha:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="button" className="google-btn">
            <FaGoogle /> Entrar com o Google
          </button>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <p>
            Não tem uma conta? 
          </p>
          <Link to='/login/cadastro' >
            <a>Crie uma!</a>
          </Link>
          <Link to="/eesqueceu">
          <a href="#" className="forgot">
            Esqueci a senha
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
