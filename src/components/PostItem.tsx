import { GetPostType } from "../types/get-post.type";

type PostItemProps = {
    post: GetPostType
}

const PostItem = ({post}:PostItemProps) => {
    const {title, content, createdAt} = post;
    const {username} = post.author || {};

    let timeStamp = Date.parse(createdAt)
    let date = new Date(timeStamp);

    const hour = date.getHours();
    let minutes = date.getMinutes().toString();

    const day = date.getDate();

    if(minutes.length === 1){
        minutes = `0${minutes[0]}`
    }

    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return(
        <div className="bg-white p-4 rounded-md">
            <p className="font-thin uppercase text-sm">General</p>
            <h3 className="font-bold text-md">{title}</h3>
            <p className="text-sm text-justify">{content}</p>
            <p className="text-sm font-thin mt-2">{day}/{month}/{year} {hour}:{minutes}</p>
            {
                username ? <p>Creado por: {username}</p> : null
            }
        </div>
    )
}

export default PostItem;