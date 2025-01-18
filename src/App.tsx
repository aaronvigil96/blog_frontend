import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {

  return (
    
      <BrowserRouter>
        <Navbar/>
        <main className="max-w-7xl mx-auto mt-5">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
