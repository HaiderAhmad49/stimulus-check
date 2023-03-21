import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="table"
export default class extends Controller {
  static targets = ['table'];

  highlightRow(event) {
    const rowId = event.currentTarget.dataset.rowId;
    const row = this.tableTarget.querySelector(`[data-row-id="${rowId}"]`);
    row.classList.add('highlighted');
  }

  unhighlightRow(event) {
    const rowId = event.currentTarget.dataset.rowId;
    const row = this.tableTarget.querySelector(`[data-row-id="${rowId}"]`);
    row.classList.remove('highlighted');
  }
}
