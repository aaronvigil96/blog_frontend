import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostItem from "../components/PostItem";
import { useAuthStore } from "../store/authStore";
import { getAllPosts } from "../api/post";
import { GetPostType } from "../types/get-post.type";
import EventStream from "./EventStream";

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
            <EventStream/>
            <div className="flex flex-col gap-4">
                {
                    isAuth ? <CreatePost/> : null
                }
                {
                    posts?.map((post: GetPostType) => (<PostItem key={post.id} post={post}/>))
                }
            </div>
        </>
    )
}

export default HomePage;