import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MessageError } from "../components/MessageError";
import { RegisterType } from "../types/register.type";
import { getProfile, registerUser } from "../api/auth";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import toast, { Toaster } from "react-hot-toast";


const RegisterPage = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useForm<RegisterType>();
    const [error, setError] = useState('');

    const setToken = useAuthStore(state => state.setToken);
    const setProfile = useAuthStore(state => state.setProfile);

    const navigate = useNavigate();

    const createUser = async (data:RegisterType) => {
        try{
            const isUser = await registerUser(data.email,data.password,data.lastname,data.name,data.username);
            setToken(isUser.data.token);
            const profile = await getProfile();
            setProfile(profile.data);
            toast.success('Usuario creado con éxito');
            navigate('/')
        }catch(err){
            setError('El email o el username ya está en uso');
            toast.error('Email o username ya en uso');
        }
    }

    const passwordWatch = watch('password');

    return(
        <form className="max-w-96 bg-slate-100 p-4 rounded-md shadow-md mx-auto" onSubmit={handleSubmit(createUser)}>
            <h2 className="text-center text-2xl font-bold uppercase">Registro</h2>
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-xl font-semibold">Información Personal</h3>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label className="block font-thin" htmlFor="name">Nombre:</label>
                            <input 
                                className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                type="text" 
                                id="name"
                                {...register('name', {
                                    required: 'El nombre es obligatorio'
                                })}
                            />
                            {errors.name && <MessageError>{errors.name?.message?.toString()}</MessageError>}
                        </div>
                        <div>
                            <label className="block font-thin" htmlFor="lastname">Apellido:</label>
                            <input 
                                className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                id="lastname" 
                                type="text"
                                {...register('lastname', {
                                    required: 'El apellido es obligatorio'
                                })}
                            />
                            {errors.lastname && <MessageError>{errors.lastname?.message?.toString()}</MessageError>}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Información de contacto</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div>
                                <label className="block font-thin" htmlFor="email">Email:</label>
                                <input 
                                    className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                    id="email" 
                                    type="email"
                                    {...register('email', {
                                        required: 'El email es obligatorio'
                                    })}
                                />
                                {errors.email && <MessageError>{errors.email?.message}</MessageError>}
                            </div>
                            <div>
                                <label className="block font-thin" htmlFor="username">Nombre de usuario:</label>
                                <input 
                                    className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                    id="username" 
                                    type="text"
                                    {...register('username', {
                                        required: 'El nombre de usuario es obligatorio'
                                    })}
                                />
                                {errors.username && <MessageError>{errors.username?.message}</MessageError>}
                            </div>
                            <div>
                                <label className="block font-thin" htmlFor="password">Contraseña:</label>
                                <input 
                                    className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                    id="password" 
                                    type="password"
                                    {...register('password', {
                                        required: 'La contraseña es obligatoria'
                                    })}
                                />
                                {errors.password && <MessageError>{errors.password?.message}</MessageError>}
                            </div>
                            <div>
                                <label className="block font-thin" htmlFor="repassword">Repetí la contraseña:</label>
                                <input 
                                    className="w-full h-8 border border-neutral-400 rounded-sm pl-2" 
                                    id="repassword" 
                                    type="password"
                                    {...register('repassword', {
                                        required: 'La confirmación de la contraseña es obligatoria',
                                        validate: (value) => value === passwordWatch || "las contraseñas no coinciden"
                                    })}
                                />
                                {errors.repassword && <MessageError>{errors.repassword?.message}</MessageError>}
                            </div>
                            
                        </div>
                        <p className="font-thin">¿Ya tienes cuenta? <Link to={'/login'} className="font-bold hover:text-gray-600">Inicia sesión</Link></p>
                        <Toaster/>
                        <button className="py-3 bg-blue-600 w-full text-center rounded-sm font-bold text-gray-200 text-xl">Crear</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegisterPage;