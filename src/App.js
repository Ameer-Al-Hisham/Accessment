import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Creatorr from './components/Creatorr';
import Homef from './components/Homef';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Content />
      <Routes>
      <Route path="/" element={<Homef />}>/</Route>
      <Route path="/add" element={<Creatorr />}>/</Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
