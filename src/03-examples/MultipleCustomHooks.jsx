import React from 'react'
import { useFetch } from '../hooks'

export const MultipleCustomHooks = () => {

   const {data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/148');

  return (
    <>
    <h1>Informacion del Pokemon</h1>
    <hr />

    { isLoading && <p>Cargando...</p>}
    {/* <pre>{ JSON.stringify(data,null,2)}</pre> */}
    <h1>{data?.name}</h1>
    </>

  )
}

