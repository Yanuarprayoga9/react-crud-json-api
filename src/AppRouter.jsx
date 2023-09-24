import App from './App.jsx'
import Add from './Add.jsx'
import Edit from './Edit.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter