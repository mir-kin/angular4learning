import {Component, OnInit} from '@angular/core';
import {ServerService} from "../shared/server.service";
import { Response } from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.serverService.storeRecipes().subscribe(
        (response: Response) => console.log(response)
    );
    this.serverService.storeShoppingList().subscribe(
        (response: Response) => console.log(response)
    );
  }

  onGetData() {
    this.serverService.getStoredRecipes();
    this.serverService.getShoppingList();
  }

}
