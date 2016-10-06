import {Component} from "angular2/core"
import {NgForm} from "angular2/common"
import {Contact} from "./contact"

@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact.component.html'
})

export class ContactComponent {
  // view variables
  countries = ['India', 'Australia', 'England', 'South Africa', 'USA', 'Japan', 'Singapore'];
  contact = new Contact('Ravi', 'Shankar', this.countries[0], 6445874544);
  submitted = false;
  active = true;

  // view functions
  onSubmit() { this.submitted = true; }
  newContact() {
    this.contact = new Contact('', '','','');
    this.active = false;
    setTimeout(()=> this.active=true, 1);
  }

}
