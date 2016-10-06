import {Component} from "angular2/core"
import {CountryListComponent} from "./country_list.component"

@Component({
  selector: 'service',
  template: '<country-list></country-list>',
  directives: [CountryListComponent]
})

export class AppComponent {

}
