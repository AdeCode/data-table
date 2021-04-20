import logo from './logo.svg';
import './App.css';
import NavBar from './components/layout/navbar';
import {Table} from './components/Table';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div clasName="container mx-auto">
        <Table />
      </div>
    </div>
  );
}

export default App;
