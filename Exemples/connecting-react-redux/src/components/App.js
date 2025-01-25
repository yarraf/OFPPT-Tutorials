import React from 'react';
import List from './List';
import Form from './Form';


const App = () =>{
    const articleList = [
        { id: 1, title: 'Article 1' },
        { id: 2, title: 'Article 2' },
    ];

    return (
<>
    <div>
        <h2>Articles</h2>
        <List/>
    </div>

    <div>
        <h2>Add new article</h2>        
        <Form />
    </div> 
    </>
    )
}



export default App;
