import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent", "openButton", "closeButton","toggleButton"]
  connect() {
    this.closeDropdown()
    // this.dropdownContentTarget.hidden = true
    // this.closeButtonTarget.hidden = true
  }

toggleButton(){
if (this.dropdownContentTarget.hidden == true) {
  this.openDropdown()
} else {
  this.closeDropdown()
}

}

  openDropdown(){
    this.dropdownContentTarget.hidden = false
    try {
      this.openButtonTarget.hidden = true
      this.closeButtonTarget.hidden = false
    } catch {
     
    }
   

  }

  closeDropdown(){
    this.dropdownContentTarget.hidden = true
    try {
    this.openButtonTarget.hidden = false
    this.closeButtonTarget.hidden = true
  } catch {
    
  }
    

  }


}
