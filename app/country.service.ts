import {Injectable} from "angular2/core";
import {COUNTRIES} from "./country.contacts";

@Injectable()

export class CountryService {
  getContacts() {
    return Promise.resolve(COUNTRIES);
  }
}
