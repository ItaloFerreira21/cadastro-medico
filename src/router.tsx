import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFoundPage } from "./pages/NotFound"
import { Doctors } from "./pages/Doctors"



export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/medicos" element={<Doctors />} />

      </Routes>
    </BrowserRouter>

  )
}

