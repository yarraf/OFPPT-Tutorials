import React from 'react';
import List from './List';
import Form from './Form';
import Post from './Post';


const App = () =>{
    const articleList = [
        { id: 1, title: 'Article 1' },
        { id: 2, title: 'Article 2' },
    ];

    return (
<>
    <div>
        <h2>Articles</h2>
        <List articles={{articleList}}/>
    </div>

    <div>
        <h2>Add new article</h2>        
        <Form/>
    </div> 

    <div>
        <h2>List posts</h2>        
        <Post/>
    </div> 
    </>
    )
}



export default App;
