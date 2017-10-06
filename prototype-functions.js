// name is a string
// creator is a string
// playlists is an array of Playlist instances
const Library = function(name, creator, playlists) {
  this.name = name;
  this.creator = creator;
  this.playlists = playlists; // playlists can be added to an instance of a library
};

// name is a string
// tracks is an array of Track instances
const Playlist = function(name, tracks) {
  this.name = name;
  this.tracks = tracks; // playlist instances will have many tracks
};

// playlist will have a function overallRating, to caluclate rating by averagins all ratings of the tracks
Playlist.prototype.overallRating = function() {
  if(this.tracks.length === 0) {
    return 0;
  }
  return this.tracks.reduce((acc, i) => acc + i.rating, 0) / this.tracks.length;
};

// will also have a function totalDuration, that sums all tracks
Playlist.prototype.totalDuration = function() {
  if(this.tracks.length === 0) {
    return 0;
  }
  return this.tracks.reduce((acc, i) => acc + i.length, 0);
};

const Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

// Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.

// tracks
const track1 = new Track('Hit Me One More Time', 5, 211);
const track2 = new Track('Hit Me One More Time', 4, 111);
const track3 = new Track('Hit Me One More Time', 2, 551);
const track4 = new Track('Hit Me One More Time', 4, 257);
const track5 = new Track('Hit Me One More Time', 5, 218);
const track6 = new Track('Hit Me One More Time', 3, 241);
const track7 = new Track('Hit Me One More Time', 1, 216);
const track8 = new Track('Hit Me One More Time', 5, 211);
const track9 = new Track('Hit Me One More Time', 3, 214);
const track10 = new Track('Hit Me One More Time', 4, 234);
const track11 = new Track('Hit Me One More Time', 5, 229);

// playlists
const playlist1 = new Playlist('funky mix', [track1, track6, track2]);
const playlist2 = new Playlist('groovy mix', [track5, track2, track9]);
const playlist3 = new Playlist('slow mix', [track3, track11, track8]);
const playlist4 = new Playlist('energized mix', [track7, track5, track10]);

console.log(`playlist 1 average duration: ${playlist1.totalDuration()}`);console.log(`playlist 1 average rating: ${playlist1.overallRating()}`);

const library1 = new Library('library 1', 'Natasha Urbancic', [playlist1, playlist2, playlist3, playlist4]);

console.log(library1);


// const prop = name => obj => obj[name];
// const getDuration = prop('length');

// class Playlist {
//   constructor(name, tracks) {
//     this.name = name;
//     this.tracks = tracks;
//   }

//   get overallRating() {
//     if(this.tracks.length === 0) {
//       return 0;
//     }
//     return this.tracks.reduce((acc, i) => acc + i.rating, 0) / this.tracks.length;
//   }

//   get totalDuration() {
//     if(this.tracks.length === 0) {
//       return 0;
//     }
//     return this.tracks.reduce((acc, i) => acc + getDuration(i), 0);
//   }
// }