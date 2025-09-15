const Produtos = () => {

    // Objetos de produtos da lista
    const pizzas = [
    'Pizza de Muçarela',
    'Pizza de Chumbo',
    'Pizza de Calabreso',
    'Língua Portuguesa',
    'Pizza de Franguinha'
]

// Iteração da lista de pizzas

const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return (
        <div>
            <h3> Listagem de Produtos</h3>

            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos