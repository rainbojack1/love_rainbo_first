import { useState } from 'react'
import loveRainboLogo from './assets/love-rainbo-icon.jpg'
import loveRainboTransparentLogo from './assets/love-rainbo-icon-transparent.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='background-container'>
    <div>
      <div>
       <a href="https://react.dev" target="_blank">
       <img src={loveRainboLogo} className="logo love rainbo" alt="Love Rainbo logo" />
       <img src={loveRainboTransparentLogo} className="logo love rainbo" alt="Love Rainbo transparent logo" />
        </a>
      </div>
      <h1>Welcome to Love Rainbo</h1>
      <h3>We offer consulting, task assisting, and other various services.</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </div>
  )
}

export default App
