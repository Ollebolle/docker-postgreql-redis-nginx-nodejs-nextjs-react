import React from 'react'
import Navbar from '../layout/navbar/navbar'

const banana = () => {
  console.log('fetching stuff')
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

export default ({title = 'How tight is this next.js thing? About'}) => (
  <div>
    <Navbar />
    <h2>{title}</h2>
    <button onClick={ banana }>Button</button>
  </div>
)
