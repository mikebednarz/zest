import './App.scss';
import Homepage from './pages/Homepage';
import MyRecipes from './pages/MyRecipes';
import EditCard from './pages/EditCard';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/myrecipes' element={<MyRecipes />}/>
          <Route path='/editcard' element={<EditCard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
