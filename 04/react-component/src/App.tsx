import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer';
import Count from './components/Count';
import Count2 from "./components/Count2";
import './App.css'

function App() {
  const [theme, setTheme] = useState<string>("basic");


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count2/>
      <Footer theme={ theme} />
    </div>
  )
}

export default App
