import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuestionAdd from './pages/QuestionAdd';
import Questionnaire from './pages/Questionnaire';
import Ranking from './pages/Ranking';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/questionnaire' element={<Questionnaire />} />
          <Route path='/add-question' element={<QuestionAdd />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
