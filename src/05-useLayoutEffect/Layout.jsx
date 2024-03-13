import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {

  const { counter, decrement, increment } = useCounter(149);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Informacion del Pokemon</h1>
      <hr />

      {
        isLoading
          ? <LoadingMessage />
          : (<PokemonCard
            id={data.id}
            name={data.name}
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ]}
          />)
      }

      {/* <pre>{ JSON.stringify(data,null,2)}</pre> */}

      <h1>{data?.name.toUpperCase()}</h1>

      <button className='btn btn-primary my-2' onClick={() => counter > 1 ? decrement() : null} >Anterior</button>
      <button className='btn btn-primary my-2' onClick={() => increment()}>siguente</button>

    </>

  )
}

