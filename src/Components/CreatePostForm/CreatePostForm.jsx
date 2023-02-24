import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            status: status
        };
        console.log(newPost)
        props.addNewEntry(newPost)
    
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type = 'text' value={name} onChange ={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <label>Status: </label>
                    <input type = 'text' value = {status} onChange = {(event) => setStatus(event.target.value)}/>
                </div>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default CreatePostForm;