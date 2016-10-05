import {Component} from "angular2/core";
import {ItemListComponent} from "./shopping-list.component";


@Component({
  selector: 'user-input',
  template: '<my-list></my-list>',
  directives: [ItemListComponent]
})

export class UserInputComponent {
  constructor(){
      console.log('Loaded');
  }

}
