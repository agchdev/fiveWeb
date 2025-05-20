import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Plantilla from "./layout/Plantilla"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Plantilla />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
