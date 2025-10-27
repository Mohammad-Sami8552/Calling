import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/home';
import RoomPage from './pages/Room/room';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element= {<RoomPage/>} />
    </Routes>
  );
}

export default App;
