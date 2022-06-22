import React from 'react';
import { Item, Image, Icon } from 'semantic-ui-react';
import firebase from '../utils/firebase';
import Post from '../components/Post';

function Posts()
{
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        firebase.firestore().collection("posts").get().then((collectionSnapshot) => {
            const data = collectionSnapshot.docs.map(docSnapshot => {
                const id = docSnapshot.id;
                return{ ...docSnapshot.data(), id};
            })
            setPosts(data);
        }
        )
    },
    [])
    return (
        
                    <Item.Group>
                    {posts.map(post =>{
                    return <Post post={post} key={post.id}/>;
                        
                })}
                    </Item.Group>
                  
    );
}

export default Posts;