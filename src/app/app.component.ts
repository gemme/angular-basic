import { Component } from '@angular/core';
import { SongService } from './songs/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playlist';
}
