import React from 'react';
import { List } from 'semantic-ui-react';
import 'firebase/firestore';
import firebase from '../utils/firebase';

function Topics()
{
    const [topics, setTopics] = React.useState([]);
    React.useEffect(() =>
    {
        firebase
            .firestore()
            .collection('topics')
            .get()
            .then((collectionSnapshot) => 
            {
                const data = collectionSnapshot.docs.map(
                (doc) => 
                    {
                    return doc.data();
                    }
                );
                setTopics(data);    
            }

            );
    }, []);
    return ( 
    <List animated selection>
        {topics.map((topic) =>{
        return <List.Item key={topic.name}>{topic.name}</List.Item>;
    })}

    </List>
    );
}

export default Topics;