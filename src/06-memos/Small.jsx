//import {memo} from 'react';

import React from "react"

const Small = React.memo(({value}) => {
    console.log('me volvi a generar :C')
  return (
    <small>
        {value}
    </small>
  )
})

export default Small
