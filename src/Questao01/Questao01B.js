//Função clássica
function Questao01B({ list }) {
    // Receba lista via props e à mapeia
    const maxElement = list.map((object, i) => {
        //Variavel que identifica o maior elemento dentro da lista mapeada
        const max = Math.max(object.a, object.b, object.c)

        return (
            <div key={i}>
                <h4>
                    Maior elemento do objeto {i} é {max}
                </h4>
            </div>
        );
    });

    // Passa os maiores elementos encontrados
    return (
        <div>
            {maxElement}
        </div>
    );
}

export default Questao01B
