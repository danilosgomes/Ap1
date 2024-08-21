import Questao01B from "./Questao01B";

//Arrow function
const Questao01A = () => {

    //Objeto lista
    const list = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40},
    ];

    //Redenriza os maiores elementos
    return (
      <div>
        <h3>- Questão 01</h3>
        {/* Chamada do componente Questao01B passando como parâmetro o objeto lista via props */}
        <Questao01B list={list} />
      </div>
    );
}

export default Questao01A;