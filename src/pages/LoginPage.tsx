import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MessageError } from "../components/MessageError";
import { getProfile, loginRequest } from "../api/auth";
import { LoginType } from "../types/login.type";
import { useAuthStore } from "../store/authStore";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {

    const navigate = useNavigate();

    const setToken = useAuthStore(state => state.setToken);
    const setProfile = useAuthStore(state => state.setProfile)

    const { register, handleSubmit, formState: {errors} } = useForm<LoginType>();

    const loginUser = async ({email,password}:LoginType) => {
        try{
            const user = await loginRequest(email, password);
            setToken(user.data.token);
            const profile = await getProfile();
            setProfile(profile.data);
            toast.success('Iniciaste sesión correctamente');
            setTimeout(() => {
                navigate('/')
            }, 500)
        }catch(err){
            toast.error('Las credenciales son incorrectas');
        }
    }

    return(
        <form className="max-w-96 bg-slate-100 p-4 rounded-md shadow-md mx-auto" onSubmit={handleSubmit(loginUser)}>
            <h2 className="text-center text-2xl font-bold uppercase">Inicia sesión</h2>
            <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div>
                            <label className="max-w-max block font-thin" htmlFor="email">Email:</label>
                            <input 
                                className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                id="email" 
                                type="email"
                                {...register('email', {
                                    required: 'El email es obligatorio'
                                })}
                            />
                            {errors.email && (<MessageError>{errors.email?.message}</MessageError>)}
                        </div>
                        <div>
                            <label className="max-w-max block font-thin" htmlFor="password">Contraseña:</label>
                            <input 
                                className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                id="password" 
                                type="password"
                                {...register('password', {
                                    required: 'La contraseña es obligatoria'
                                })}
                            />
                            {errors.password && (<MessageError>{errors.password?.message}</MessageError>)}
                            <Toaster/>
                        </div>
                        
                    </div>
                    <p className="font-thin">¿No tienes cuenta? <Link to={'/register'} className="font-bold hover:text-gray-600">Registrate</Link></p>
                    <button type="submit" className="py-3 bg-blue-600 w-full text-center rounded-sm font-bold text-gray-200 text-xl">Iniciar sesión</button>
            </div>
        </form>
    )
}

export default LoginPage;