import {useState, useEffect} from 'react'
import axios from 'axios'


const Produtos = () => {

    const [dados, setDados] = useState([]);

    const pegarPizzas = async () => {

        await axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto",
            {withCredentials: true}
        )

        .then((response) => setDados(response.data))
        .catch((error) => console.log(error))

    }

    useEffect(()=>{
        pegarPizzas();
    }, [])

    useEffect(()=>{
        console.log(dados);
    }, [])

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