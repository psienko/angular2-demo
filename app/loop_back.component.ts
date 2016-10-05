import {Component} from "angular2/core"

@Component({
  selector: 'loop-back',
  template: `
  <h2>Get user input from a local template variable</h2>

    <!--declare a local template variable by preceding an identifier with a hash character (#)-->
    <input #key_val (keyup)="0">

    <!-- The key_val variable is a reference to the <input> element itself, and grab the input element's value and display it with interpolation between <p> tags -->
    <p>{{key_val.value}}</p>

    <!-- Event Filtering -->
    <input #myval (keyup.enter)="values=myval.value">
    <p>{{values}}</p>

    <!-- On blur event -->
    <h2>User Input On Blur Event</h2>
    <input #myval
      (keyup.enter)="values=myval.value"
      (blur)="values=myval.value">
    <p>{{values}}</p>
    `
})

export class LoopBackComponent {
  values = '';

}
