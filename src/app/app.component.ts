import { Component } from '@angular/core';


@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : [ './app.component.scss' ]
})

export class AppComponent {
  title         = 'momma-made-it';
  loadedFeature = 'recipe';

  onNavigate( feature : string ) : void {
    this.loadedFeature = feature;
  }
}
