import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Logout = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        useAuthStore.getState().logout()
        navigate('/')
    }

    return(
        <button className="bg-red-600 p-2 rounded-md text-white" onClick={handleButton}>
            Logout
        </button>
    )
}

export default Logout;