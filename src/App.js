import "./Style.css"
import Questao01A from "./Questao01/Questao01A";
import Questao02 from "./Questao02/Questao02";
import Questao03 from "./Questao03/Questao03";
import Questao04 from "./Questao04/Questao04";
import Questao05 from "./Questão05/Questao05";

function App() {
  return (
    <div>
      <h1>Avaliação 1 - WEb</h1>
      <h2>Aluno: Danilo dos Santos Gomes</h2>
      <br />
      <Questao01A /> <br />
      <Questao02 /> <br />
      <Questao03 /> <br />
      <Questao04 /> <br />
      <Questao05 />
    </div>
  );
}

export default App;
