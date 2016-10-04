import{View, Component} from "angular2/core";
import{ItemComponent} from "./item-list.component";

@Component({
  selector: 'app',
  template: '<my-list></my-list>',
  directives: [ItemComponent]
})

export class MyTemplate {}
