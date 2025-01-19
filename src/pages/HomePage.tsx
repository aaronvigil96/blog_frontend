import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostItem from "../components/PostItem";
import { useAuthStore } from "../store/authStore";
import { getAllPosts } from "../api/post";

const HomePage = () => {

    const isAuth = useAuthStore.getState().isAuth;

    const [posts, setPosts] = useState([]);

    const populatePosts = async () => {
        const posts = await getAllPosts();
        setPosts(posts.data);
    }

    useEffect(() => {
        populatePosts();
    }, []);

    return(
        <>
            <div className="flex flex-col gap-2">
                {
                    isAuth ? <CreatePost/> : null
                }
                {
                    posts?.map((post) => (<PostItem post={post} key={post.id}/>))
                }
            </div>
        </>
    )
}

export default HomePage;