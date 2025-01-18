import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore";
import Logout from "./Logout";

const Navbar = () => {

    const isAuth = useAuthStore(state => state.isAuth);

    return(
        <nav className="p-5">
            <div className="flex justify-between max-w-7xl mx-auto">
            <Link to={'/'} className="text-3xl font-black text-white">BlogApp</Link>
            <div className="flex gap-2">
                {
                    isAuth ? 
                    <>
                        <Link to={'/profile'} className="p-2 border border-white text-white rounded-md">Perfil</Link>
                        <Logout/>
                    </>
                    
                    : 
                    
                    <>
                        <Link to={'/register'} className="p-2 border border-white text-white rounded-md">Registro</Link>
                        <Link to={'/login'} className="p-2 bg-black border border-white rounded-md text-white">Iniciar sesión</Link>
                    </>
                }
            </div>
            </div>
        </nav>
    )
}

export default Navbar;