import { useAuthStore } from "../store/authStore";



const ProfilePage = () => {

    const profile = useAuthStore.getState().profile;

    let name = profile.name;

    return(
        <div className="text-white">
            <h2>Hola ¡<span className="font-semibold capitalize">{profile.lastname} {name}</span>!</h2>
            <p>Email: <span className="font-semibold">{profile.email}</span></p>
            <p>Nombre de usuario: <span className="font-semibold">{profile.username}</span></p>
        </div>
    )
}

export default ProfilePage;