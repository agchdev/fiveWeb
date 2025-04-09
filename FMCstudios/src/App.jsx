import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Plantilla from "./layout/Plantilla"

function App() {

  return (
    <>
      <div className="bg-[url('./assets/noise.jpg')] mix-blend-overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full pointer-events-none z-150	bg-[length:300px] overflow-hidden opacity-50 select-none bg-center translate-y-0 rotate-[0.001deg]"></div>
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
