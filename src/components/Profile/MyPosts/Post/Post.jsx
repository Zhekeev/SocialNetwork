import post from './Post.module.css';

const Post = (props) => {
    return (
            <div className={post.item}>
                <div>
                    <img src="https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg"/>
                    {props.message}
                </div>
            </div>
    )
}

export default Post;