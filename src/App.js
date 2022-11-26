import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Questionnaire from './pages/Questionnaire';
import Home from './pages/Home';
import Ranking from './pages/Ranking';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/questionnaire' element={<Questionnaire />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
