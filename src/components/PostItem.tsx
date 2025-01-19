const PostItem = ({post}) => {
    console.log(post);
    const {title, content, createdAt} = post;
    const {username} = post.author;
    return(
        <div className="bg-white p-4 rounded-md m-4">
            <p className="font-thin uppercase text-sm">General</p>
            <h3 className="font-bold text-md">{title}</h3>
            <p className="text-sm text-justify">{content}</p>
            <p className="text-sm font-thin mt-2">{createdAt}</p>
            <p>Creado por: {username}</p>
        </div>
    )
}

export default PostItem;