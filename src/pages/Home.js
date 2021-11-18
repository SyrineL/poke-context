import React, { useState, useEffect } from 'react';

function Home() {
    const [pokemon, setPokemon] = useState(null);
    const [id, setId] = useState(1);
  

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data =>
            setPokemon(data )
        )
    }, [id]);

    function handleClick() {
        let min = 1
        let max = 151

        let id = Math.floor(Math.random() *( max - min + 1) + min)
        setId(id)
    }


  return (
        <div className="bg-dark">
            <div className="d-flex flex-wrap ">     
                {pokemon === null ? <p> pas de poke </p> :
            <div className="card m-3">
                <div>
                    <img className="rounded-3 h-100 bg-dark border-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
                </div>
            <div className="card-body text-light bg-dark border border-light">
                <p>Name : {pokemon.name}</p>
                <p>Height : {pokemon.height}</p>
                <p>Weight : {pokemon.weight}</p>
                <p>Type : </p> 
                <ul>
                    {pokemon.types.map(type => 
                        <li>{type.type.name}</li>
                    )}
                </ul>
            </div>
            </div>}
            
            </div>
                <button className="btn btn-secondary ms-5 mb-5" onClick={()=>handleClick()}>Show random Pokemon !</button>
        </div>
	);
}



// class Home extends Component {
//     constructor() {
//         super()
    
//         this.state = {
//           pokemons: []
//         }
//       }
        
//       render() {
//           const [count, setCount] = useState();
//           const [user, setUser] = useState({name: pokemons})
          
    //     useEffect(() => { {
    //         fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //         .then(res => res.json())
    //         .then(data =>
    //         this.setState({ pokemons: [data, ...this.state.pokemons] })
    //         )
    //     }console.log("S'affiche après chaque mise à jour du state 'count' ou 'user'.")
    //     }, [count, user]);

        

    //     useEffect(() => { {
    //         if(this.state.pokemons) {
    //             this.state.pokemons.forEach(pokemons => (
    //               this.useEffect(pokemons)
    //             ))
    //           }
    //     }
    //     console.log("S'affiche une fois après le montage du composant.")
    //    }, []);
//         return (
//             <div>
//                 HOME
//             </div>
//         );
//     }
// }

export default Home;