import React from "react";

export function Footer() {
    return (
      <footer className="mt-24 ml-2 md:ml-0 md:mt-32 lg:mt-28">
        <div className="footer-grid md:grid block">
          <div className="footer-info mb-4 md:mb-0">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Sobre o Site</h3>
            </div>
  
            <div>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                odit magni id veritatis natus fugiat facilis perferendis aliquid.
              </p>
            </div>
          </div>
  
          <div className="footer-info mb-4 md:mb-0">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Serviço de Atendimento</h3>
            </div>
            <ul>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Contato</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Reembolso/Troca</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Codigo de Desconto</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Lista de Desejos</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Produtos Especiais</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Mapa do Site</a>
              </p>
            </ul>
          </div>
  
          <div className="footer-info mb-4 md:mb-0">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Informações</h3>
            </div>
            <ul>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Sobre nos</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Entrega</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Política de Privacidade</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">Suporte</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors">
                <a href="">Rastreamento de Pedido</a>
              </p>
            </ul>
          </div>
  
          <div className="footer-info mb-4 md:mb-0">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Redes Sociais</h3>
            </div>
  
            <ul>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="https://github.com/Alerrando">Github</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="https://www.linkedin.com/in/alerrando-breno-656aa8188/">Linkedin</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="mailto:alerrando2@gmail.com">Email</a>
              </p>
            </ul>
          </div>
  
          <div className="footer-info mb-0">
            <div>
              <h3 className="text-lg md:text-xl font-bold">Contatos</h3>
            </div>
            <ul>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 pt-2">
                291 South 21th Street, Suite 721 New York
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">(18) 1234-5678</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">info@seusite.com</a>
              </p>
              <p className="text-base md:text-lg font-Rokkitt opacity-70 hover:opacity-100 transition-colors pt-2">
                <a href="">seusite.com</a>
              </p>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  