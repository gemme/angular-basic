import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }


  getSongs(){
    return [
      {
        artist: 'Metallica',
        name: 'Sanatarium',
        url: 'https://www.last.fm/music/Metallica/_/Sanatarium',
      }
    ];
  }

}
