import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharapterId from './pages/Charapter_id'
import Index from './pages/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={ <Index/> }/>
          <Route path="/charapters/:id" element={ <CharapterId/> }/>
      </Routes>

    </BrowserRouter>    
  )
}

export default App
