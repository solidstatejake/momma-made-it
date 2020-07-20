import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector    : 'app-header',
  templateUrl : './header.component.html',
  styleUrls   : [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  collapsed       = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() : void {
  }

  onTabSelect( feature : string ) : void {
    this.featureSelected.emit(feature);
  }
}
