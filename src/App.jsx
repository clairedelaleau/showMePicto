import { Routes, Route } from 'react-router-dom';
import Feelings from 'pages/Feelings';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from './pages/Home';
import Needs from './pages/Needs';
import Songs from './pages/Songs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/needs" element={<Needs />} />
        <Route path="/feelings" element={<Feelings />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
