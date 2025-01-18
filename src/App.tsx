import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { useAuthStore } from "./store/authStore.ts";

function App() {

  const isAuth = useAuthStore(state => state.isAuth);

  return (
    
      <BrowserRouter>
        <Navbar/>
        <main className="max-w-7xl mx-auto mt-5">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
            <Route path="profile" element={<ProfilePage/>}/>
          </Route>
        </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
