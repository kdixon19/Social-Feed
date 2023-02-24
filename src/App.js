import './App.css';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import React, { useState } from 'react';


function App() {

   const [entries, setEntries] =  useState([{name: 'Jordan', status: 'Im the coldest to ever do it'}, {name: 'Kristoff', status: 'Aija my one and only'}])

   function addNewEntry(entry){
    
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }  

  return (
    <div className="App">
    <CreatePostForm addNewEntry = {addNewEntry}/>
    <PostList sampleData = {entries} />
    </div>
  );
}

export default App;
