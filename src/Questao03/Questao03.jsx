import { useState, useEffect } from "react";

const Questao03 = () => {
    //Variavel para armazenar o estado da menor e maior capital
    const [small, setSmall] = useState("")
    const [big, setBig] = useState("")

    //Função assíncrona para buscar os dados
    const Capitals = async () => {
        try {
            //Busca os dados e converte para JSON armazenando em 'data'
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            const data = await response.json()

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
            <h3>- Questão 03</h3>
            <h4>Maior Capital: {big}</h4>
            <h4>Menor Capital: {small}</h4>
        </div>
    )
    }

export default Questao03;
