import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostItem from "../components/PostItem";
import { useAuthStore } from "../store/authStore";
import { getAllPosts } from "../api/post";
import { GetPostType } from "../types/get-post.type";
import { usePostStore } from "../store/postStore";

const HomePage = () => {

    const isAuth = useAuthStore.getState().isAuth;

    const {hasNewPost, setHasNewPost} = usePostStore();

    const [posts, setPosts] = useState([]);

    const populatePosts = async () => {
        const posts = await getAllPosts();
        setPosts(posts.data);
        setHasNewPost(false);
    }

    useEffect(() => {
        populatePosts();
    }, []);

    useEffect(() => {
        populatePosts();
    }, [hasNewPost]);

    return(
        <>
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