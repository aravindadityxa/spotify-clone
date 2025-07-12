import { useState } from 'react';

const Content = ({ onPlaySong }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Tamil songs data
  const tamilSongs = [
    {
      id: 1,
      title: "Why This Kolaveri Di",
      artist: "Anirudh Ravichander",
      album: "3",
      duration: "4:19",
      cover: "https://i.ytimg.com/vi/YR12Z8f1Dh8/maxresdefault.jpg",
      category: "tamil-top-50"
    },
    {
      id: 2,
      title: "Chellamma",
      artist: "Anirudh Ravichander",
      album: "Doctor",
      duration: "3:45",
      cover: "https://i.ytimg.com/vi/3KJ5mFYqMfY/maxresdefault.jpg",
      category: "anirudh-hits"
    },
    {
      id: 3,
      title: "Arabic Kuthu",
      artist: "Anirudh Ravichander",
      album: "Beast",
      duration: "4:39",
      cover: "https://i.ytimg.com/vi/9G5Qc-7QqJ8/maxresdefault.jpg",
      category: "tamil-top-50"
    },
    {
      id: 4,
      title: "Vaathi Coming",
      artist: "Anirudh Ravichander",
      album: "Master",
      duration: "3:48",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      category: "anirudh-hits"
    },
    {
      id: 5,
      title: "Halamithi Habibo",
      artist: "Anirudh Ravichander",
      album: "Beast",
      duration: "3:26",
      cover: "https://i.ytimg.com/vi/8yKXQfC5b-w/maxresdefault.jpg",
      category: "new-tamil"
    },
    {
      id: 6,
      title: "Megham Karukatha",
      artist: "Dhanush",
      album: "Thiruchitrambalam",
      duration: "4:50",
      cover: "https://i.ytimg.com/vi/7iQh6J_VX3k/maxresdefault.jpg",
      category: "romantic-tamil"
    },
    // Add 44 more Tamil songs following the same structure
    // ...
  ];

  const categories = [
    { id: 'all', name: 'All Tamil Songs' },
    { id: 'tamil-top-50', name: 'Tamil Top 50' },
    { id: 'anirudh-hits', name: 'Anirudh Hits' },
    { id: 'new-tamil', name: 'New Tamil Releases' },
    { id: 'romantic-tamil', name: 'Romantic Tamil' }
  ];

  const filteredSongs = activeCategory === 'all' 
    ? tamilSongs 
    : tamilSongs.filter(song => song.category === activeCategory);

  return (
    <div className="content">
      <div className="content__header">
        <div className="content__categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`content__category ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="content__playlists">
        <h2>{categories.find(c => c.id === activeCategory)?.name || 'All Tamil Songs'}</h2>
        <div className="content__grid">
          {filteredSongs.map(song => (
            <div key={song.id} className="content__card" onClick={() => onPlaySong(song)}>
              <div className="content__card-image">
                <img src={song.cover} alt={song.album} />
                <button className="content__card-play">
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <h3>{song.title}</h3>
              <p>{song.artist} • {song.album}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;