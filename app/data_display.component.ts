import {Component, View} from "angular2/core"

@Component({
    selector: 'data-display'
})

@View({
  template: `
    <h2>Showing data using component properties with interpolation</h2>
    <h3>Player Name:{{player}}</h3>
    <h3>He is famous in: {{sport}}</h3><br>

    <h2>Showing data using constructor or variable initialization</h2>
    <h3>India capital is: {{capital}}</h3><br>

    <h2>Showing data using array property with NgFor</h2>
    <h3>My favorite fruit is: {{myfruit}}</h3>
    <p>List of Fruits:</p>
    <ul>
      <li *ngFor="#fruit of fruits">
        <span (click)="displayAlert(fruit)">{{ fruit }}</span>
      </li>
    </ul>
  `
})

export class DataDisplayComponent{
  player : "Ja";
  sport :  string = 'Football';

  capital: string;

  constructor() {
    this.capital = 'New Delphi';
    this.init();
  }

  fruits = ['Apple 2', 'Orange', 'Banana', 'Mango', 'Grapes'];
  myfruit = this.fruits[1];
  init() {this.fruits.push("smth");}

  displayAlert(text){
    alert(text);
  }

}
