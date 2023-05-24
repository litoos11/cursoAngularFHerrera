interface IAudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  detail: IDetails;
}

interface IDetails {
  author: string;
  year: number;
}

const audioPlayer: IAudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  detail: {
    author: 'Ed Sheeran',
    year: 2015
  }
}

const { song: anotherSong, songDuration: duration, detail } = audioPlayer;
const { author } = detail;
// console.log('Song: ', anotherSong);
// console.log('Author: ', author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks = 'Not found'] = dbz;
console.error('Personaje 3: ', trunks);

export { };