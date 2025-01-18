import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="p-5">
            <div className="flex justify-between max-w-7xl mx-auto">
            <Link to={'/'} className="text-3xl font-black text-white">BlogApp</Link>
            <div className="flex gap-2">
                <Link to={'/register'} className="p-2 border border-white text-white rounded-md">Registro</Link>
                <Link to={'/login'} className="p-2 bg-black border border-white rounded-md text-white">Iniciar sesión</Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;