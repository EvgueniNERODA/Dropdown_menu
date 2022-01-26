import {Component, OnInit} from '@angular/core';
import {Item} from "../models/item";

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  host: {
  "(window:click)": "onClick()"
  }
})
export class DropdownMenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  isMenuOpen = false;




  /**
   * methode permettant d'ouvrir ou fermer le menu
   * @param $event
   */
  openMenu($event: MouseEvent) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;

  }




  toggle:boolean = true;
  selected: boolean = false;

  selectedItem?:Item;

  /**
   * méthode permettant de selectionner un item
   * @param item
   */
  buttonValue = ["Click me!"];
  onSelect(item:Item): void {

    if (this.selectedItem == item) {
      console.log(item.id + "  " + this.selectedItem.id);
      this.buttonValue = ["Click me!"];
      this.selected = true;
    } else {
      this.selected = false;
      this.buttonValue = [item.name];
    }
    this.selectedItem = item;



  }

  /*déclaration de la listes des items*/
  item1 = new Item(1, "Fruits");
  item2 = new Item(2, "Légumes");
  item3 = new Item(3, "Vêtements");
  item4 = new Item(4, "Accessoires");
  item5 = new Item(5, "Jeux video");
  listItems: Array <Item> = [this.item1, this.item2, this.item3, this.item4, this.item5];



}
