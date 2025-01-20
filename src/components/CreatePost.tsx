import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import { MessageError } from './MessageError';
import { CreatePostType } from '../types/create-post.type';
import { createPost } from '../api/post';
import toast, { Toaster } from 'react-hot-toast';
import { usePostStore } from '../store/postStore';

const CreatePost = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<CreatePostType>();

    const handlePost = async (data:CreatePostType) => {
        try{
            const post = await createPost(data.title, data.content);
            toast.success('Posteado correctamente');
            usePostStore.getState().setHasNewPost(true);
        }catch(err){
            toast.error('Ups, hubo un error');
        }
    }

    return(
        <form className="w-1/2" onSubmit={handleSubmit(handlePost)}>
            <div className="">
                <label className="text-white text-xl block" htmlFor="title">Titulo:</label>
                <input 
                    type="text" 
                    className="w-full h-8 rounded-md pl-2" 
                    id="title"
                    {...register('title', {
                        required: 'El título es obligatorio'
                    })}
                />
                {errors.title && <MessageError>{errors.title?.message?.toString()}</MessageError>}
            </div>
            <div>
                <label className="text-white text-xl block" htmlFor="content">Contenido:</label>
                <TextareaAutosize 
                    className='resize-none w-full rounded-t-md pl-2' 
                    id='content' 
                    minRows={3} 
                    maxRows={6}
                    {...register('content', {
                        required: 'El contenido es obligatorio'
                    })}
                />
                {errors.content && <MessageError>{errors.content?.message?.toString()}</MessageError>}
                <Toaster/>
            </div>
            <button className="w-full bg-red-500 py-2 rounded-b-md" type='submit'>Envíar</button>
        </form>
    )
}

export default CreatePost;