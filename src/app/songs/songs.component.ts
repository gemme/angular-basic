import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {


  songs = [];

  constructor() {
    this.songs = [
      {
        artist: 'Metallica',
        name: 'Sanatarium',
        url: 'https://www.last.fm/music/Metallica/_/Sanatarium',
      }
    ]
   }

  ngOnInit() {
  }

}
