
import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({id, name, sprites}) => {

  const h2Ref = useRef();

  useLayoutEffect(() => {

    const { height, width}= h2Ref.current.getBoundingClientRect()
    setBoxSize({height,width});

  }, [id, name])

  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  return (
    <section style={{height:200 }} >
        <h2
        ref = {h2Ref}
        style={{ display: 'flex'}} 
        className='text-capitalize'>#{id} - {name}</h2>
        
        {/* Imagenes*/}
        
        <div>
            {
                sprites.map(sprite =>(
                    <img key={sprite} src={ sprite} alt={name}/>
                ))
            }
        </div>
        <code>{JSON.stringify(boxSize)}</code>
    </section>
  )
}
