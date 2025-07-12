// Content.jsx
import { useState } from 'react';

const Content = ({ onPlaySong }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // 30 Tamil Songs with real cover arts
  const tamilSongs = [
    {
      id: 1, title: "Why This Kolaveri Di", artist: "Anirudh Ravichander", 
      album: "3", duration: "4:19", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/YR12Z8f1Dh8/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      id: 2, title: "Chellamma", artist: "Anirudh Ravichander", 
      album: "Doctor", duration: "3:45", category: "tamil-anirudh",
      cover: "https://i.ytimg.com/vi/3KJ5mFYqMfY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 3, title: "Arabic Kuthu", artist: "Anirudh Ravichander", 
      album: "Beast", duration: "4:39", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/9G5Qc-7QqJ8/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      id: 4, title: "Vaathi Coming", artist: "Anirudh Ravichander", 
      album: "Master", duration: "3:48", category: "tamil-anirudh",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
      id: 5, title: "Halamithi Habibo", artist: "Anirudh Ravichander", 
      album: "Beast", duration: "3:26", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/8yKXQfC5b-w/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      id: 6, title: "Megham Karukatha", artist: "Dhanush", 
      album: "Thiruchitrambalam", duration: "4:50", category: "tamil-romantic",
      cover: "https://i.ytimg.com/vi/7iQh6J_VX3k/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
      id: 7, title: "Jalabulajangu", artist: "Anirudh Ravichander", 
      album: "Don", duration: "3:22", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/4P8dK1U9Q7k/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
      id: 8, title: "Private Party", artist: "Anirudh Ravichander", 
      album: "Don", duration: "3:20", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/8wDB3QO7VXo/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
      id: 9, title: "Bae", artist: "Anirudh Ravichander", 
      album: "Don", duration: "3:56", category: "tamil-romantic",
      cover: "https://i.ytimg.com/vi/7W6UbCHQ0K4/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    {
      id: 10, title: "Once Upon a Time", artist: "Anirudh Ravichander", 
      album: "Vikram", duration: "2:23", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/OKBMCL_-rNY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    // Additional 20 Tamil songs...
    {
      id: 11, title: "Dippam Dappam", artist: "Anirudh Ravichander", 
      album: "Kaathuvaakula Rendu Kaadhal", duration: "3:29", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/vh7j8ZvYfWI/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    },
    {
      id: 12, title: "Two Two Two", artist: "Anirudh Ravichander", 
      album: "Kaathuvaakula Rendu Kaadhal", duration: "4:02", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/1H7a2Vf5PqU/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    },
    {
      id: 13, title: "Bloody Sweet", artist: "Anirudh Ravichander", 
      album: "Leo", duration: "3:46", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/6hQ6KFlmN9U/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
    },
    {
      id: 14, title: "Naa Ready", artist: "Anirudh Ravichander", 
      album: "Leo", duration: "4:06", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/4yZ5w46K7q4/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
    },
    {
      id: 15, title: "Badass", artist: "Anirudh Ravichander", 
      album: "Leo", duration: "3:49", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/1ZR6Iuzs8Nk/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
    },
    {
      id: 16, title: "Vikram Title Track", artist: "Anirudh Ravichander", 
      album: "Vikram", duration: "3:38", category: "tamil-top",
      cover: "https://i.ytimg.com/vi/OKBMCL_-rNY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
    },
    {
      id: 17, title: "Porkanda Singam", artist: "Anirudh Ravichander", 
      album: "Vikram", duration: "4:36", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/OKBMCL_-rNY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
    },
    {
      id: 18, title: "Pathala Pathala", artist: "Anirudh Ravichander", 
      album: "Vikram", duration: "3:30", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/OKBMCL_-rNY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3"
    },
    {
      id: 19, title: "Enjoy Enjaami", artist: "Dhee, Arivu", 
      album: "Enjoy Enjaami", duration: "4:39", category: "tamil-folk",
      cover: "https://i.ytimg.com/vi/0U0L4uT0btQ/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3"
    },
    {
      id: 20, title: "Mehabooba", artist: "Ananya Bhat", 
      album: "KGF Chapter 2", duration: "3:33", category: "tamil-romantic",
      cover: "https://i.ytimg.com/vi/8Y-5p2kY9H0/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3"
    },
    {
      id: 21, title: "Dharala Prabhu", artist: "Anirudh Ravichander", 
      album: "Etharkkum Thunindhavan", duration: "3:59", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/2Yy3_6TuSgY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3"
    },
    {
      id: 22, title: "Vaathi Kabaddi", artist: "Anirudh Ravichander", 
      album: "Master", duration: "3:41", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3"
    },
    {
      id: 23, title: "Andha Kanna Paathakka", artist: "Anirudh Ravichander", 
      album: "Master", duration: "3:14", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3"
    },
    {
      id: 24, title: "Quit Pannuda", artist: "Anirudh Ravichander", 
      album: "Doctor", duration: "3:40", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/3KJ5mFYqMfY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3"
    },
    {
      id: 25, title: "So Baby", artist: "Anirudh Ravichander", 
      album: "Doctor", duration: "3:12", category: "tamil-romantic",
      cover: "https://i.ytimg.com/vi/3KJ5mFYqMfY/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3"
    },
    {
      id: 26, title: "Kutty Story", artist: "Anirudh Ravichander", 
      album: "Master", duration: "3:33", category: "tamil-romantic",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3"
    },
    {
      id: 27, title: "Rowdy Baby", artist: "Yuvan Shankar Raja", 
      album: "Maari 2", duration: "4:35", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/1y9ZQYTHUB8/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3"
    },
    {
      id: 28, title: "Local Boys", artist: "Yuvan Shankar Raja", 
      album: "Maari 2", duration: "3:13", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/1y9ZQYTHUB8/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3"
    },
    {
      id: 29, title: "Vaathi Raid", artist: "Anirudh Ravichander", 
      album: "Master", duration: "3:48", category: "tamil-party",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3"
    },
    {
      id: 30, title: "Kutti Story", artist: "Anirudh Ravichander", 
      album: "Master", duration: "3:33", category: "tamil-romantic",
      cover: "https://i.ytimg.com/vi/6T7pUEZfgdA/maxresdefault.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3"
    }
  ];

  // 30 English Songs with real cover arts
  const englishSongs = [
    {
      id: 31, title: "Blinding Lights", artist: "The Weeknd", 
      album: "After Hours", duration: "3:20", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3"
    },
    {
      id: 32, title: "Shape of You", artist: "Ed Sheeran", 
      album: "÷", duration: "3:53", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3"
    },
    {
      id: 33, title: "Stay", artist: "The Kid LAROI, Justin Bieber", 
      album: "F*CK LOVE 3: OVER YOU", duration: "2:21", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273c59196f35755de7a1107e206",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3"
    },
    {
      id: 34, title: "good 4 u", artist: "Olivia Rodrigo", 
      album: "SOUR", duration: "2:58", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3"
    },
    {
      id: 35, title: "Levitating", artist: "Dua Lipa", 
      album: "Future Nostalgia", duration: "3:23", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3"
    },
    {
      id: 36, title: "Save Your Tears", artist: "The Weeknd", 
      album: "After Hours", duration: "3:35", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3"
    },
    {
      id: 37, title: "STAY", artist: "The Kid LAROI, Justin Bieber", 
      album: "F*CK LOVE 3: OVER YOU", duration: "2:21", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273c59196f35755de7a1107e206",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-37.mp3"
    },
    {
      id: 38, title: "Montero", artist: "Lil Nas X", 
      album: "MONTERO", duration: "2:17", category: "english-hiphop",
      cover: "https://i.scdn.co/image/ab67616d0000b2735aee2e4fda9a7e0a8f7335c8",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3"
    },
    {
      id: 39, title: "Peaches", artist: "Justin Bieber", 
      album: "Justice", duration: "3:18", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3"
    },
    {
      id: 40, title: "Kiss Me More", artist: "Doja Cat ft. SZA", 
      album: "Planet Her", duration: "3:28", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273a935e8edf9c28d7b6c2f00a7",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-40.mp3"
    },
    // Additional 20 English songs...
    {
      id: 41, title: "Butter", artist: "BTS", 
      album: "Butter", duration: "2:42", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-41.mp3"
    },
    {
      id: 42, title: "Dynamite", artist: "BTS", 
      album: "Dynamite", duration: "3:19", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-42.mp3"
    },
    {
      id: 43, title: "Don't Start Now", artist: "Dua Lipa", 
      album: "Future Nostalgia", duration: "3:03", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-43.mp3"
    },
    {
      id: 44, title: "Watermelon Sugar", artist: "Harry Styles", 
      album: "Fine Line", duration: "2:54", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-44.mp3"
    },
    {
      id: 45, title: "drivers license", artist: "Olivia Rodrigo", 
      album: "SOUR", duration: "4:02", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-45.mp3"
    },
    {
      id: 46, title: "positions", artist: "Ariana Grande", 
      album: "positions", duration: "2:52", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-46.mp3"
    },
    {
      id: 47, title: "Mood", artist: "24kGoldn ft. iann dior", 
      album: "El Dorado", duration: "2:20", category: "english-hiphop",
      cover: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-47.mp3"
    },
    {
      id: 48, title: "Savage Love", artist: "Jawsh 685, Jason Derulo", 
      album: "Savage Love", duration: "2:51", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2731d03b5e88cee6870778a4d27",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-48.mp3"
    },
    {
      id: 49, title: "Beautiful Mistakes", artist: "Maroon 5 ft. Megan Thee Stallion", 
      album: "JORDI", duration: "3:47", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2738a6dbac0b74bd2484189ea5f",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-49.mp3"
    },
    {
      id: 50, title: "Leave The Door Open", artist: "Silk Sonic", 
      album: "An Evening With Silk Sonic", duration: "4:02", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2739d2efe43d5b7ebc7cb60a851",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-50.mp3"
    },
    {
      id: 51, title: "Up", artist: "Cardi B", 
      album: "Up", duration: "2:36", category: "english-hiphop",
      cover: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-51.mp3"
    },
    {
      id: 52, title: "Without You", artist: "The Kid LAROI", 
      album: "F*CK LOVE 3: OVER YOU", duration: "2:41", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273c59196f35755de7a1107e206",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-52.mp3"
    },
    {
      id: 53, title: "Astronaut In The Ocean", artist: "Masked Wolf", 
      album: "Astronomical", duration: "2:12", category: "english-hiphop",
      cover: "https://i.scdn.co/image/ab67616d0000b27382dd2427e6d302711b1b9616",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-53.mp3"
    },
    {
      id: 54, title: "Beggin'", artist: "Måneskin", 
      album: "Chosen", duration: "3:31", category: "english-rock",
      cover: "https://i.scdn.co/image/ab67616d0000b273adf560d7a93b5a04b77e9e6c",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-54.mp3"
    },
    {
      id: 55, title: "Heat Waves", artist: "Glass Animals", 
      album: "Dreamland", duration: "3:58", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273f2d8ada4f6c6f8244419a33b",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-55.mp3"
    },
    {
      id: 56, title: "Shivers", artist: "Ed Sheeran", 
      album: "=", duration: "3:27", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b27310a0b2c80d44d8b4188a7c81",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-56.mp3"
    },
    {
      id: 57, title: "Bad Habits", artist: "Ed Sheeran", 
      album: "=", duration: "3:51", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b27310a0b2c80d44d8b4188a7c81",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-57.mp3"
    },
    {
      id: 58, title: "Cold Heart", artist: "Elton John, Dua Lipa", 
      album: "The Lockdown Sessions", duration: "3:22", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b2734a6c0376235e5aa98a7a0d98",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-58.mp3"
    },
    {
      id: 59, title: "Industry Baby", artist: "Lil Nas X ft. Jack Harlow", 
      album: "MONTERO", duration: "3:32", category: "english-hiphop",
      cover: "https://i.scdn.co/image/ab67616d0000b2735aee2e4fda9a7e0a8f7335c8",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-59.mp3"
    },
    {
      id: 60, title: "Need To Know", artist: "Doja Cat", 
      album: "Planet Her", duration: "3:30", category: "english-pop",
      cover: "https://i.scdn.co/image/ab67616d0000b273a935e8edf9c28d7b6c2f00a7",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-60.mp3"
    }
  ];

  const allSongs = [...tamilSongs, ...englishSongs];

  const categories = [
    { id: 'all', name: 'All Songs' },
    { id: 'tamil-top', name: 'Tamil Top Hits' },
    { id: 'tamil-anirudh', name: 'Anirudh Hits' },
    { id: 'tamil-romantic', name: 'Tamil Romantic' },
    { id: 'tamil-party', name: 'Tamil Party' },
    { id: 'english-pop', name: 'English Pop' },
    { id: 'english-hiphop', name: 'English Hip Hop' }
  ];

  const filteredSongs = activeCategory === 'all' 
    ? allSongs 
    : allSongs.filter(song => song.category === activeCategory);

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
        <h2>{categories.find(c => c.id === activeCategory)?.name || 'All Songs'}</h2>
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
