import {Component, View} from "angular2/core";

@Component({
  selector: 'app'
})

@View({
  template: '<h2>My App from {{name}}</h2>'
})

export class App{
  name : 'TutorialsPoint!!!'

}
