import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title, rating}) =>{
  const [hasLiked, setHasLiked] = useState(false);

  return(
    <div style={{
      border: '1px solid #4b5362',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#31363f',
      borderRadius: '10px',
      minHeight: '100px',
    }}>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '💖': '🤍'}
      </button>
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
