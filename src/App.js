import './App.css';
import PostList from './Components/PostList/PostList';

function App() {

   let sampleData = [{name: 'Jordan', status: 'Im the coldest to ever do it'}, {name: 'Kristoff', status: 'Aija my one and only'}]

  return (
    <div className="App">
    <PostList sampleData = {sampleData} />
    </div>
  );
}

export default App;
