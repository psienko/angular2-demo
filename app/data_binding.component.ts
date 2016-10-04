import {Component} from "angular2/core"

@Component({
  selector: 'app',
  template: `
    <ul>
      <li *ngFor="#Item of Items" (click)="onItemClicked(Item)"> {{Item.name}}</li>
    </ul>
    <input type="text" [(ngModel)]="clickedItem.name">
  `
})

export class DataBindingComponent {
  public Items = [
    { name: 'Audi oooo' },
    { name: 'Volvo' },
    { name: 'Volkswagen' },
    { name: 'Toyota' }
  ];

  public clickedItem = {name: ""};
  onItemClicked(Item) {
    // this.clickedItem = Item;
    this.Items.push({name: this.clickedItem.name});
    console.log('ClickedItem', this.clickedItem);
  }

}
