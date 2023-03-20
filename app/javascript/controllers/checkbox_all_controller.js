import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="checkbox-all"
export default class extends Controller {
  static targets = ["parent", "child"]
  connect() {
    // this.parentTarget.hidden = true
    // this.childTargets.map(x => x.hidden = true)
  }

  togglechild(){
    
    if (this.parentTarget.checked) {
      this.childTargets.map(x => x.checked = true)
    } else {
      this.childTargets.map(x => x.checked = false)
    }
  }

  toggleparent(){
    if (this.childTargets.map(x => x.checked).includes(false)) {
       this.parentTarget.checked = false
    } else {
      this.parentTarget.checked = true
    }
  }
}
