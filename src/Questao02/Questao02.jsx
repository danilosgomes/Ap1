import { useState } from "react";

const Questao02 = () => {
  //Variavel para armazenar o estado do pokemon
  const [rotate, setRotate] = useState()

  //Variavel para armazenar as imagens
  const FrontPikachu = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  const BackPikachu = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

  //Função para alterar imagem
  function turn() {
    setRotate(!rotate);
  }

  return (
    <div>
      <h3>- Questão 02</h3>
      <img
        //Operador if e else para caso rotate seja 'true' ou 'false'
        src={rotate ? BackPikachu : FrontPikachu}
        alt="Pikachu"
        width="240px"
        border="2px"
        solid
        black
      />
      <h3>
        {/* //Botão paara utilizar a função de alterar imagem */}
        <button onClick={turn}>Virar</button>
      </h3>
    </div>
  );
};

export default Questao02
