import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() routeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(route: string) {
    this.routeSelected.emit(route);
  }

}
