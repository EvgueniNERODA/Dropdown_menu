import { Component, OnInit } from '@angular/core';
import {Item} from "../models/item";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle:boolean = true;

  selectedItem?:Item;


  onSelect(item:Item): void {
    this.selectedItem = item;

    this.toggle = !this.toggle;
  }

  /*déclaration de la listes des items*/
  item1 = new Item(1, "Fruits");
  item2 = new Item(2, "Légumes");
  item3 = new Item(3, "Vêtements");
  item4 = new Item(4, "Accessoires");
  item5 = new Item(5, "Jeux video");
  listItems: Array <Item> = [this.item1, this.item2, this.item3, this.item4, this.item5];
}
