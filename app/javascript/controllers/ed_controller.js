import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="ed"
export default class extends Controller {
  static targets = ['button'];

  toggleButton() {
    const input = this.element.querySelector('input');
    if (input.value.length > 0) {
      this.buttonTarget.removeAttribute('disabled');
    } else {
      this.buttonTarget.setAttribute('disabled', 'disabled');
    }
  }

  submit() {
    // Submit the form here...
  }
}
