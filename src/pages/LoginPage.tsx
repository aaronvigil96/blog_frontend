import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MessageError } from "../components/MessageError";

const LoginPage = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const loginUser = () => {
        console.log('Usuario logeado');
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
                            {errors.email && (<MessageError>{errors.email?.message?.toString()}</MessageError>)}
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
                            {errors.password && (<MessageError>{errors.password?.message?.toString()}</MessageError>)}
                        </div>
                        
                    </div>
                    <p className="font-thin">¿No tienes cuenta? <Link to={'/register'} className="font-bold hover:text-gray-600">Registrate</Link></p>
                    <button type="submit" className="py-3 bg-blue-600 w-full text-center rounded-sm font-bold text-gray-200 text-xl">Crear</button>
            </div>
        </form>
    )
}

export default LoginPage;