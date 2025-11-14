import React from "react";
import "./rodape.scss";

function Rodape() {
  return (
    <footer className="base">
      <div className="conteudo-base">
        <div className="bloco">
          <h3>Contato</h3>
          <p>Telefone: (11) 9765-5021</p>
          <p>Atendimento: Seg a Sex 08:00 as 17h</p>
         <p>Av. Dona Belmira Marin, 1.515 - Parque Brasil, São Paulo - SP, 04846-010</p>
 <div className="apps">
  <a href="">
  <img className="loguinho"  src="https://static.vecteezy.com/system/resources/previews/017/221/797/original/facebook-logo-transparent-background-free-png.png" alt="" />
  </a>
    <a href="">
 <img className="loguinho" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/413/small_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />
  </a>
   <a href="">
 <img className="loguinho" src="https://static.vecteezy.com/system/resources/previews/018/930/470/original/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.png" alt="" />
 </a>
 </div>
        
        </div>

        <div className="bloco">
          <h3>Serviços</h3>
         <p>Buscar serviços por</p>
      
        </div>

        <div className="bloco">
          <h3>Navegação</h3>
          <p>Noticias</p>
          <p>Serviços</p>
          <p>Quem somos</p>
          <p>Atendimento</p>
        </div>
      </div>

      <p className="creditos">
      © 2025 Raízes Solidarias. Todos os direitos reservados.

      </p>
    </footer>
  );
}

export default Rodape;
