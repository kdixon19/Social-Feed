import './App.css';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import React, { useState } from 'react';


function App() {

   const [entries, setEntries] =  useState([{name: 'Jordan', status: 'Im the luckiest person in the world to have Kristoff as a roommate'}, {name: 'Kristoff', status: 'I sure do love my girlfriend'}])

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
