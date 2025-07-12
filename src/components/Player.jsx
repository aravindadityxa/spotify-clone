const Player = ({ currentSong, isPlaying, onTogglePlay }) => {
  if (!currentSong) return null;

  return (
    <div className="player">
      <div className="player__song-info">
        <img src={currentSong.cover} alt={currentSong.album} />
        <div className="player__song-details">
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
        <button className="player__like">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="player__controls">
        <div className="player__buttons">
          <button className="player__button">
            <i className="fas fa-random"></i>
          </button>
          <button className="player__button">
            <i className="fas fa-step-backward"></i>
          </button>
          <button className="player__button player__button--play" onClick={onTogglePlay}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          <button className="player__button">
            <i className="fas fa-step-forward"></i>
          </button>
          <button className="player__button">
            <i className="fas fa-redo"></i>
          </button>
        </div>
        <div className="player__progress">
          <span>0:00</span>
          <div className="player__progress-bar">
            <div className="player__progress-fill" style={{ width: '30%' }}></div>
          </div>
          <span>{currentSong.duration}</span>
        </div>
      </div>
      <div className="player__volume">
        <i className="fas fa-volume-up"></i>
        <div className="player__volume-bar">
          <div className="player__volume-fill" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Player;