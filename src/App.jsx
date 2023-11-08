import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import PublicHomePage from "./views/pages/PublicHomePage";

function App() {

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicHomePage />} exact />
          </Routes>
      </BrowserRouter>

  )
}

export default App
