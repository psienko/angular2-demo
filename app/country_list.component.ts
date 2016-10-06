import {Component} from "angular2/core";
import {CountryService} from "./country.service";
import {Country} from "./country"
import {OnInit} from "angular2/core"

@Component({
  selector: 'country-list',
  template: `
    List of countries<br>
    <ul>
      <li *ngFor="#country of countries">{{country.name}}</li>
    </ul>
  `,
  providers: [CountryService]
})

export class CountryListComponent implements OnInit {
  public countries : Country [];
  constructor(private _countryService: CountryService) { }

  getContacts() {
    this._countryService.getContacts().then((countries: Country[]) => this.countries = countries);
  }

  ngOnInit():any {
    this.getContacts();
  }

}
