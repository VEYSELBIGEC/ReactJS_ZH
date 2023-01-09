import React from 'react'

const Jsx4 = () => {
    
    const age = 13 ;

  return (

    <div>
        {age >= 18 && <h1>The content for 18 or OLDER</h1>}
        {age > 17 || <h1>The content for 17 or YOUNGER</h1>}
    </div>
  )
}

export default Jsx4