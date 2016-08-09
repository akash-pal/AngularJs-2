import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
 mainHeading = Config.MAIN_HEADING;
 videos:Array<Video>;
 
 constructor(){
    this.videos=[
        new Video(1,'Getting Started','hXfigUyeHaY','AngularJs 2 for Beginners'),
        new Video(2,'Getting started','-AbaV3nrw6E','ReactJS for Beginners')
    ]
 
 }
 
}
