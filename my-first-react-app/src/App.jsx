import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title, rating}) =>{
  return(
    <div>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
    </div>
  )
}

const App = () => {
  return(
    <div className='card-container'>
      <Card title="Three idiots" rating={10} isCool={true} actors={[{name: "Amir Khan"}]}/>
      <Card title="Inception" rating={10}/>
      <Card title="A silent voice" rating={10}/>
      <Card title="Dune" rating={10}/>
    </div>

  )
}

export default App;
