import {bootstrap} from "angular2/platform/browser"
import {UserInputComponent} from "./user_input.component"

console.log('Before bootstrap')
bootstrap(UserInputComponent);
console.log('After bootstrap')
