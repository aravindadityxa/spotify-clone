const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <i className="fab fa-spotify fa-2x"></i>
        <span>Spotify</span>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__item active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="sidebar__item">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </div>
        <div className="sidebar__item">
          <i className="fas fa-book"></i>
          <span>Your Library</span>
        </div>
      </div>
      <div className="sidebar__playlists">
        <div className="sidebar__item">
          <i className="fas fa-plus-square"></i>
          <span>Create Playlist</span>
        </div>
        <div className="sidebar__item">
          <i className="fas fa-heart"></i>
          <span>Liked Songs</span>
        </div>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__item">
          <i className="fas fa-globe"></i>
          <span>Tamil</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;