import { Routes, Route } from 'react-router-dom';
import Feelings from 'pages/Feelings';
import Home from './pages/Home';
import Needs from './pages/Needs';
import Songs from './pages/Songs';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="needs" element={<Needs />} />
      <Route path="feelings" element={<Feelings />} />
      <Route path="songs" element={<Songs />} />
    </Routes>
  );
}

export default App;
