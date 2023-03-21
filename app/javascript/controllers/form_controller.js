import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {


    static targets = ["name","course"];

    submit(event) {
      event.preventDefault();
      console.log(`Hello, ${this.nameTarget.value}! you have selected ${this.courseTarget.value} for development`);
    }
  
 
}
