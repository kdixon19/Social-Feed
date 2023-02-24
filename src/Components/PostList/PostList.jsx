import Post from "../PostForm/Post";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const PostList = (props) => {
    return ( 
        <table>
            <tbody>
                {props.sampleData.map((data) => {
                    return (
                        <tr>
                            <Post name = {data.name} status = {data.status} />
                            <LikeButton />
                            <DislikeButton />
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;