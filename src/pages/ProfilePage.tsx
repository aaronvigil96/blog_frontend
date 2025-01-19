import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { getAllPostsByUser } from "../api/post";
import PostItem from "../components/PostItem";
import { GetPostType } from "../types/get-post.type";



const ProfilePage = () => {

    const profile = useAuthStore.getState().profile;
    const [posts, setPosts] = useState([]);

    const populatePost = async () => {
        const data = await getAllPostsByUser();
        setPosts(data.data);
    }

    useEffect(() => {
        populatePost();
    },[])

    let name = profile.name;

    return(
        <div>
            <div className="text-white">
                <h2>Hola ¡<span className="font-semibold capitalize">{profile.lastname} {name}</span>!</h2>
                <p>Email: <span className="font-semibold">{profile.email}</span></p>
                <p>Nombre de usuario: <span className="font-semibold">{profile.username}</span></p>
            </div>
            {
                posts ? 
                <div className="flex flex-col gap-4">
                    {posts?.map((post: GetPostType) => (<PostItem post={post} key={post.id}/>))}
                </div>
                :
                null
            }
        </div>
    )
}

export default ProfilePage;