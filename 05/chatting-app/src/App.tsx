import Chatting from './components/Chatting'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Chatting/>
      </ErrorBoundary>
    </div>
  )
}

export default App
