const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      audioUrl: "https://openui.fly.dev/openui/funky.mp3",
      albumCover: "https://placehold.co/400x200/ff6347/ffffff?text=Album+1",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      audioUrl: "https://openui.fly.dev/openui/another-song.mp3",
      albumCover: "https://placehold.co/400x200/32cd32/ffffff?text=Album+2",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      audioUrl: "https://openui.fly.dev/openui/yet-another-song.mp3",
      albumCover: "https://placehold.co/400x200/4169e1/ffffff?text=Album+3",
    },
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-btn");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const songTitle = document.getElementById("song-title");
  const artistName = document.getElementById("artist-name");
  const albumCover = document.getElementById("album-cover");
  
  function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.audioUrl;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumCover.src = song.albumCover;
    audioPlayer.load();
  }
  
  function playPauseSong() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = "⏸"; // Pause icon
    } else {
      audioPlayer.pause();
      playButton.textContent = "▶"; // Play icon
    }
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
  }
  
  // Event listeners
  playButton.addEventListener("click", playPauseSong);
  prevButton.addEventListener("click", prevSong);
  nextButton.addEventListener("click", nextSong);
  
  // Initial song load
  loadSong(currentSongIndex);
  