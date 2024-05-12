import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFoundPage } from "./pages/NotFound"
import { Doctors, } from "./pages/Doctors"
import { Pacientes, } from "./pages/Patients"
import { Consultas } from "./pages/Consultation"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/medicos" element={<Doctors />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/consultas" element={<Consultas />} />
      </Routes>
    </BrowserRouter>

  )
}

