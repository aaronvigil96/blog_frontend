import PostItem from "../components/PostItem";

const HomePage = () => {
    return(
        <div className="flex flex-col gap-5">
            <PostItem/>
            <PostItem/>
        </div>
    )
}

export default HomePage;