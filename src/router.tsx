import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFoundPage } from "./pages/NotFound"
import { Medicos } from "./pages/medicos"


export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/medicos" element={<Medicos />} /> 
      </Routes>
    </BrowserRouter>

  )
}

