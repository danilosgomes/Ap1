import { useState, useEffect } from "react";

const Questao04 = () => {
    //Variavel para armazenar o estado da menor e maior capital
    const [small, setSmall] = useState("")
    const [big, setBig] = useState("")

    const PromiseCapitals = () => {

        return new Promise((resolve) => {
            //Define um retorno para os dados após 2 segundos
            setTimeout(() => {
                resolve([
                    {capital: ["Dublin"], population: 4994724},
                    {capital: ["Nicosia"], population: 1207361},
                    {capital: ["Madrid"], population: 47351567},
                ])}, 
                2000
            )
        })
    }

    //Função assíncrona para buscar os dados
    const Capitals = async () => {
        try {
            //Armazena os dados resolvidos pela Promise em 'data'
            const data = await PromiseCapitals();

            //Ordena os países pelo tamanho
            const select = data.sort((a, b) => a.population - b.population)

            //Define a menor capital
            setSmall(select[0].capital[0])

            //Define a maior capital
            setBig(select[select.length - 1].capital[0])
        } 

        //Exceções a erro
        catch (error) {
            console.error("Error:", error)
        }
    };

    // Chamada para função 'Capitals' e montar o componente utilizando useeffect
    useEffect(() => {Capitals()}, [])

    // Renderização
    return (
        <div>
            <h3>- Questão 04</h3>
            <h4>Maior Capital: {big}</h4>
            <h4>Menor Capital: {small}</h4>
        </div>
    );
}

export default Questao04;
