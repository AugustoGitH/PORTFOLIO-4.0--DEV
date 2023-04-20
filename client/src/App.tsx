import { useState } from 'react'
import { Routes, Route } from "react-router-dom"


import PageNotFound from './pages/NotFound'
import PageHome from "./pages/Home"
import PageLogin from "./pages/Login"
import PagePainel from "./pages/Painel"

import PrivateRouter from './components/auth/PrivateRoute'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<PageHome/>}/>
        <Route path="/login" element={<PageLogin/>}/>
        <Route path="/painel" element={
          <PrivateRouter redirect='/'>
            <PagePainel/>
          </PrivateRouter>
        }/>
      </Routes>
    </div>
  )
}

export default App
