import Post from "../PostForm/Post";
import LikeAndDislike from "../LikeandDislike/LikeandDislike";

const PostList = (props) => {
    return ( 
        <table>
            <tbody>
                {props.sampleData.map((data) => {
                    return (
                        <tr>
                            <Post name = {data.name} status = {data.status} />
                            <LikeAndDislike />
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;