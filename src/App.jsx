import { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Player from './components/Player';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Content onPlaySong={handlePlaySong} />
      </div>
      <Player 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        onTogglePlay={togglePlay} 
      />
    </div>
  );
}

export default App;